const path = require("path")

const {
  resolveRemarkQueryArgs,
  resolveRemarkNode,
  loadTypeDefs,
  createResolvableRemark,
  createResolvableSettingsField,
  getFieldsFromType,
  sortByMap,
} = require("./src/utils/gatsby.helpers")

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes, createFieldExtension } = actions

  const typeDefs = loadTypeDefs("./src/schema")

  createFieldExtension({
    name: "fileByStaticPath",
    extend: () => {
      return {
        resolve: async (source, _, { nodeModel }, { fieldName }) => {
          const value = source[fieldName]

          if (!value) return null

          const filePath = path
            .join(process.cwd(), "static", value)
            .replace(/\\/g, "/")

          return await nodeModel.findOne({
            type: "File",
            query: { filter: { absolutePath: { eq: filePath } } },
          })
        },
      }
    },
  })

  createFieldExtension({
    name: "remark",
    extend: () => ({
      resolve: async (source, args, context, info) => {
        const { fieldName } = info
        const { getResolver } = getFieldsFromType("MarkdownRemark", info)
        return await getResolver(fieldName)(source, args, context, info)
      },
    }),
  })

  createFieldExtension({
    name: "blog",
    args: { key: "String" },
    extend: ({ key = "title" }) => ({
      resolve: async (source, _, { nodeModel }, { fieldName }) => {
        if (!source[fieldName]) return null

        const entry = await nodeModel.findOne({
          type: "MarkdownRemark",
          query: resolveRemarkQueryArgs("blog", { [key]: source[fieldName] }),
        })

        return resolveRemarkNode(entry)
      },
    }),
  })

  createFieldExtension({
    name: "member",
    extend: () => ({
      resolve: async (source, _, { nodeModel }, { fieldName }) => {
        const __v = source[fieldName]

        if (Array.isArray(__v)) {
          // TODO there has to be a better way than this?
          // We assume the surname will always be the last word
          const last = __v.map((n) => n.split(" ").slice(-1).join(" "))

          const { entries } = await nodeModel.findAll({
            type: "MarkdownRemark",
            query: resolveRemarkQueryArgs("members", { name: { last } }, "in"),
          })

          return entries.map((entry) => resolveRemarkNode(entry))
        }

        const last = __v.split(" ").slice(-1).join(" ")

        const entry = await nodeModel.findOne({
          type: "MarkdownRemark",
          query: resolveRemarkQueryArgs("members", { name: { last } }),
        })

        return resolveRemarkNode(entry)
      },
    }),
  })

  createTypes(typeDefs)
}

exports.createResolvers = ({ createResolvers }) => {
  // TODO need to do something about this mess
  const resolvableBlogEntry = createResolvableRemark({
    collection: "blog",
    type: "BlogEntry",
  })

  const resolvableEventEntry = createResolvableRemark({
    collection: "events",
    type: "EventEntry",
  })

  const resolvableMember = createResolvableRemark({
    collection: "members",
    type: "Member",
  })

  // 🤡
  const execOrder = {
    "President": 0,
    "VP Internal": 1,
    "VP External": 2,
    "General Secretary": 3,
    "Associate Secretary": 4,
    "Treasurer": 5,
    "Associate Treasurer": 6,
    "Auditor": 7,
    "PIO": 8,
    "PIO External": 9,
  }

  const resolvableExec = createResolvableRemark(
    { collection: "executives", type: "Executive" },
    { sort: sortByMap(execOrder, "role") }
  )

  const committeeOrder = {
    "Design": 0,
    "Academic Affairs": 1,
    "Extracurricular Activities": 2,
    "Sports": 3,
    "Documentation": 4,
    "ICpEERS.VE Lead": 5,
  }

  const resolvableCommittee = createResolvableRemark(
    { collection: "committees", type: "Committee" },
    { sort: sortByMap(committeeOrder, "committee") }
  )

  const theOrderOfTheWeb = {
    "Project Manager": 0,
    "Developers": 1,
    "Content Managers": 2,
    "Designers": 3,
  }

  const resolvableWebster = createResolvableRemark(
    { collection: "websters", type: "Webster" },
    { sort: sortByMap(theOrderOfTheWeb, "team") }
  )

  const resolvers = {
    Query: {
      allBlogEntries: resolvableBlogEntry({
        limit: "Int",
        skip: "Int",
        sort: "BlogEntrySort",
        id: "StringQueryOperatorInput",
        isFeatured: "FeaturedBlogEntryFilter",
        type: "BlogEntryTypeEnum",
        tags: "StringQueryOperatorInput",
      }),

      blogEntry: resolvableBlogEntry({ id: "String!" }, { array: false }),

      allEventEntries: resolvableEventEntry({
        limit: "Int",
        skip: "Int",
        sort: "EventEntrySort",
        // TODO figure out the best way to filter nested dates
        // coverage: "EventEntryDateFilter",
      }),

      eventEntry: resolvableEventEntry({ id: "String!" }, { array: false }),

      allMembers: resolvableMember({
        limit: "Int",
        skip: "Int",
        sort: "MemberSort",
        isVolunteer: "Boolean",
      }),

      member: resolvableMember(
        { id: "String", name: "MemberNameFilter" },
        { array: false }
      ),

      allExecs: resolvableExec({
        limit: "Int",
        skip: "Int",
        //? sort: "MemberSort",
      }),

      exec: resolvableExec(
        { id: "String", role: "RoleEnum" },
        { array: false }
      ),

      allCommittees: resolvableCommittee({ limit: "Int", skip: "Int" }),

      committee: resolvableCommittee(
        { id: "String", committee: "CommitteeEnum" },
        { array: false }
      ),

      allWebsters: resolvableWebster({ limit: "Int", skip: "Int" }),

      webster: resolvableWebster(
        { id: "String", team: "WebsterTeamEnum" },
        { array: false }
      ),

      allSettings: {
        type: "Settings",
        resolve: () => [], // noop
      },
    },

    Member: {
      fullName: {
        type: "String!",
        resolve: ({ name }) =>
          `${name.first} ${name.middle ? name.middle + " " : ""}${name.last}`,
      },
      role: {
        type: "String",
        args: { override: "Boolean" },
        resolve: async (source, args, context, info) => {
          const { override = true } = args
          const { nodeModel } = context

          const { getResolver } = getFieldsFromType("Member", info)

          const member = getResolver("fullName")(source, args, context, info)

          let role = source.isVolunteer ? "Volunteer" : null
          await Promise.all(
            [
              {
                collection: "websters",
                args: { members: [member] },
                comparator: "in",
                key: "team",
                resolveRole: (role) =>
                  role.endsWith("s") ? role.slice(0, -1) : role,
              },
              {
                collection: "committees",
                args: { members: [member] },
                comparator: "in",
                key: "committee",
                resolveRole: (role) =>
                  role.includes("Lead") ? role : `Committee on ${role}`,
              },
              {
                collection: "executives",
                args: { member },
                key: "role",
                resolveRole: (role) => role,
              },
            ].map(
              async ({ collection, args, comparator, key, resolveRole }) => {
                const { entries } = await nodeModel.findAll({
                  type: "MarkdownRemark",
                  query: resolveRemarkQueryArgs(collection, args, comparator),
                })

                entries.forEach(({ frontmatter }) => {
                  // TODO determine caller metadata
                  if (!override && role) return
                  role = resolveRole(frontmatter[key])
                })
              }
            )
          )

          return role
        },
      },
    },

    Settings: {
      ...createResolvableSettingsField("contacts"),
      ...createResolvableSettingsField("platforms"),
      ...createResolvableSettingsField("hero", { array: false }),
    },
  }

  createResolvers(resolvers)
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { data, errors } = await graphql(`
    query {
      allBlogEntries {
        id
        slug
      }
    }
  `)

  if (errors) reporter.panic("Failed", errors)

  data.allBlogEntries.forEach((entry) => {
    actions.createPage({
      path: entry.slug,
      component: path.resolve("./src/templates/BlogPost.jsx"),
      context: { id: entry.id },
    })
  })
}

const fs = require("fs")
const path = require("path")
const micromatch = require("micromatch")

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function loadTypeDefs(filesPath) {
  const typeDefs = []

  const files = fs.readdirSync(filesPath)
  // eslint-disable-next-line no-restricted-syntax
  for (const file of files) {
    const filePath = path.resolve(filesPath, file)
    const content = fs.readFileSync(filePath, "utf-8")

    typeDefs.push(content)
  }

  return typeDefs
}

function resolveRemarkSortFieldName(field) {
  return `frontmatter.${field.toLowerCase().split(/___/).join(".")}`
}

function resolveRemarkSortQueryArgs({ fields = ["title"], order = ["ASC"] }) {
  return {
    fields: fields.map((field) =>
      field === "ID" ? "id" : resolveRemarkSortFieldName(field),
    ),
    order,
  }
}

function _resolveArgs(args, comparator) {
  if (typeof args !== "object") {
    throw new Error("Arguments must be of type `object`.")
  }

  const resolved = Object.fromEntries(
    Object.entries(args)
      // Keys with undefined/null values are treated differently in NodeModel
      // queries, and since defaulting to `false` would affect the results,
      // we only append if they are explicitly provided with a value
      .filter(([k, v]) => k != null && v != null)
      .map(([k, v]) =>
        /eq|ne|gte?|lte?|n?in|glob|regex/.test(k)
          ? [k, v] // leave untouched when comparator overridden
          : [
              k,
              typeof v === "object" && !Array.isArray(v)
                ? _resolveArgs(v, comparator)
                : {
                    [comparator]:
                      // eslint-disable-next-line no-nested-ternary
                      typeof v === "string"
                        ? v.includes("___")
                          ? v.split(/___/).join(" ")
                          : v
                        : v,
                  },
            ],
      ),
  )

  return Object.setPrototypeOf(resolved, null)
}

function resolveRemarkQueryArgs(collection, args, comparator = "eq") {
  const { id, limit, skip, sort, ...rest } = args

  const query = {
    filter: {
      frontmatter: {
        collection: { eq: collection },
      },
    },
  }

  Object.assign(query.filter, _resolveArgs({ id }, comparator))
  Object.assign(query.filter.frontmatter, _resolveArgs(rest, comparator))

  // Only array queries can use these,
  // so append only when provided
  if (limit) query.limit = limit
  if (skip) query.skip = skip

  if (sort) query.sort = resolveRemarkSortQueryArgs(sort)

  return Object.setPrototypeOf(query, null)
}

function getFieldsFromType(type, info) {
  const fields = info.schema.getType(type).getFields()

  return {
    fields,
    getResolver(name) {
      const { resolve } = fields[name]
      return resolve
    },
  }
}

function resolveRemarkNode(node) {
  if (!node) return null

  const { frontmatter, ...rest } = node
  const resolved = { ...rest, ...frontmatter }

  return Object.setPrototypeOf(resolved, null)
}

function checkArgs(args) {
  return Object.values(args).some((v) =>
    typeof v === "object" ? checkArgs(v) : Boolean(v),
  )
}

function createResolvableRemark({ collection, type }, hook = {}) {
  const NODE_TYPE = "MarkdownRemark"

  const {
    map: mapFn = (v) => v,
    sort: sortFn = () => 0,
    filter: filterFn = () => true,
  } = hook

  return ({ args }, opts = {}) => {
    const { array = true } = opts

    const resolvable = {
      type: array ? [type] : type,
      args,
      resolve: async (_, __args, { nodeModel }) => {
        if (!array) {
          if (!checkArgs(__args)) {
            throw new Error(
              `No arguments were provided for query of type "${type}".`,
            )
          }

          const entry = await nodeModel.findOne({
            type: NODE_TYPE,
            query: resolveRemarkQueryArgs(collection, __args),
          })

          return resolveRemarkNode(entry)
        }

        const { entries } = await nodeModel.findAll({
          type: NODE_TYPE,
          query: resolveRemarkQueryArgs(collection, __args),
        })

        return [...entries.map((entry) => resolveRemarkNode(entry))]
          .map(mapFn)
          .filter(filterFn)
          .sort(sortFn)
      },
    }

    return Object.setPrototypeOf(resolvable, null)
  }
}

const compare = {
  eq: (value, filterVal) => value === filterVal,
  glob: (value, filterVal) => micromatch([value], filterVal, {})[0],
  in: (value, filterVal) => filterVal.some((v) => v === value),
  ne: (value, filterVal) => value !== filterVal,
  nin: (value, filterVal) => !filterVal.some((v) => v === value),
  regex: (value, filterVal) => {
    const matches = /\/(.*)\/([gimusy]*)/.exec(filterVal)

    if (!matches)
      throw new Error(
        `Invalid flags supplied to RegExp constructor: "${filterVal}"`,
      )

    return new RegExp(matches[1], matches[2]).test(value)
  },
}

function createResolvableSettingsField(name, opts = {}) {
  const { array = true } = opts

  const resolvable = {
    args: {
      limit: "Int",
      skip: "Int",
      filter: `SettingsYaml${capitalize(name)}${array ? "Filter" : ""}Input`,
    },
    resolve: async (_, { limit, skip, filter }, { nodeModel }) => {
      const { entries } = await nodeModel.findAll({
        type: "SettingsYaml",
      })

      const resolved = [...entries]
        .filter((e) => e[name])
        .flatMap((e) => e[name])
        .filter(
          (e) =>
            !filter ||
            Object.entries(filter).every(([key, comparators]) => {
              const value = e[key]
              return Object.entries(comparators).every(
                ([comparator, filterVal]) =>
                  compare[comparator](value, filterVal),
              )
            }),
        )
        .slice(skip, limit)

      if (!array) return resolved[0]
      return resolved
    },
  }

  if (!array) {
    delete resolvable.args
  }

  return { [name]: Object.setPrototypeOf(resolvable, null) }
}

/**
 * @param {Record<string, number>} orderMap
 * @param {string} key
 * @return {(a: any, b: any) => number}
 */
function sortByMap(orderMap, key) {
  return (a, b) => orderMap[a[key]] - orderMap[b[key]]
}

module.exports = {
  capitalize,
  loadTypeDefs,
  resolveRemarkQueryArgs,
  getFieldsFromType,
  resolveRemarkNode,
  createResolvableRemark,
  createResolvableSettingsField,
  sortByMap,
}

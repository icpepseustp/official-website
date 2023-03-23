/* eslint-disable react/prop-types */
import { graphql } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { Fragment } from "react"

import Seo from "../components/Seo"

function resolveFirst(name) {
  return name?.split(" ").slice(0, -1).join(" ")
}

function resolveLast(name) {
  return name?.split(" ").slice(-1).join(" ")
}

function AboutPage({ data }) {
  const { execs, committees, websters } = data

  return (
    <main className="container flex max-w-6xl justify-center">
      <Seo title="About Us" />

      <section className="flex flex-col justify-center gap-4 lg:gap-8">
        <div className="mt-4 flex shrink flex-col items-center justify-center ">
          <StaticImage
            className="m-4 w-1/2 shrink md:h-32 md:w-60 lg:h-48 lg:w-80"
            src="../../static/media/about/joe_bot.png"
            alt="joe-bot"
          />

          <div className="flex">
            <h3 className="max-w-prose p-4 text-center font-montserrat text-sm font-medium leading-relaxed md:leading-relaxed lg:text-base xl:text-lg">
              <span className="font-bold">
                Institute of Computer Engineers of the Philippines – University
                of Science and Technology of Southern Philippines (ICpEP SE -
                USTP)
              </span>{" "}
              is the unified organization that channels productive, competitive,
              and innovative computer engineers in sustaining knowledge in
              mathematics, sciences and engineering skills. The aim is to
              provide Computer Engineering students with a strong foundation to
              enhance their knowledge, skills, innovativeness that will assist
              them in their personal development, to promote and safeguard the
              welfare and interest according to their privilege.
            </h3>
          </div>
        </div>

        <div className="flex shrink flex-col items-center justify-center">
          <h5 className="mt-8 font-PS2P text-sm md:text-base lg:text-xl">
            THE EXECUTIVES
          </h5>
          <p className="font-montserrat text-xs md:text-base lg:text-xl">
            ICpEP.SE 2021-2022
          </p>
        </div>

        <div className="grid justify-items-center gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {execs.edges.map(({ node: { id, frontmatter } }) => (
            <div key={id} className="flex flex-col items-center justify-center">
              {/* <GatsbyImage
                className="h-32 w-32 justify-center rounded-full md:h-40 md:w-40 lg:h-40 lg:w-40"
                image={getImage(node.image.childImageSharp)}
                alt={node.image.base}
              /> */}
              <p className="mt-3 font-montserrat text-xs font-bold uppercase md:text-sm lg:text-base">
                {resolveLast(frontmatter.member)}
              </p>
              <p className="font-montserrat text-xs md:text-sm lg:text-base">
                {resolveFirst(frontmatter.member)}
              </p>
              <p className="font-montserrat text-xs font-medium italic md:text-sm lg:text-base">
                {frontmatter.role}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex shrink flex-col items-center justify-center">
          <h5 className="font-PS2P text-sm md:text-base lg:text-xl">
            THE COMMITTEES
          </h5>
        </div>

        <div className="hidden justify-items-center gap-8 md:grid md:grid-cols-1 lg:grid lg:grid-cols-2">
          {committees.edges.map(({ node: { frontmatter } }, index) => (
            <div
              key={frontmatter.committee}
              className="flex shrink flex-col items-center justify-center"
            >
              {index < 4 && (
                <div className="grid grid-cols-3 gap-4 justify-self-center">
                  {frontmatter.members.map((member) => (
                    <div
                      key={member}
                      className="flex flex-col items-center justify-center"
                    >
                      {/* <GatsbyImage
                        className="h-32 w-32 justify-center rounded-full"
                        image={getImage(members.image.childImageSharp)}
                        alt={members.image.base}
                      /> */}
                      <p className="mt-3 font-montserrat font-bold uppercase md:text-xs lg:text-sm">
                        {resolveLast(member)}
                      </p>
                      <p className="font-montserrat md:text-sm lg:text-base">
                        {resolveFirst(member)}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {index === 4 && (
                <div className="grid grid-cols-2 gap-4 justify-self-center">
                  {frontmatter.members.map((member) => (
                    <div
                      key={member}
                      className="flex flex-col items-center justify-center"
                    >
                      {/* <GatsbyImage
                        className="h-32 w-32 justify-center rounded-full"
                        image={getImage(member.image.childImageSharp)}
                        alt={member.image.base}
                      /> */}
                      <p className="mt-3 font-montserrat font-bold uppercase md:text-xs lg:text-sm">
                        {resolveLast(member)}
                      </p>
                      <p className="font-montserrat md:text-sm lg:text-base">
                        {resolveFirst(member)}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {index === 5 && (
                <div className="grid grid-cols-1 gap-4 justify-self-center">
                  {frontmatter.members.map((member) => (
                    <div
                      key={member}
                      className="flex flex-col items-center justify-center"
                    >
                      {/* <GatsbyImage
                        className="h-32 w-32 justify-center rounded-full"
                        image={getImage(members.image.childImageSharp)}
                        alt={members.image.base}
                      /> */}
                      <p className="mt-3 font-montserrat font-bold uppercase md:text-xs lg:text-sm">
                        {resolveLast(member)}
                      </p>
                      <p className="font-montserrat md:text-sm lg:text-base">
                        {resolveFirst(member)}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <p className="mt-3 mb-4 font-montserrat font-medium italic md:text-xs lg:text-sm">
                {frontmatter.committee}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 justify-items-center md:hidden lg:hidden">
          {committees.edges.map(({ node: { frontmatter } }, mIndex) => (
            <div
              key={frontmatter.id}
              className="flex shrink flex-col items-center justify-center"
            >
              {mIndex < 5 && (
                <div className="grid grid-cols-2 gap-4">
                  {frontmatter.members.map(
                    (member, index) =>
                      index < 2 && (
                        <div
                          key={member}
                          className="flex flex-col items-center justify-center"
                        >
                          {/* <GatsbyImage
                            className="h-24 w-24 justify-center rounded-full"
                            image={getImage(members.image.childImageSharp)}
                            alt={members.image.base}
                          /> */}
                          <p className="mt-3 font-montserrat text-xs font-bold uppercase">
                            {resolveLast(member)}
                          </p>
                          <p className="font-montserrat text-xs">
                            {resolveFirst(member)}
                          </p>
                        </div>
                      )
                  )}
                </div>
              )}

              {mIndex < 4 && (
                <div className="flex flex-col items-center justify-center">
                  {/* <GatsbyImage
                    className="h-24 w-24 justify-center rounded-full"
                    image={getImage(
                      frontmatter.members[2].image.childImageSharp
                    )}
                    alt={frontmatter.members[2].image.base}
                  /> */}
                  <p className="mt-3 font-montserrat text-xs font-bold uppercase">
                    {resolveLast(frontmatter.members[2])}
                  </p>
                  <p className="font-montserrat text-xs">
                    {resolveFirst(frontmatter.members[2])}
                  </p>
                </div>
              )}

              {mIndex === 5 && (
                <div className="grid grid-cols-1">
                  {frontmatter.members.map((member) => (
                    <div
                      key={member}
                      className="flex flex-col items-center justify-center"
                    >
                      {/* <GatsbyImage
                        className="h-24 w-24 justify-center rounded-full"
                        image={getImage(members.image.childImageSharp)}
                        alt={members.image.base}
                      /> */}
                      <p className="mt-3 font-montserrat text-xs font-bold uppercase">
                        {resolveLast(member)}
                      </p>
                      <p className="font-montserrat text-xs">
                        {resolveFirst(member)}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <p className="mt-3 mb-8 font-montserrat text-xs font-medium italic">
                {frontmatter.role}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex shrink flex-col items-center justify-center">
          <h5 className="font-PS2P text-xs md:text-base lg:text-xl">
            ICpEP.SE WEBSITE TEAM
          </h5>
        </div>

        <div className="hidden grid-cols-1 justify-items-center md:grid lg:grid">
          {websters.edges.map(
            ({ node: { frontmatter } }, mIndex) =>
              mIndex <= 1 && (
                <div
                  key={frontmatter.id}
                  className="flex flex-col items-center justify-center"
                >
                  {mIndex === 0 && (
                    <div className="mt-4 grid grid-cols-1 justify-items-center">
                      {frontmatter.members.map((member) => (
                        <div
                          key={member}
                          className="flex flex-col items-center justify-center"
                        >
                          {/* <GatsbyImage
                            className="h-32 w-32 justify-center rounded-full"
                            image={getImage(member.image.childImageSharp)}
                            alt={member.image.base}
                          /> */}
                          <p className="mt-3 font-montserrat font-bold uppercase md:text-xs lg:text-sm">
                            {resolveLast(member)}
                          </p>
                          <p className="font-montserrat md:text-xs lg:text-sm">
                            {resolveFirst(member)}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {mIndex === 1 && (
                    <div className="mt-4 grid justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-4">
                      {frontmatter.members.map((member) => (
                        <div
                          key={member}
                          className="flex flex-col items-center justify-center"
                        >
                          {/* <GatsbyImage
                            className="h-32 w-32 justify-center rounded-full"
                            image={getImage(member.image.childImageSharp)}
                            alt={member.image.base}
                          /> */}
                          <p className="mt-3 font-montserrat font-bold uppercase md:text-xs lg:text-sm">
                            {resolveLast(member)}
                          </p>
                          <p className="font-montserrat md:text-xs lg:text-sm">
                            {resolveFirst(member)}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  <p className="mt-3 mb-8 font-montserrat font-medium italic md:text-xs lg:text-sm">
                    {frontmatter.team}
                  </p>
                </div>
              )
          )}
        </div>

        <div className="mb-10 hidden flex-col items-center md:flex lg:flex">
          <div className="md:grid-flow-cols-1 grid gap-0 lg:grid-cols-2">
            {websters.edges.map(({ node: { frontmatter } }, mIndex) => (
              <div key={frontmatter.id} className="px-4">
                {mIndex >= 2 && (
                  <div className="flex flex-col">
                    <div className="mt-4 grid grid-cols-3 justify-items-center gap-10 ">
                      {frontmatter.members.map((member) => (
                        <div key={member} className="px-0">
                          <div className="flex flex-col items-center justify-center">
                            {/* <GatsbyImage
                              className="h-32 w-32 justify-center rounded-full"
                              image={getImage(members.image.childImageSharp)}
                              alt={members.image.base}
                            /> */}
                            <p className="mt-3 font-montserrat font-bold uppercase md:text-xs lg:text-sm">
                              {resolveLast(member)}
                            </p>
                            <p className="font-montserrat md:text-xs lg:text-sm">
                              {resolveLast(member)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <p className="mt-3 mb-8 text-center font-montserrat font-medium italic md:text-xs lg:text-sm">
                      {frontmatter.team}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 justify-items-center md:hidden lg:hidden">
          {websters.edges.map(({ node: { frontmatter } }, mIndex) => (
            <Fragment key={frontmatter.id}>
              <div className="flex flex-col items-center justify-center">
                {mIndex === 0 && (
                  <div className="mt-4 grid grid-cols-1 justify-items-center">
                    {frontmatter.members.map((member) => (
                      <div
                        key={member}
                        className="flex flex-col items-center justify-center"
                      >
                        {/* <GatsbyImage
                          className="h-24 w-24 justify-center rounded-full"
                          image={getImage(member.image.childImageSharp)}
                          alt={member.image.base}
                        /> */}
                        <p className="mt-3 font-montserrat text-xs font-bold uppercase">
                          {resolveLast(member)}
                        </p>
                        <p className="font-montserrat text-xs">
                          {resolveFirst(member)}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {mIndex === 1 && (
                  <>
                    <div className="mt-4 grid grid-cols-1 justify-items-center">
                      <div className="flex flex-col items-center justify-center">
                        {/* <GatsbyImage
                          className="h-24 w-24 justify-center rounded-full"
                          image={getImage(
                            frontmatter.members[0].image.childImageSharp
                          )}
                          alt={frontmatter.members[0].image.base}
                        /> */}
                        <p className="mt-3 font-montserrat text-xs font-bold uppercase">
                          {resolveLast(frontmatter.members[0])}
                        </p>
                        <p className="font-montserrat text-xs">
                          {resolveFirst(frontmatter.members[0])}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 justify-items-center gap-8">
                      {[1, 2].map((index) => (
                        <div
                          key={frontmatter.members[index]}
                          className="flex flex-col items-center justify-center"
                        >
                          {/* <GatsbyImage
                            className="h-24 w-24 justify-center rounded-full"
                            image={getImage(
                              node.members[index].image.childImageSharp
                            )}
                            alt={node.members[index].image.base}
                          /> */}
                          <p className="mt-3 font-montserrat text-xs font-bold uppercase">
                            {resolveLast(frontmatter.members[index])}
                          </p>
                          <p className="font-montserrat text-xs">
                            {resolveFirst(frontmatter.members[index])}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 grid grid-cols-1 justify-items-center">
                      <div className="flex flex-col items-center justify-center">
                        {/* <GatsbyImage
                          className="h-24 w-24 justify-center rounded-full"
                          image={getImage(
                            node.members[3].image.childImageSharp
                          )}
                          alt={node.members[0].image.base}
                        /> */}
                        <p className="mt-3 font-montserrat text-xs font-bold uppercase">
                          {resolveLast(frontmatter.members[3])}
                        </p>
                        <p className="font-montserrat text-xs">
                          {resolveFirst(frontmatter.members[3])}
                        </p>
                      </div>
                    </div>
                  </>
                )}

                {mIndex >= 2 && (
                  <div className="mt-4 grid grid-cols-1 justify-items-center">
                    <div className="mt-4 grid grid-cols-1 justify-items-center">
                      <div className="flex flex-col items-center justify-center">
                        {/* <GatsbyImage
                          className="h-24 w-24 justify-center rounded-full"
                          image={getImage(
                            node.members[0].image.childImageSharp
                          )}
                          alt={node.members[0].image.base}
                        /> */}
                        <p className="mt-3 font-montserrat text-xs font-bold uppercase">
                          {resolveLast(frontmatter.members[0])}
                        </p>
                        <p className="font-montserrat text-xs">
                          {resolveFirst(frontmatter.members[0])}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 justify-items-center gap-8">
                      {[1, 2].map((index) => (
                        <div
                          key={resolveLast(frontmatter.members[index])}
                          className="flex flex-col items-center justify-center"
                        >
                          {/* <GatsbyImage
                            className="h-24 w-24 justify-center rounded-full"
                            image={getImage(
                              node.members[index].image.childImageSharp
                            )}
                            alt={node.members[index].image.base}
                          /> */}
                          <p className="mt-3 font-montserrat text-xs font-bold uppercase">
                            {resolveLast(frontmatter.members[index])}
                          </p>
                          <p className="font-montserrat text-xs">
                            {resolveFirst(frontmatter.members[index])}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <p className="mt-3 mb-8 text-center font-montserrat text-xs font-medium italic">
                {frontmatter.team}
              </p>
            </Fragment>
          ))}
        </div>
      </section>
    </main>
  )
}

export const query = graphql`
  query AboutPage {
    execs: allMarkdownRemark(
      filter: { frontmatter: { collection: { eq: "executives" } } }
      sort: { fields: id, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            member
            role
          }
        }
      }
    }

    committees: allMarkdownRemark(
      filter: { frontmatter: { collection: { eq: "committees" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            members
            committee
          }
        }
      }
    }

    websters: allMarkdownRemark(
      filter: { frontmatter: { collection: { eq: "websters" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            team
            members
          }
        }
      }
    }
  }
`

export default AboutPage

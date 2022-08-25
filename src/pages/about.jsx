import { graphql } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

import Seo from "../components/Seo"

function AboutPage({ data }) {
  return (
    <main className="container flex max-w-6xl justify-center">
      <Seo title="About Us" />

      <section className="flex flex-col justify-center">
        <div className="mt-4 flex shrink flex-col items-center justify-center ">
          <StaticImage
            className="h-24 w-40 shrink md:h-32 md:w-60 lg:h-48 lg:w-80"
            src="../images/about/joe_bot.png"
            alt="joe-bot"
          />

          <div className="flex w-11/12">
            <h3 className="text-center font-montserrat text-sm font-medium md:leading-relaxed lg:text-base lg:leading-loose">
              {" "}
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
          <h5 className="mt-8 font-PS2P text-xs md:text-base lg:text-xl">
            THE EXECUTIVES
          </h5>
          <p className="font-montserrat text-xs md:text-base lg:text-xl">
            ICpEP.SE 2021-2022
          </p>
        </div>

        <div className="mt-4 grid justify-items-center gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {data.exec.edges.map(({ node }) => (
            <div className="flex flex-col items-center justify-center">
              <GatsbyImage
                key={node.id}
                className="h-32 w-32 justify-center rounded-full md:h-40 md:w-40 lg:h-40 lg:w-40"
                image={getImage(node.image.childImageSharp)}
                alt={node.image.base}
              />
              <p className="mt-3 font-montserrat text-xs font-bold uppercase md:text-sm lg:text-base">
                {node.lastname}
              </p>
              <p className="font-montserrat text-xs md:text-sm lg:text-base">
                {node.firstname}
              </p>
              <p className="font-montserrat text-xs font-medium italic md:text-sm lg:text-base">
                {node.pos}
              </p>
            </div>
          ))}
        </div>

        <div className="flex shrink flex-col items-center justify-center">
          <h5 className="mt-8 mb-5 font-PS2P text-xs md:text-base lg:text-xl">
            THE COMMITTEES
          </h5>
        </div>
        <div className="mt-4 hidden justify-items-center gap-4 md:grid md:grid-cols-1 lg:grid lg:grid-cols-2">
          {data.coms.edges.map(({ node }, index) => (
            <div
              key={node.id}
              className="flex shrink flex-col items-center justify-center"
            >
              {index < 4 && (
                <div className="grid grid-cols-3 gap-4 justify-self-center">
                  {node.members.map((members) => (
                    <div
                      key={members.image.id}
                      className="flex flex-col items-center justify-center"
                    >
                      <GatsbyImage
                        className="h-32 w-32 justify-center rounded-full"
                        image={getImage(members.image.childImageSharp)}
                        alt={members.image.base}
                      />
                      <p className="mt-3 font-montserrat font-bold uppercase md:text-xs lg:text-sm">
                        {members.lastname}
                      </p>
                      <p className="font-montserrat md:text-sm lg:text-base">
                        {members.firstname}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {index === 4 && (
                <div className="grid grid-cols-2 gap-4 justify-self-center">
                  {node.members.map((members) => (
                    <div
                      key={members.image.id}
                      className="flex flex-col items-center justify-center"
                    >
                      <GatsbyImage
                        className="h-32 w-32 justify-center rounded-full"
                        image={getImage(members.image.childImageSharp)}
                        alt={members.image.base}
                      />
                      <p className="mt-3 font-montserrat font-bold uppercase md:text-xs lg:text-sm">
                        {members.lastname}
                      </p>
                      <p className="font-montserrat md:text-sm lg:text-base">
                        {members.firstname}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {index === 5 && (
                <div className="grid grid-cols-1 gap-4 justify-self-center">
                  {node.members.map((members) => (
                    <div
                      key={members.image.id}
                      className="flex flex-col items-center justify-center"
                    >
                      <GatsbyImage
                        className="h-32 w-32 justify-center rounded-full"
                        image={getImage(members.image.childImageSharp)}
                        alt={members.image.base}
                      />
                      <p className="mt-3 font-montserrat font-bold uppercase md:text-xs lg:text-sm">
                        {members.lastname}
                      </p>
                      <p className="font-montserrat md:text-sm lg:text-base">
                        {members.firstname}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <p className="mt-3 mb-4 font-montserrat font-medium italic md:text-xs lg:text-sm">
                {node.pos}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 justify-items-center md:hidden lg:hidden">
          {data.coms.edges.map(({ node }, mindex) => (
            <div
              key={node.id}
              className="flex shrink flex-col items-center justify-center"
            >
              {mindex < 5 && (
                <div className="grid grid-cols-2 gap-4">
                  {node.members.map((members, index) => (
                    <div>
                      {index < 2 && (
                        <div
                          key={members.image.id}
                          className="flex flex-col items-center justify-center"
                        >
                          <GatsbyImage
                            key={index}
                            className="h-24 w-24 justify-center rounded-full"
                            image={getImage(members.image.childImageSharp)}
                            alt={members.image.base}
                          />
                          <p className="mt-3 font-montserrat text-xs font-bold uppercase">
                            {members.lastname}
                          </p>
                          <p className="font-montserrat text-xs">
                            {members.firstname}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {mindex < 4 && (
                <div
                  key={node.members[2].image.id}
                  className="flex flex-col items-center justify-center"
                >
                  <GatsbyImage
                    className="h-24 w-24 justify-center rounded-full"
                    image={getImage(node.members[2].image.childImageSharp)}
                    alt={node.members[2].image.base}
                  />
                  <p className="mt-3 font-montserrat text-xs font-bold uppercase">
                    {node.members[2].lastname}
                  </p>
                  <p className="font-montserrat text-xs">
                    {node.members[2].firstname}
                  </p>
                </div>
              )}

              {mindex === 5 && (
                <div className="grid grid-cols-1">
                  {node.members.map((members) => (
                    <div>
                      {
                        <div
                          key={members.image.id}
                          className="flex flex-col items-center justify-center"
                        >
                          <GatsbyImage
                            className="h-24 w-24 justify-center rounded-full"
                            image={getImage(members.image.childImageSharp)}
                            alt={members.image.base}
                          />
                          <p className="mt-3 font-montserrat text-xs font-bold uppercase">
                            {members.lastname}
                          </p>
                          <p className="font-montserrat text-xs">
                            {members.firstname}
                          </p>
                        </div>
                      }
                    </div>
                  ))}
                </div>
              )}

              <p className="mt-3 mb-8 font-montserrat text-xs font-medium italic">
                {node.pos}
              </p>
            </div>
          ))}
        </div>

        <div className="flex shrink flex-col items-center justify-center">
          <h5 className="mt-8 font-PS2P text-xs md:text-base lg:text-xl">
            ICpEP.SE WEBSITE TEAM
          </h5>
        </div>

        <div className="mt-4 hidden grid-cols-1 justify-items-center md:grid lg:grid">
          {data.devs.edges.map(({ node }, mindex) => (
            <div>
              {mindex <= 1 && (
                <div className="flex flex-col items-center justify-center">
                  {mindex === 0 && (
                    <div
                      key={node.id}
                      className="mt-4 grid grid-cols-1 justify-items-center"
                    >
                      {node.members.map((members, index) => (
                        <div>
                          <div
                            key={members.image.id}
                            className="flex flex-col items-center justify-center"
                          >
                            <GatsbyImage
                              key={index}
                              className="h-32 w-32 justify-center rounded-full"
                              image={getImage(members.image.childImageSharp)}
                              alt={members.image.base}
                            />
                            <p className="mt-3 font-montserrat font-bold uppercase md:text-xs lg:text-sm">
                              {members.lastname}
                            </p>
                            <p className="font-montserrat md:text-xs lg:text-sm">
                              {members.firstname}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {mindex === 1 && (
                    <div
                      key={node.id}
                      className="mt-4 grid justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-4"
                    >
                      {node.members.map((members, index) => (
                        <div>
                          <div
                            key={members.image.id}
                            className="flex flex-col items-center justify-center"
                          >
                            <GatsbyImage
                              key={index}
                              className="h-32 w-32 justify-center rounded-full"
                              image={getImage(members.image.childImageSharp)}
                              alt={members.image.base}
                            />
                            <p className="mt-3 font-montserrat font-bold uppercase md:text-xs lg:text-sm">
                              {members.lastname}
                            </p>
                            <p className="font-montserrat md:text-xs lg:text-sm">
                              {members.firstname}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <p className="mt-3 mb-8 font-montserrat font-medium italic md:text-xs lg:text-sm">
                    {node.pos}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mb-10 hidden flex-col items-center md:flex lg:flex">
          <div className="md:grid-flow-cols-1 grid gap-0 lg:grid-cols-2">
            {data.devs.edges.map(({ node }, mindex) => (
              <div className="px-4">
                {mindex >= 2 && (
                  <div className="flex flex-col">
                    <div
                      key={node.id}
                      className="mt-4 grid grid-cols-3 justify-items-center gap-10 "
                    >
                      {node.members.map((members, index) => (
                        <div className="px-0">
                          <div
                            key={members.image.id}
                            className="flex flex-col items-center justify-center"
                          >
                            <GatsbyImage
                              key={index}
                              className="h-32 w-32 justify-center rounded-full"
                              image={getImage(members.image.childImageSharp)}
                              alt={members.image.base}
                            />
                            <p className="mt-3 font-montserrat font-bold uppercase md:text-xs lg:text-sm">
                              {members.lastname}
                            </p>
                            <p className="font-montserrat md:text-xs lg:text-sm">
                              {members.firstname}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <p className="mt-3 mb-8 text-center font-montserrat font-medium italic md:text-xs lg:text-sm">
                      {node.pos}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 justify-items-center md:hidden lg:hidden">
          {data.devs.edges.map(({ node }, mindex) => (
            <div>
              <div className="flex flex-col items-center justify-center">
                {mindex === 0 && (
                  <div
                    key={node.id}
                    className="mt-4 grid grid-cols-1 justify-items-center"
                  >
                    {node.members.map((members, index) => (
                      <div>
                        <div
                          key={members.image.id}
                          className="flex flex-col items-center justify-center"
                        >
                          <GatsbyImage
                            key={index}
                            className="h-24 w-24 justify-center rounded-full"
                            image={getImage(members.image.childImageSharp)}
                            alt={members.image.base}
                          />
                          <p className="mt-3 font-montserrat text-xs font-bold uppercase">
                            {members.lastname}
                          </p>
                          <p className="font-montserrat text-xs">
                            {members.firstname}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {mindex === 1 && (
                  <div>
                    <div
                      key={node.id}
                      className="mt-4 grid grid-cols-1 justify-items-center"
                    >
                      <div
                        key={node.members[0].image.id}
                        className="flex flex-col items-center justify-center"
                      >
                        <GatsbyImage
                          className="h-24 w-24 justify-center rounded-full"
                          image={getImage(
                            node.members[0].image.childImageSharp
                          )}
                          alt={node.members[0].image.base}
                        />
                        <p className="mt-3 font-montserrat text-xs font-bold uppercase">
                          {node.members[0].lastname}
                        </p>
                        <p className="font-montserrat text-xs">
                          {node.members[0].firstname}
                        </p>
                      </div>
                    </div>

                    <div
                      key={node.id}
                      className="mt-4 grid grid-cols-2 justify-items-center gap-8"
                    >
                      {[1, 2].map((index) => (
                        <div>
                          <div
                            key={node.members[index].image.id}
                            className="flex flex-col items-center justify-center"
                          >
                            <GatsbyImage
                              key={index}
                              className="h-24 w-24 justify-center rounded-full"
                              image={getImage(
                                node.members[index].image.childImageSharp
                              )}
                              alt={node.members[index].image.base}
                            />
                            <p className="mt-3 font-montserrat text-xs font-bold uppercase">
                              {node.members[index].lastname}
                            </p>
                            <p className="font-montserrat text-xs">
                              {node.members[index].firstname}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div
                      key={node.id}
                      className="mt-4 grid grid-cols-1 justify-items-center"
                    >
                      <div
                        key={node.members[3].image.id}
                        className="flex flex-col items-center justify-center"
                      >
                        <GatsbyImage
                          className="h-24 w-24 justify-center rounded-full"
                          image={getImage(
                            node.members[3].image.childImageSharp
                          )}
                          alt={node.members[0].image.base}
                        />
                        <p className="mt-3 font-montserrat text-xs font-bold uppercase">
                          {node.members[3].lastname}
                        </p>
                        <p className="font-montserrat text-xs">
                          {node.members[3].firstname}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {mindex >= 2 && (
                  <div
                    key={node.id}
                    className="mt-4 grid grid-cols-1 justify-items-center"
                  >
                    <div
                      key={node.id}
                      className="mt-4 grid grid-cols-1 justify-items-center"
                    >
                      <div
                        key={node.members[0].image.id}
                        className="flex flex-col items-center justify-center"
                      >
                        <GatsbyImage
                          className="h-24 w-24 justify-center rounded-full"
                          image={getImage(
                            node.members[0].image.childImageSharp
                          )}
                          alt={node.members[0].image.base}
                        />
                        <p className="mt-3 font-montserrat text-xs font-bold uppercase">
                          {node.members[0].lastname}
                        </p>
                        <p className="font-montserrat text-xs">
                          {node.members[0].firstname}
                        </p>
                      </div>
                    </div>

                    <div
                      key={node.id}
                      className="mt-4 grid grid-cols-2 justify-items-center gap-8"
                    >
                      {[1, 2].map((index) => (
                        <div>
                          <div
                            key={node.members[index].image.id}
                            className="flex flex-col items-center justify-center"
                          >
                            <GatsbyImage
                              key={index}
                              className="h-24 w-24 justify-center rounded-full"
                              image={getImage(
                                node.members[index].image.childImageSharp
                              )}
                              alt={node.members[index].image.base}
                            />
                            <p className="mt-3 font-montserrat text-xs font-bold uppercase">
                              {node.members[index].lastname}
                            </p>
                            <p className="font-montserrat text-xs">
                              {node.members[index].firstname}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <p className="mt-3 mb-8 text-center font-montserrat text-xs font-medium italic">
                {node.pos}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    exec: allExecutivesJson(sort: { fields: order }) {
      edges {
        node {
          firstname
          lastname
          order
          pos
          image {
            base
            childImageSharp {
              gatsbyImageData(
                aspectRatio: 1
                blurredOptions: { width: 100 }
                placeholder: BLURRED
                transformOptions: { cropFocus: CENTER }
                width: 500
              )
            }
          }
          id
        }
      }
    }
    coms: allCommitteesJson {
      edges {
        node {
          members {
            firstname
            lastname
            image {
              base
              childImageSharp {
                gatsbyImageData(
                  aspectRatio: 1
                  blurredOptions: { width: 100 }
                  placeholder: BLURRED
                  transformOptions: { cropFocus: CENTER }
                  width: 500
                )
              }
              id
            }
          }
          pos
          id
        }
      }
    }
    devs: allDevelopmentJson {
      edges {
        node {
          id
          pos
          members {
            firstname
            lastname
            image {
              childImageSharp {
                gatsbyImageData(
                  aspectRatio: 1
                  blurredOptions: { width: 100 }
                  placeholder: BLURRED
                  transformOptions: { cropFocus: CENTER }
                  width: 500
                )
                id
              }
              base
            }
          }
        }
      }
    }
  }
`

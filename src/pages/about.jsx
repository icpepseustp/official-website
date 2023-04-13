import { graphql } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import { arrayOf, object, shape } from "prop-types"
import { Fragment } from "react"

import Seo from "../components/Seo"

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
          {execs.map(({ id, member, role }) => (
            <div key={id} className="flex flex-col items-center justify-center">
              <GatsbyImage
                className="h-32 w-32 justify-center rounded-full md:h-40 md:w-40 lg:h-40 lg:w-40"
                image={getImage(member.avatar.image)}
                alt={member.avatar.alt}
              />

              <p className="mt-3 font-montserrat text-xs font-bold uppercase md:text-sm lg:text-base">
                {member.name.last}
              </p>

              <p className="font-montserrat text-xs md:text-sm lg:text-base">
                {member.name.first}
              </p>

              <p className="font-montserrat text-xs font-medium italic md:text-sm lg:text-base">
                {role}
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
          {committees.map(({ id, committee, members }, index) => (
            <div
              key={id}
              className="flex shrink flex-col items-center justify-center"
            >
              {index < 4 && (
                <div className="grid grid-cols-3 gap-4 justify-self-center">
                  {members.map((member) => (
                    <div
                      key={member.id}
                      className="flex flex-col items-center justify-center"
                    >
                      <GatsbyImage
                        className="h-32 w-32 justify-center rounded-full"
                        image={getImage(member.avatar.image)}
                        alt={member.avatar.alt}
                      />
                      <p className="mt-3 font-montserrat font-bold uppercase md:text-xs lg:text-sm">
                        {member.name.last}
                      </p>
                      <p className="font-montserrat md:text-sm lg:text-base">
                        {member.name.first}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {index === 4 && (
                <div className="grid grid-cols-2 gap-4 justify-self-center">
                  {members.map((member) => (
                    <div
                      key={member.id}
                      className="flex flex-col items-center justify-center"
                    >
                      <GatsbyImage
                        className="h-32 w-32 justify-center rounded-full"
                        image={getImage(member.avatar.image)}
                        alt={member.avatar.alt}
                      />

                      <p className="mt-3 font-montserrat font-bold uppercase md:text-xs lg:text-sm">
                        {member.name.last}
                      </p>

                      <p className="font-montserrat md:text-sm lg:text-base">
                        {member.name.first}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {index === 5 && (
                <div className="grid grid-cols-1 gap-4 justify-self-center">
                  {members.map((member) => (
                    <div
                      key={member.id}
                      className="flex flex-col items-center justify-center"
                    >
                      <GatsbyImage
                        className="h-32 w-32 justify-center rounded-full"
                        image={getImage(member.avatar.image)}
                        alt={member.avatar.alt}
                      />

                      <p className="mt-3 font-montserrat font-bold uppercase md:text-xs lg:text-sm">
                        {member.name.last}
                      </p>

                      <p className="font-montserrat md:text-sm lg:text-base">
                        {member.name.first}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <p className="mb-4 mt-3 font-montserrat font-medium italic md:text-xs lg:text-sm">
                {!committee.includes("Lead") && "Committee on"} {committee}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 justify-items-center md:hidden lg:hidden">
          {committees.map(({ id, committee, members }, mIndex) => (
            <div
              key={id}
              className="flex shrink flex-col items-center justify-center"
            >
              {mIndex < 5 && (
                <div className="grid grid-cols-2 gap-4">
                  {members.map(
                    (member, index) =>
                      index < 2 && (
                        <div
                          key={member.id}
                          className="flex flex-col items-center justify-center"
                        >
                          <GatsbyImage
                            className="h-24 w-24 justify-center rounded-full"
                            image={getImage(member.avatar.image)}
                            alt={member.avatar.alt}
                          />
                          <p className="mt-3 font-montserrat text-xs font-bold uppercase">
                            {member.name.last}
                          </p>
                          <p className="font-montserrat text-xs">
                            {member.name.first}
                          </p>
                        </div>
                      )
                  )}
                </div>
              )}

              {mIndex < 4 && (
                <div className="flex flex-col items-center justify-center">
                  <GatsbyImage
                    className="h-24 w-24 justify-center rounded-full"
                    image={getImage(members[2].avatar.image)}
                    alt={members[2].avatar.alt}
                  />
                  <p className="mt-3 font-montserrat text-xs font-bold uppercase">
                    {members[2].name.last}
                  </p>
                  <p className="font-montserrat text-xs">
                    {members[2].name.first}
                  </p>
                </div>
              )}

              {mIndex === 5 && (
                <div className="grid grid-cols-1">
                  {members.map((member) => (
                    <div
                      key={member.id}
                      className="flex flex-col items-center justify-center"
                    >
                      <GatsbyImage
                        className="h-24 w-24 justify-center rounded-full"
                        image={getImage(member.avatar.image)}
                        alt={member.avatar.alt}
                      />
                      <p className="mt-3 font-montserrat text-xs font-bold uppercase">
                        {member.name.last}
                      </p>
                      <p className="font-montserrat text-xs">
                        {member.name.first}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <p className="mb-8 mt-3 font-montserrat text-xs font-medium italic">
                {!committee.includes("Lead") && "Committee on "}
                {committee}
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
          {websters.map(
            ({ id, team, members }, mIndex) =>
              mIndex <= 1 && (
                <div
                  key={id}
                  className="flex flex-col items-center justify-center"
                >
                  {mIndex === 0 && (
                    <div className="mt-4 grid grid-cols-1 justify-items-center">
                      {members.map((member) => (
                        <div
                          key={member.id}
                          className="flex flex-col items-center justify-center"
                        >
                          <GatsbyImage
                            className="h-32 w-32 justify-center rounded-full"
                            image={getImage(member.avatar.image)}
                            alt={member.avatar.alt}
                          />
                          <p className="mt-3 font-montserrat font-bold uppercase md:text-xs lg:text-sm">
                            {member.name.last}
                          </p>
                          <p className="font-montserrat md:text-xs lg:text-sm">
                            {member.name.first}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {mIndex === 1 && (
                    <div className="mt-4 grid justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-4">
                      {members.map((member) => (
                        <div
                          key={member.id}
                          className="flex flex-col items-center justify-center"
                        >
                          <GatsbyImage
                            className="h-32 w-32 justify-center rounded-full"
                            image={getImage(member.avatar.image)}
                            alt={member.avatar.alt}
                          />
                          <p className="mt-3 font-montserrat font-bold uppercase md:text-xs lg:text-sm">
                            {member.name.last}
                          </p>
                          <p className="font-montserrat md:text-xs lg:text-sm">
                            {member.name.first}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  <p className="mb-8 mt-3 font-montserrat font-medium italic md:text-xs lg:text-sm">
                    {!/manager/i.test(team) && "The"} {team}
                  </p>
                </div>
              )
          )}
        </div>

        <div className="mb-10 hidden flex-col items-center md:flex lg:flex">
          <div className="md:grid-flow-cols-1 grid gap-0 lg:grid-cols-2">
            {websters.map(({ id, team, members }, mIndex) => (
              <div key={id} className="px-4">
                {mIndex >= 2 && (
                  <div className="flex flex-col">
                    <div className="mt-4 grid grid-cols-3 justify-items-center gap-10 ">
                      {members.map((member) => (
                        <div key={member.id} className="px-0">
                          <div className="flex flex-col items-center justify-center">
                            <GatsbyImage
                              className="h-32 w-32 justify-center rounded-full"
                              image={getImage(member.avatar.image)}
                              alt={member.avatar.alt}
                            />

                            <p className="mt-3 font-montserrat font-bold uppercase md:text-xs lg:text-sm">
                              {member.name.last}
                            </p>
                            <p className="font-montserrat md:text-xs lg:text-sm">
                              {member.name.first}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <p className="mb-8 mt-3 text-center font-montserrat font-medium italic md:text-xs lg:text-sm">
                      {!/manager/i.test(team) && "The"} {team}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 justify-items-center md:hidden lg:hidden">
          {websters.map(({ id, team, members }, mIndex) => (
            <Fragment key={id}>
              <div className="flex flex-col items-center justify-center">
                {mIndex === 0 && (
                  <div className="mt-4 grid grid-cols-1 justify-items-center">
                    {members.map((member) => (
                      <div
                        key={member}
                        className="flex flex-col items-center justify-center"
                      >
                        <GatsbyImage
                          className="h-24 w-24 justify-center rounded-full"
                          image={getImage(member.avatar.image)}
                          alt={member.avatar.alt}
                        />

                        <p className="mt-3 font-montserrat text-xs font-bold uppercase">
                          {member.name.last}
                        </p>
                        <p className="font-montserrat text-xs">
                          {member.name.first}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {mIndex === 1 && (
                  <>
                    <div className="mt-4 grid grid-cols-1 justify-items-center">
                      <div className="flex flex-col items-center justify-center">
                        <GatsbyImage
                          className="h-24 w-24 justify-center rounded-full"
                          image={getImage(members[0].avatar.image)}
                          alt={members[0].avatar.alt}
                        />
                        <p className="mt-3 font-montserrat text-xs font-bold uppercase">
                          {members[0].name.last}
                        </p>
                        <p className="font-montserrat text-xs">
                          {members[0].name.first}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 justify-items-center gap-8">
                      {[1, 2].map((index) => (
                        <div
                          key={members[index].id}
                          className="flex flex-col items-center justify-center"
                        >
                          <GatsbyImage
                            className="h-24 w-24 justify-center rounded-full"
                            image={getImage(members[index].avatar.image)}
                            alt={members[index].avatar.alt}
                          />
                          <p className="mt-3 font-montserrat text-xs font-bold uppercase">
                            {members[index].name.last}
                          </p>
                          <p className="font-montserrat text-xs">
                            {members[index].name.first}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 grid grid-cols-1 justify-items-center">
                      <div className="flex flex-col items-center justify-center">
                        <GatsbyImage
                          className="h-24 w-24 justify-center rounded-full"
                          image={getImage(members[3].avatar.image)}
                          alt={members[3].avatar.alt}
                        />
                        <p className="mt-3 font-montserrat text-xs font-bold uppercase">
                          {members[3].name.last}
                        </p>
                        <p className="font-montserrat text-xs">
                          {members[3].name.first}
                        </p>
                      </div>
                    </div>
                  </>
                )}

                {mIndex >= 2 && (
                  <div className="mt-4 grid grid-cols-1 justify-items-center">
                    <div className="mt-4 grid grid-cols-1 justify-items-center">
                      <div className="flex flex-col items-center justify-center">
                        <GatsbyImage
                          className="h-24 w-24 justify-center rounded-full"
                          image={getImage(members[0].avatar.image)}
                          alt={members[0].avatar.alt}
                        />
                        <p className="mt-3 font-montserrat text-xs font-bold uppercase">
                          {members[0].name.last}
                        </p>
                        <p className="font-montserrat text-xs">
                          {members[0].name.first}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 justify-items-center gap-8">
                      {[1, 2].map((index) => (
                        <div
                          key={members[index].id}
                          className="flex flex-col items-center justify-center"
                        >
                          <GatsbyImage
                            className="h-24 w-24 justify-center rounded-full"
                            image={getImage(members[index].avatar.image)}
                            alt={members[index].avatar.alt}
                          />
                          <p className="mt-3 font-montserrat text-xs font-bold uppercase">
                            {members[index].name.last}
                          </p>
                          <p className="font-montserrat text-xs">
                            {members[index].name.first}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <p className="mb-8 mt-3 text-center font-montserrat text-xs font-medium italic">
                {!/manager/i.test(team) && "The"} {team}
              </p>
            </Fragment>
          ))}
        </div>
      </section>
    </main>
  )
}

AboutPage.propTypes = {
  data: shape({
    execs: arrayOf(object).isRequired,
    committees: arrayOf(object).isRequired,
    websters: arrayOf(object).isRequired,
  }).isRequired,
}

export const query = graphql`
  query AboutPage {
    execs: allExecs {
      id
      member {
        ...MemberData
      }
      role
    }

    committees: allCommittees {
      id
      committee
      members {
        ...MemberData
      }
    }

    websters: allWebsters {
      id
      team
      members {
        ...MemberData
      }
    }
  }

  fragment MemberData on Member {
    id
    name {
      first
      last
    }
    avatar {
      image {
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
      alt
    }
  }
`

export default AboutPage

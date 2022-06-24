import {graphql} from "gatsby"
import {GatsbyImage, getImage, StaticImage} from "gatsby-plugin-image"

function AboutPage({data}) {
  return (
    <main className="flex justify-center container max-w-6xl">
      <section className="flex justify-center flex-col">
      <div className="flex mt-4 flex-col shrink items-center justify-center ">
        <StaticImage
            className="shrink w-40 h-24 md:w-60 md:h-32 lg:w-80 lg:h-48"
            src="../images/about/joe_bot.png"
            alt="joe-bot"
            />
        <div className="flex w-11/12">
        <h3 className="font-montserrat text-center md:leading-relaxed lg:leading-loose text-sm font-medium lg:text-base"> <span className="font-bold">Institute of Computer Engineers of the Philippines – University of Science and Technology of Southern Philippines (ICpEP SE - USTP)</span> is the unified
          organization that channels productive, competitive, and innovative computer
          engineers in sustaining knowledge in mathematics, sciences and engineering
          skills. The aim is to provide
          Computer Engineering students with a strong foundation to enhance their knowledge, skills, innovativeness that will assist them in their personal development, to promote and safeguard the welfare and interest according to
          their privilege.
        </h3>
        </div>
      </div>
        <div className="flex flex-col shrink items-center justify-center">
          <h5 className="mt-8 font-PS2P text-xs md:text-base lg:text-xl">THE EXECUTIVES</h5>
          <p className="font-montserrat text-xs md:text-base lg:text-xl">ICpEP.SE 2021-2022</p>
        </div>
        <div className="grid mt-4 justify-items-center gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          {data.exec.edges.map(({node}) =>(
            <div className="flex flex-col items-center justify-center">
            <GatsbyImage key={node.id} className="w-32 h-32 md:w-40 md:h-40 lg:w-40 lg:h-40 justify-center rounded-full" image={getImage(node.image.childImageSharp)} alt={node.image.base}/>
            <p className="mt-3 font-bold uppercase font-montserrat text-xs md:text-sm lg:text-base">{node.lastname}</p>
            <p className="font-montserrat text-xs md:text-sm lg:text-base">{node.firstname}</p>
            <p className="font-montserrat font-medium italic text-xs md:text-sm lg:text-base">{node.pos}</p>
            </div>
            ))
          }
        </div>
        <div className="flex flex-col shrink items-center justify-center">
          <h5 className="mt-8 mb-5 font-PS2P text-xs md:text-base lg:text-xl">THE COMMITTEES</h5>
        </div>
        <div className="md:grid lg:grid mt-4 justify-items-center gap-4 hidden md:grid-cols-1 lg:grid-cols-2">
          {data.coms.edges.map(({node}, index) => (
            <div key={node.id} className="flex flex-col shrink items-center justify-center">
              {index < 4 && <div className="grid gap-4 grid-cols-3 justify-self-center">
                {node.members.map((members) => (
                  <div key={members.image.id} className="flex flex-col items-center justify-center">
                      <GatsbyImage className="w-32 h-32 justify-center rounded-full" image={getImage(members.image.childImageSharp)} alt={members.image.base}/>
                      <p className="mt-3 font-bold uppercase font-montserrat md:text-xs lg:text-sm">{members.lastname}</p>
                      <p className="font-montserrat md:text-sm lg:text-base">{members.firstname}</p>
                  </div>
                ))}
              </div>}
              {index === 4 && <div className="grid gap-4 grid-cols-2 justify-self-center">
                {node.members.map((members) => (
                  <div key={members.image.id} className="flex flex-col items-center justify-center">
                      <GatsbyImage className="w-32 h-32 justify-center rounded-full" image={getImage(members.image.childImageSharp)} alt={members.image.base}/>
                      <p className="mt-3 font-bold uppercase font-montserrat md:text-xs lg:text-sm">{members.lastname}</p>
                      <p className="font-montserrat md:text-sm lg:text-base">{members.firstname}</p>
                  </div>
                ))}
              </div>}
              {index === 5 && <div className="grid gap-4 grid-cols-1 justify-self-center">
                {node.members.map((members) => (
                  <div key={members.image.id} className="flex flex-col items-center justify-center">
                      <GatsbyImage className="w-32 h-32 justify-center rounded-full" image={getImage(members.image.childImageSharp)} alt={members.image.base}/>
                      <p className="mt-3 font-bold uppercase font-montserrat md:text-xs lg:text-sm">{members.lastname}</p>
                      <p className="font-montserrat md:text-sm lg:text-base">{members.firstname}</p>
                  </div>
                ))}
              </div>}
              <p className="mt-3 mb-4 font-montserrat font-medium italic md:text-xs lg:text-sm">{node.pos}</p>
            </div>
            ))
          }
        </div>
        <div className="grid md:hidden lg:hidden mt-4 justify-items-center grid-cols-1">
          {data.coms.edges.map(({node}, mindex) => (
            <div key={node.id} className="flex flex-col shrink items-center justify-center">
                {mindex < 5 && <div className="grid gap-4 grid-cols-2">
                {node.members.map((members, index) => (
                  <div>
                  {index < 2 && <div key={members.image.id} className="flex flex-col items-center justify-center">
                      <GatsbyImage key={index} className="w-24 h-24 justify-center rounded-full" image={getImage(members.image.childImageSharp)} alt={members.image.base}/>
                      <p className="mt-3 font-bold uppercase font-montserrat text-xs">{members.lastname}</p>
                      <p className="font-montserrat text-xs">{members.firstname}</p>
                  </div>}
                  </div>
                ))}
                </div>}
                {mindex < 4 && <div key={node.members[2].image.id} className="flex flex-col items-center justify-center">
                      <GatsbyImage className="w-24 h-24 justify-center rounded-full" image={getImage(node.members[2].image.childImageSharp)} alt={node.members[2].image.base}/>
                      <p className="mt-3 font-bold uppercase font-montserrat text-xs">{node.members[2].lastname}</p>
                      <p className="font-montserrat text-xs">{node.members[2].firstname}</p>
                  </div>}
                {mindex === 5 && <div className="grid grid-cols-1">
                {node.members.map((members) => (
                  <div>
                  {<div key={members.image.id} className="flex flex-col items-center justify-center">
                      <GatsbyImage className="w-24 h-24 justify-center rounded-full" image={getImage(members.image.childImageSharp)} alt={members.image.base}/>
                      <p className="mt-3 font-bold uppercase font-montserrat text-xs">{members.lastname}</p>
                      <p className="font-montserrat text-xs">{members.firstname}</p>
                  </div>}
                  </div>
                ))}
                </div>}
              <p className="mt-3 mb-8 font-montserrat font-medium italic text-xs">{node.pos}</p>
            </div>
            ))
          }
        </div> 

        <div className="flex flex-col shrink items-center justify-center">
          <h5 className="mt-8 font-PS2P text-xs md:text-base lg:text-xl">ICpEP.SE WEBSITE TEAM</h5>
        </div>

        <div className="md:grid lg:grid hidden mt-4 justify-items-center grid-cols-1">
          {data.devs.edges.map(({node}, mindex) => (
            <div>
            { mindex <= 1 && <div className="flex flex-col items-center justify-center">
              { mindex === 0 && <div key={node.id} className="grid mt-4 justify-items-center grid-cols-1">
                {node.members.map((members, index) => (
                  <div>
                  {<div key={members.image.id} className="flex flex-col items-center justify-center">
                      <GatsbyImage key={index} className="w-32 h-32 justify-center rounded-full" image={getImage(members.image.childImageSharp)} alt={members.image.base}/>
                      <p className="mt-3 font-bold uppercase font-montserrat md:text-xs lg:text-sm">{members.lastname}</p>
                      <p className="font-montserrat md:text-xs lg:text-sm">{members.firstname}</p>
                  </div>}
                  </div>
                ))}   
                </div>}
                { (mindex === 1) && <div key={node.id} className="grid mt-4 justify-items-center md:grid-cols-2 gap-10 lg:grid-cols-4">
                {node.members.map((members, index) => (
                  <div>
                  {<div key={members.image.id} className="flex flex-col items-center justify-center">
                      <GatsbyImage key={index} className="w-32 h-32 justify-center rounded-full" image={getImage(members.image.childImageSharp)} alt={members.image.base}/>
                      <p className="mt-3 font-bold uppercase font-montserrat md:text-xs lg:text-sm">{members.lastname}</p>
                      <p className="font-montserrat md:text-xs lg:text-sm">{members.firstname}</p>
                  </div>}
                  </div>
                ))}   
                </div>} 
              <p className="mt-3 mb-8 font-montserrat font-medium italic md:text-xs lg:text-sm">{node.pos}</p>
            </div>}
            </div>
            ))}
        </div> 
        <div className="md:flex lg:flex hidden flex-col items-center mb-10">
        <div className="grid gap-0 lg:grid-cols-2 md:grid-flow-cols-1">
          {data.devs.edges.map(({node}, mindex) => (
            <div className="px-4">
            { mindex >= 2 && <div className="flex flex-col">
              {<div key={node.id} className="grid mt-4 justify-items-center gap-10 grid-cols-3 ">
                {node.members.map((members, index) => (
                  <div className="px-0">
                  {<div key={members.image.id} className="flex flex-col items-center justify-center">
                      <GatsbyImage key={index} className="w-32 h-32 justify-center rounded-full" image={getImage(members.image.childImageSharp)} alt={members.image.base}/>
                      <p className="mt-3 font-bold uppercase font-montserrat md:text-xs lg:text-sm">{members.lastname}</p>
                      <p className="font-montserrat md:text-xs lg:text-sm">{members.firstname}</p>
                  </div>}
                  </div>
                ))}   
                </div>}  
              <p className="mt-3 mb-8 text-center font-medium font-montserrat italic md:text-xs lg:text-sm">{node.pos}</p>
            </div>}
            </div>
            ))}
        </div>
        </div>
        
        <div className="grid md:hidden lg:hidden mt-4 justify-items-center grid-cols-1">
          {data.devs.edges.map(({node}, mindex) => (
            <div>
            {<div className="flex flex-col items-center justify-center">
              {mindex === 0 && <div key={node.id} className="grid mt-4 justify-items-center grid-cols-1">
                {node.members.map((members, index) => (
                  <div>
                  {<div key={members.image.id} className="flex flex-col items-center justify-center">
                      <GatsbyImage key={index} className="w-24 h-24 justify-center rounded-full" image={getImage(members.image.childImageSharp)} alt={members.image.base}/>
                      <p className="mt-3 font-bold uppercase font-montserrat text-xs">{members.lastname}</p>
                      <p className="font-montserrat text-xs">{members.firstname}</p>
                  </div>}
                  </div>
                ))}   
                </div>}
                {mindex === 1 && <div>
                {<div key={node.id} className="grid mt-4 justify-items-center grid-cols-1">
                
                <div key={node.members[0].image.id} className="flex flex-col items-center justify-center">
                      <GatsbyImage className="w-24 h-24 justify-center rounded-full" image={getImage(node.members[0].image.childImageSharp)} alt={node.members[0].image.base}/>
                      <p className="mt-3 font-bold uppercase font-montserrat text-xs">{node.members[0].lastname}</p>
                      <p className="font-montserrat text-xs">{node.members[0].firstname}</p>
                  </div>
                </div>}

                {<div key={node.id} className="grid mt-4 justify-items-center gap-8 grid-cols-2">
                
                {[1,2].map((index) => (
                  <div>
                  {<div key={node.members[index].image.id} className="flex flex-col items-center justify-center">
                      <GatsbyImage key={index} className="w-24 h-24 justify-center rounded-full" image={getImage(node.members[index].image.childImageSharp)} alt={node.members[index].image.base}/>
                      <p className="mt-3 font-bold uppercase font-montserrat text-xs">{node.members[index].lastname}</p>
                      <p className="font-montserrat text-xs">{node.members[index].firstname}</p>
                  </div>}
                  </div>
                ))}   
                </div>}
                
                {<div key={node.id} className="grid mt-4 justify-items-center grid-cols-1">
                
                <div key={node.members[3].image.id} className="flex flex-col items-center justify-center">
                      <GatsbyImage className="w-24 h-24 justify-center rounded-full" image={getImage(node.members[3].image.childImageSharp)} alt={node.members[0].image.base}/>
                      <p className="mt-3 font-bold uppercase font-montserrat text-xs">{node.members[3].lastname}</p>
                      <p className="font-montserrat text-xs">{node.members[3].firstname}</p>
                  </div>
                </div>}
                </div>}
                {mindex >= 2 && <div key={node.id} className="grid mt-4 justify-items-center grid-cols-1">
                {<div key={node.id} className="grid mt-4 justify-items-center grid-cols-1">
                
                <div key={node.members[0].image.id} className="flex flex-col items-center justify-center">
                      <GatsbyImage className="w-24 h-24 justify-center rounded-full" image={getImage(node.members[0].image.childImageSharp)} alt={node.members[0].image.base}/>
                      <p className="mt-3 font-bold uppercase font-montserrat text-xs">{node.members[0].lastname}</p>
                      <p className="font-montserrat text-xs">{node.members[0].firstname}</p>
                  </div>
                </div>}

                {<div key={node.id} className="grid mt-4 justify-items-center gap-8 grid-cols-2">
                
                {[1,2].map((index) => (
                  <div>
                  {<div key={node.members[index].image.id} className="flex flex-col items-center justify-center">
                      <GatsbyImage key={index} className="w-24 h-24 justify-center rounded-full" image={getImage(node.members[index].image.childImageSharp)} alt={node.members[index].image.base}/>
                      <p className="mt-3 font-bold uppercase font-montserrat text-xs">{node.members[index].lastname}</p>
                      <p className="font-montserrat text-xs">{node.members[index].firstname}</p>
                  </div>}
                  </div>
                ))}   
                </div>}
                </div>}
            </div>}
            <p className="mt-3 mb-8 text-center font-medium font-montserrat italic text-xs">{node.pos}</p>
            </div>
            ))}
        </div>

      </section>
    </main>
  )
}

export default AboutPage

export const pageQuery = graphql `
  query{
    exec: allExecutivesJson(sort: {fields: order}) {
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
                blurredOptions: {width: 100}
                placeholder: BLURRED
                transformOptions: {cropFocus: CENTER}
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
                blurredOptions: {width: 100}
                placeholder: BLURRED
                transformOptions: {cropFocus: CENTER}
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
                blurredOptions: {width: 100}
                placeholder: BLURRED
                transformOptions: {cropFocus: CENTER}
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
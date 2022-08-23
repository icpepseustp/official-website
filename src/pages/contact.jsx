import React from "react"
import Seo from "../components/Seo"
import { graphql } from "gatsby"
import { FaDiscord, FaFacebookF, FaTwitter } from "react-icons/fa"
import { SiGmail, SiGooglemessages } from "react-icons/si"
import { AiFillInstagram } from "react-icons/ai"

const contactIcons = {
  Discord: FaDiscord,
  Facebook: FaFacebookF,
  Twitter: FaTwitter,
  Gmail: SiGmail,
  Messaging: SiGooglemessages,
  Instagram: AiFillInstagram,
}

function ContactPage({ data }) {
  console.log(data)

  const mails = data.mail.nodes
  const textcalls = data.textcall.nodes
  const socials = data.social.nodes

  return (
    <main className="container my-8 max-w-6xl">
      <Seo title="Contact" />

      <div className="px-12 py-12">
        <div className="font-PS2P">
          <h1 className="text-4xl font-medium">GET IN TOUCH WITH US!</h1>
          <p className="my-4">REACH OUT TO OUR DEPARTMENT</p>
        </div>
      </div>

      <div className="py-4">
        <div className="grid gap-x-4 gap-y-20 text-2xl sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {mails.map((mail) => (
            <div className="grid grid-cols-3 gap-x-4">
              <div className="ml-auto py-1.5">
                <a href={"mailto:" + mail.link_address} className="">
                  {contactIcons[mail.platform]()}
                </a>
              </div>
              <div className="col-span-2">
                <a href={"mailto:" + mail.link_address} className="">
                  {mail.name}
                </a>
              </div>
            </div>
          ))}
          {textcalls.map((textcall) => (
            <div className="grid grid-cols-3 gap-x-4">
              <div className="ml-auto py-1.5">
                <a href={"tel:" + textcall.link_address} className="">
                  {contactIcons[textcall.platform]()}
                </a>
              </div>
              <div className="col-span-2">
                <a href={"tel:" + textcall.link_address} className="">
                  {textcall.name}
                </a>
              </div>
            </div>
          ))}
          {socials.map((social) => (
            <div className="grid grid-cols-3 gap-x-4">
              <div className="ml-auto py-1.5">
                <a href={social.link_address} target="_blank" className="">
                  {contactIcons[social.platform]()}
                </a>
              </div>
              <div className="col-span-2">
                <a href={social.link_address} target="_blank" className="">
                  {social.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default ContactPage

export const query = graphql`
  query contactQuery {
    textcall: allContactJson(filter: { type: { eq: "textcall" } }) {
      nodes {
        platform
        link_address
        name
      }
    }

    mail: allContactJson(filter: { type: { eq: "email" } }) {
      nodes {
        platform
        link_address
        name
      }
    }

    social: allContactJson(filter: { type: { eq: "social" } }) {
      nodes {
        platform
        link_address
        name
      }
    }
  }
`

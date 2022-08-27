/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import { graphql } from "gatsby"
import { FaDiscord, FaFacebookF, FaTwitter } from "react-icons/fa"
import { SiGmail } from "react-icons/si"
import { ImLocation } from "react-icons/im"
import { AiFillInstagram } from "react-icons/ai"
import { MdMessage } from "react-icons/md"
import { StaticImage } from "gatsby-plugin-image"

import Seo from "../components/Seo"

function ContactPage({ data }) {
  const contact = data.contacts.nodes

  return (
    <main className="container my-8 max-w-4xl">
      <Seo title="Contact" />

      <div className="px-2 py-6 lg:px-12">
        <div className="z-40 text-center font-PS2P">
          <h1 className="shrink text-base font-medium md:text-xl  lg:text-4xl">
            GET IN TOUCH WITH US!
          </h1>
          <p className="my-4 shrink text-center text-xs md:text-sm  lg:text-base">
            REACH OUT TO OUR DEPARTMENT
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="z-40 flex min-w-max flex-col py-8 ">
            <h3 className=" bg-gray-900 text-center font-montserrat text-base font-bold text-amber-50 md:text-lg lg:text-xl ">
              Send us a message
            </h3>
            <div className="grid shrink grid-cols-1 gap-x-60 gap-y-8 px-12 py-6 lg:grid-cols-2 lg:px-12">
              <a
                href={`mailto:${contact[0].link_address}`}
                className="flex items-center gap-x-1.5 xl:gap-x-4"
              >
                <SiGmail className="h-[18px] w-[18px] lg:h-[28px] lg:w-[28px]" />
                <small className="text-[18px]">{contact[0].name}</small>
              </a>
              <a
                href={`tel:${contact[1].link_address}`}
                className="flex items-center gap-x-1.5 xl:gap-x-4"
              >
                <MdMessage className="h-[18px] w-[18px] lg:h-[28px] lg:w-[28px]" />
                <small className="text-[16px] lg:text-[18px]">
                  {contact[1].name}
                </small>
              </a>
            </div>
            <h3 className="lg:px-auto mt-6 bg-gray-900 text-center font-montserrat text-base font-bold text-amber-50 md:text-lg lg:bg-inherit  lg:text-xl lg:text-gray-900">
              Share your thoughts with us
            </h3>
            <div className="grid shrink grid-cols-1 gap-x-60 gap-y-10 px-12 py-6 lg:grid-cols-2">
              <a
                href={contact[2].link_address}
                className="flex items-center gap-x-1.5 xl:gap-x-4"
              >
                <FaFacebookF className="h-[18px] w-[18px] lg:h-[28px] lg:w-[28px]" />

                <small className="text-[18px]">{contact[2].name}</small>
              </a>
              <a
                href={contact[3].link_address}
                className="flex items-center gap-x-1.5 xl:gap-x-4"
              >
                <FaTwitter className="h-[18px] w-[18px] lg:h-[28px] lg:w-[28px]" />
                <small className="text-[18px]">{contact[3].name}</small>
              </a>
              <a
                href={contact[4].link_address}
                className="flex items-center gap-x-1.5 xl:gap-x-4"
              >
                <AiFillInstagram className="h-[18px] w-[18px] lg:h-[28px] lg:w-[28px]" />
                <small className="text-[18px]">{contact[4].name}</small>
              </a>
              <a
                href={contact[5].link_address}
                className="flex items-center gap-x-1.5 xl:gap-x-4"
              >
                <FaDiscord className="h-[18px] w-[18px] lg:h-[28px] lg:w-[28px]" />
                <small className="text-[18px]">{contact[5].name}</small>
              </a>
            </div>
          </div>
          <div className="absolute -z-10 -mt-24 opacity-25 lg:-mt-40">
            <StaticImage
              width={500}
              height={500}
              alt="icpep-no-name"
              src="../images/icpep-logo-noname.png"
              placeholder="tracedSVG"
            />
          </div>
        </div>
      </div>
      <div className="flex min-w-full flex-row justify-center pb-16">
        <div className="flex h-[75px] w-[300px] flex-col items-center border-t-2 border-black px-4 py-1 lg:h-[100px] lg:w-[350px]">
          <p className="font-montserrat text-base font-bold md:text-lg lg:text-xl">
            Find us
          </p>
          <div className="mt-2 flex flex-row gap-0">
            <ImLocation className="flex h-[40px] w-[45px] grow self-center" />
            <a
              href="https://www.google.com/search?q=C.M.+Recto+Avenue+Lapasan+9000+Cagayan+de+Oro%2C+Philippines&rlz=1C1ONGR_enSG1006SG1006&oq=C.M.+Recto+Avenue+Lapasan+9000+Cagayan+de+Oro%2C+Philippines&aqs=chrome..69i57j0i546l5.825j0j9&sourceid=chrome&ie=UTF-8#"
              className="text-center text-base lg:text-lg"
            >
              C.M. Recto Avenue Lapasan 9000 Cagayan de Oro, Philippines
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export const query = graphql`
  query contactQuery {
    contacts: allContactJson {
      nodes {
        platform
        link_address
        name
      }
    }
  }
`

export default ContactPage

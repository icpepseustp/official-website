import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { arrayOf, object, shape } from "prop-types"
import { AiFillInstagram } from "react-icons/ai"
import { FaDiscord, FaFacebookF, FaTwitter } from "react-icons/fa"
import { ImLocation } from "react-icons/im"
import { MdMessage } from "react-icons/md"
import { SiGmail } from "react-icons/si"

import Seo from "../components/Seo"

const iconMap = {
  Facebook: FaFacebookF,
  Discord: FaDiscord,
  Twitter: FaTwitter,
  Instagram: AiFillInstagram,
  Gmail: SiGmail,
  SMS: MdMessage,
}

function ContactPage({ data }) {
  const {
    settings: { contacts, platforms },
  } = data

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
              {contacts.map(({ platform, value, label }) => {
                const PlatformIcon = iconMap[platform]
                return (
                  <a
                    key={value}
                    href={
                      /^\+\d{2}/i.test(value)
                        ? `tel:${value}`
                        : `mailto:${value}`
                    }
                    className="flex items-center gap-x-1.5 xl:gap-x-4"
                  >
                    <PlatformIcon className="h-[18px] w-[18px] lg:h-[28px] lg:w-[28px]" />
                    <small className="text-[18px]">{label}</small>
                  </a>
                )
              })}
            </div>

            <h3 className="lg:px-auto mt-6 bg-gray-900 text-center font-montserrat text-base font-bold text-amber-50 md:text-lg lg:bg-inherit  lg:text-xl lg:text-gray-900">
              Share your thoughts with us
            </h3>

            <div className="grid shrink grid-cols-1 gap-x-60 gap-y-10 px-12 py-6 lg:grid-cols-2">
              {platforms.map(({ name, url, label }) => {
                const SocialIcon = iconMap[name]
                return (
                  <a
                    key={name}
                    href={url}
                    className="flex items-center gap-x-1.5 xl:gap-x-4"
                  >
                    <SocialIcon className="h-[18px] w-[18px] lg:h-[28px] lg:w-[28px]" />

                    <small className="text-[18px]">{label}</small>
                  </a>
                )
              })}
            </div>
          </div>

          <div className="absolute -z-10 -mt-24 opacity-25 lg:-mt-40">
            <StaticImage
              width={500}
              height={500}
              alt="icpep-no-name"
              src="../../static/media/icpep-logo-noname.png"
              placeholder="blurred"
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

ContactPage.propTypes = {
  data: shape({
    settings: shape({
      contacts: arrayOf(object).isRequired,
      platforms: arrayOf(object).isRequired,
    }).isRequired,
  }).isRequired,
}

export const query = graphql`
  query ContactPage {
    settings: allSettings {
      contacts {
        type
        platform
        value
        label
      }
      platforms {
        name
        url
        label
      }
    }
  }
`

export default ContactPage

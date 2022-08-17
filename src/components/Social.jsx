/* eslint-disable react/prop-types */
import { graphql, StaticQuery } from "gatsby"
import { FaDiscord, FaFacebookF, FaTwitter } from "react-icons/fa"

const icons = {
  Facebook: FaFacebookF,
  Discord: FaDiscord,
  Twitter: FaTwitter,
}

function Social() {
  return (
    <StaticQuery
      query={graphql`
        query {
          allPlatformsJson {
            nodes {
              text
              url
            }
          }
        }
      `}
      render={(data) => (
        <section className="border-t-2 border-black px-4 py-10 font-montserrat text-sm md:py-16 md:px-8 md:text-base lg:text-lg xl:px-12 xl:py-24 xl:text-2xl">
          <header className="mb-4 xl:mb-8">
            <h3>Get Connected!</h3>
            <h4>Follow us on our social media platforms.</h4>
          </header>

          <div className="flex gap-x-6 xl:gap-x-12">
            {data.allPlatformsJson.nodes.map(({ url, text }) => (
              <a
                key={text}
                href={url}
                className="flex items-center gap-x-1.5 xl:gap-x-4"
              >
                {icons[text]()}

                <small className="font-bold">{text}</small>
              </a>
            ))}
          </div>
        </section>
      )}
    />
  )
}

export default Social

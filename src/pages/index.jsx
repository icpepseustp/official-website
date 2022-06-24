import classNames from "classnames"
import { StaticImage } from "gatsby-plugin-image"
import { useState } from "react"
import { BsArrowRight } from "react-icons/bs"
import {
  FaDiscord,
  FaFacebookF,
  FaRegNewspaper,
  FaRegStar,
  FaTwitter,
} from "react-icons/fa"
import Spinner from "../components/Spinner"
import hero from "../images/home/bg.gif"

const platforms = [
  {
    icon: FaFacebookF,
    text: "Facebook",
    url: "https://www.facebook.com/icpep.se.ustp/",
  },
  {
    icon: FaDiscord,
    text: "Discord",
    url: "https://discord.gg/Dc9dJ7hfDD",
  },
  {
    icon: FaTwitter,
    text: "Twitter",
    url: "https://twitter.com/ustp_icpepse",
  },
]

const posts = [
  {
    title: "Good news! CpE certification finally underway for new grads",
    lead: "Computer Engineering professionals and graduates alike can now apply for certification.",
    url: "#",
    thumbnail: false,
  },
  {
    title: "Lore unfolds: CpE Days '22 finally underway",
    lead: "After an overwhelming academic year, we deserve some unwinding. It is our time to gather as a pact and venture the night of Silverwood.",
    url: "#",
    // todo: thumbnail is not boolean
    thumbnail: true,
  },
]

function IndexPage() {
  const [heroLoaded, setHeroLoaded] = useState(false)

  return (
    <main className="container max-w-6xl">
      {!heroLoaded && (
        <div className="p-16 text-center md:p-32 lg:p-40 xl:p-64">
          <Spinner />
        </div>
      )}

      <img
        src={hero}
        alt="Enchante: The Untold Lore Unfolds"
        className={classNames("w-full", { hidden: !heroLoaded })}
        onLoad={() => setHeroLoaded(true)}
      />

      <section className="relative">
        <div className="absolute right-4 -bottom-12 flex h-16 w-16 items-center justify-center rounded-full bg-secondary p-12 xl:right-8 xl:-bottom-24 xl:h-44 xl:w-44">
          <p className="rotate-[20deg] text-center font-montserrat text-xs font-bold text-white xl:text-2xl">
            Welcome, <br /> ka-CpE!
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="mt-3 border-t-2 border-black xl:mt-4">
        <article className="flex flex-col md:flex-row-reverse md:justify-center">
          <div className="flex place-items-center bg-primary px-16 py-12 md:basis-1/2">
            <div>
              <span className="flex items-center gap-x-3">
                <FaRegStar className="md:h-6 md:w-6" />
                <h2 className="text-lg font-light lg:text-2xl">Who We Are</h2>
              </span>

              <p className="mt-8 mb-10 font-libre text-base font-bold leading-tight lg:text-2xl">
                The Institute of Computer Engineers of the Philippines Student
                Edition (ICpEP.SE) is the official student body of the
                Department of Computer Engineering in USTP-CDO.
              </p>

              <div
                to="#"
                title="Coming Soon!"
                className="float-right flex cursor-pointer items-center gap-x-3 font-montserrat font-semibold lg:text-lg xl:text-xl"
              >
                <small>Read More</small>
                <BsArrowRight />
              </div>
            </div>
          </div>

          <div className="flex flex-1 p-4">
            <StaticImage
              src="../images/home/cpe-exec-officers-2019.jpg"
              alt="Group photo of ICpEP.SE officers"
            />
          </div>
        </article>
      </section>

      {/* FEATURED */}
      <section className="border-t-2 border-black">
        <div className="flex flex-col bg-white px-10 py-8">
          <span className="flex items-center gap-x-3">
            <FaRegNewspaper className="md:h-6 md:w-6" />
            <h2 className="text-lg font-light lg:text-2xl">Featured</h2>
          </span>

          <div className="my-8 grid grid-cols-1 place-items-center gap-y-12 md:my-4 md:grid-cols-2">
            {posts.map(({ title, lead, thumbnail }) => (
              <article key={title} className="feature-article">
                {thumbnail && (
                  <StaticImage
                    src="../images/home/cpe-days-2022.jpg"
                    className="md:h-36 lg:h-52"
                    alt={title}
                  />
                )}

                <h4 className="my-4 font-libre text-base font-bold leading-tight">
                  {title}
                </h4>
                <p className="font-montserrat leading-tight">{lead}</p>

                <div
                  title="Coming Soon!"
                  className="float-right mt-6 flex cursor-pointer items-center gap-x-3 font-montserrat font-semibold lg:text-lg xl:text-xl"
                >
                  <small>Read More</small>
                  <BsArrowRight />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t-2 border-black px-4 py-10 font-montserrat text-sm md:px-8 md:text-base xl:px-12 xl:py-20 xl:text-2xl">
        <header className="mb-4 xl:mb-8">
          <h3>Get Connected!</h3>
          <h4>Follow us on our social media platforms.</h4>
        </header>

        <div className="flex gap-x-6 xl:gap-x-12">
          {platforms.map(({ icon: PlatformIcon, url, text }) => (
            <a
              key={text}
              href={url}
              className="flex items-center gap-x-1.5 xl:gap-x-4"
            >
              <PlatformIcon />

              <small className="font-bold">{text}</small>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}

export default IndexPage

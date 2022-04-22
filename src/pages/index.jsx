import { StaticImage } from "gatsby-plugin-image"
import { FaFacebookF, FaDiscord, FaTwitter } from "react-icons/fa"

const platforms = [
  {
    icon: FaFacebookF,
    text: "Facebook",
    url: "",
  },
  {
    icon: FaDiscord,
    text: "Discord",
    url: "",
  },
  {
    icon: FaTwitter,
    text: "Twitter",
    url: "",
  },
]

function IndexPage() {
  return (
    <main className="container max-w-6xl">
      <section className="relative">
        <StaticImage
          src="../images/home/code.jpg"
          className="h-[60vh] max-h-60 w-full md:max-h-80 xl:max-h-[25rem]"
        />

        <div className="absolute right-4 -bottom-12 flex h-16 w-16 items-center justify-center rounded-full bg-secondary p-12 xl:right-8 xl:-bottom-24 xl:h-44 xl:w-44">
          <p className="rotate-[20deg] text-center font-montserrat text-xs font-bold text-white xl:text-2xl">
            Welcome, <br /> ka-CpE!
          </p>
        </div>
      </section>

      <section className="mt-3 border-t-2 border-black xl:mt-4">
        WHO WE ARE
      </section>

      <section className="border-t-2 border-black">FEATURED</section>

      <section className="border-t-2 border-black px-4 py-10 font-montserrat text-sm md:px-8 md:text-base xl:px-12 xl:py-20 xl:text-2xl">
        <header className="mb-4 xl:mb-8">
          <h3>Get Connected!</h3>
          <h4>Follow us on our social media platforms.</h4>
        </header>

        <div className="flex gap-x-6 xl:gap-x-12">
          {platforms.map(({ icon: PlatformIcon, text }) => (
            <div className="flex items-center gap-x-1.5 xl:gap-x-4">
              <PlatformIcon />

              <small className="font-bold">{text}</small>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default IndexPage

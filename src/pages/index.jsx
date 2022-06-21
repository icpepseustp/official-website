import { StaticImage } from "gatsby-plugin-image"
import PageContainer from "../components/PageContainer"
import { FaFacebookF, FaDiscord, FaTwitter, FaRegStar } from "react-icons/fa"
import { BsArrowRight } from "react-icons/bs"
import { Link } from "gatsby"

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
    <PageContainer as="main">
      <section className="relative">
        <StaticImage
          src="../images/home/code.jpg"
          className="h-[60vh] max-h-60 w-full md:max-h-80 xl:max-h-[25rem]"
          alt="Desktop source code background"
        />

        <div className="absolute right-4 -bottom-12 flex h-16 w-16 items-center justify-center rounded-full bg-secondary p-12 xl:right-8 xl:-bottom-24 xl:h-44 xl:w-44">
          <p className="rotate-[20deg] text-center font-montserrat text-xs font-bold text-white xl:text-2xl">
            Welcome, <br /> ka-CpE!
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="mt-3 border-t-2 border-black xl:mt-4">
        <div className="flex flex-col md:flex-row-reverse md:justify-center">
          <div className="flex place-items-center bg-primary px-16 py-12 md:w-1/2">
            <div className="flex flex-col">
              <span className="flex items-center gap-x-3">
                <FaRegStar className="md:h-6 md:w-6" />
                <h2 className="text-lg font-light lg:text-2xl">Who We Are</h2>
              </span>
              <p className="mt-8 mb-10 font-libre text-base font-bold leading-tight lg:text-2xl">
                The Institute of Computer Engineers of the Philippines Student
                Edition (ICpEP.SE) is the official student body of the
                Department of Computer Engineering in USTP-CDO.
              </p>
              <Link
                to="#"
                className="flex items-center gap-x-3 self-end font-montserrat font-semibold lg:text-lg"
              >
                <small>Read More</small>
                <BsArrowRight />
              </Link>
            </div>
          </div>
          <div className="p-4 md:w-1/2">
            <StaticImage
              src="../images/home/placeholder-image.png"
              // className="md:w-1/2"
              alt="Group photo of ICpEP.SE officers"
            />
          </div>
        </div>
      </section>

      <section className="border-t-2 border-black">FEATURED</section>

      <section className="border-t-2 border-black px-4 py-10 font-montserrat text-sm md:px-8 md:text-base xl:px-12 xl:py-20 xl:text-2xl">
        <header className="mb-4 xl:mb-8">
          <h3>Get Connected!</h3>
          <h4>Follow us on our social media platforms.</h4>
        </header>

        <div className="flex gap-x-6 xl:gap-x-12">
          {platforms.map(({ icon: PlatformIcon, text }) => (
            <div key={text} className="flex items-center gap-x-1.5 xl:gap-x-4">
              <PlatformIcon />

              <small className="font-bold">{text}</small>
            </div>
          ))}
        </div>
      </section>
    </PageContainer>
  )
}

export default IndexPage

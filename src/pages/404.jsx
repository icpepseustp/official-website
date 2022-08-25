import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { BsArrowLeft } from "react-icons/bs"
import Seo from "../components/Seo"

function NotFoundPage() {
  return (
    <main className="container flex h-[650px] max-w-6xl flex-col items-center lg:h-[700px]">
      <Seo title="Page not found" />
      <section className="flex shrink flex-col items-center px-4 py-12 lg:items-start lg:pl-12">
        <h1 className="mt-12  shrink cursor-default font-PS2P text-4xl font-normal drop-shadow-2xl md:text-6xl lg:text-7xl">
          WHOOPSY!
        </h1>
        <div className="relative -mt-1 flex max-w-full shrink flex-col items-center justify-items-center lg:-mt-20 lg:flex-row">
          <div>
            <div className="flex w-[500px] flex-col items-center px-12 lg:items-start">
              <p className="font-monsterrat mt-32 mb-2 cursor-default text-[16px] font-semibold md:text-[20px] lg:mt-24 lg:text-[24px]">
                Joe couldn&apos;t find that page.
              </p>
              <h2 className="font-monsterrat cursor-default text-2xl font-extrabold md:text-3xl lg:text-5xl">
                Page Not Found
              </h2>

              <Link
                to="/"
                className="mt-28 flex flex-row items-center gap-x-2 lg:mt-24"
              >
                <BsArrowLeft className="h-6 w-6 cursor-pointer" />
                <p className="font-monsterrat cursor-pointer text-sm font-bold hover:text-slate-600 hover:underline active:text-slate-400 active:no-underline md:text-base lg:text-lg">
                  Go Back to Home
                </p>
              </Link>
            </div>
          </div>
          <StaticImage
            className="absolute z-[-2] -mr-28 h-[300px] w-[350px] opacity-50 md:absolute md:-mr-24 md:h-[320px] md:w-[370px] lg:relative lg:mr-0 lg:h-[400px] lg:w-[450px] lg:opacity-100"
            src="../images/404/joebot-404.png"
            alt="joe-bot_ErroR"
          />
        </div>
      </section>
    </main>
  )
}

export default NotFoundPage

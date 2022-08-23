import { Link } from "gatsby"
import { Container } from "postcss"
import { StaticImage } from "gatsby-plugin-image"
import { BsArrowRight } from "react-icons/bs"

const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

function NotFoundPage() {
  return (
    <main className="container flex max-w-5xl">
      <title>Not Found</title>
      <section className="flex shrink flex-col justify-center">
        <div className="items-right justify-left mt-4 flex shrink flex-col ">
          <StaticImage
            className="bottom-15 full h-140 w-160 absolute right-2 mt-16"
            src="../src/images/404/joebot-404.png"
            alt="joe-bot_ErroR"
          />
          <div className="container relative flex max-w-2xl justify-center">
            <h1 className="mt-32 mb-8 cursor-default font-PS2P text-xl font-normal drop-shadow-2xl md:text-6xl lg:text-8xl">
              WHOOPSY!
            </h1>
          </div>
          <div className="justify-left container relative flex max-w-xl">
            <p className="font-monsterrat mt-10 mb-2 w-11/12 cursor-default text-4xl font-normal">
              Joe couldn't find that page.
            </p>
          </div>
          <div className="justify-left container relative flex max-w-xl">
            <h2 className="font-monsterrat mb-20 cursor-default text-5xl font-extrabold">
              Page Not Found
            </h2>
          </div>
          <div className="justify-left container relative flex max-w-xl">
            <p className="mt-15 font-monsterrat mb-40 cursor-pointer text-3xl font-medium hover:text-slate-700">
              <Link to="/">
                Go Back to Home <BsArrowRight />
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default NotFoundPage

/* second div 

text-slate-400

md:h-32 md:w-60 lg:h-48 lg:w-80

Sorry{" "}
<span role="img" aria-label="Pensive emoji">
😔
</span>{" "}
we couldn’t find what you were looking for.
<br />
{process.env.NODE_ENV === "development" ? (
<>
  <br />
  Try creating a page in <code style={codeStyles}>src/pages/index.jsx</code>.
  <br />
</>
) : null}
<br />
/////////
para sa image ni maam
*/

import { Link } from "gatsby"  
import { Container } from "postcss"
import {StaticImage} from "gatsby-plugin-image"

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
      <section className="flex flex-col shrink justify-center">
        <div className="mt-4 flex shrink flex-col items-right justify-left ">
        <StaticImage
          className="absolute mt-16 right-2 bottom-15 full h-140 w-160"
          src="D:\ICpEP.SE COMWEB\icpepseustp-official-website\src\images\404\joebot_404.png"
          alt="joe-bot_ErroR"
        />
      <div className="relative container flex max-w-2xl justify-center">
      <h1 className="mt-32 mb-8 drop-shadow-2xl font-PS2P text-xl md:text-6xl lg:text-8xl font-normal cursor-default"> 
        WHOOPSY!
      </h1>
      </div> 
      <div className="relative container flex max-w-xl justify-left">
      <p className="mt-10 mb-2 font-monsterrat font-normal w-11/12 cursor-default text-4xl">
        Joe couldn't find that page.
      </p>
      </div>
      <div className="relative container flex max-w-xl justify-left">
        <h2 className="mb-20 font-monsterrat font-extrabold cursor-default text-5xl">
          Page Not Found
        </h2>
      </div>
      <div className="relative container flex max-w-xl justify-left">
        <p className="mt-15 mb-40 font-monsterrat font-medium cursor-pointer text-3xl hover:text-slate-700">
        <Link to="/">Go Back to Home</Link>
       <Link to="/">
        <StaticImage 
        className="absolute left-30 bottom full cursor-pointer"
        src="D:\ICpEP.SE COMWEB\icpepseustp-official-website\src\images\404\Right Arrow.png"
        alt="right_arrow"
        />
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
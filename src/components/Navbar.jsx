import { Link } from "gatsby"
import PageContainer from "./PageContainer"

const routes = [
  { text: "Home", path: "/" },
  { text: "Blog", path: "/#blog" },
  { text: "About Us", path: "/#about" },
  { text: "Contact", path: "/#contact" },
]

function Navbar() {
  return (
    <PageContainer as="header">
      <nav className="border-2 border-black">
        <ul className="flex divide-x-2 divide-black">
          {routes.map(({ text, path }) => (
            <li key={text} className="grow text-center">
              <Link
                to={path}
                className="block w-full py-2 font-raleway text-sm font-bold uppercase lg:text-lg"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="overflow-hidden border-2 border-black py-2">
        <h5 className="animate-marquee space-x-4 whitespace-nowrap font-PS2P text-sm lg:text-xl">
          {Array(25)
            .fill("ICpEP.SE")
            .map((str) => (
              <span className="after:content-['*/']">{str} </span>
            ))}
        </h5>
      </div>
    </PageContainer>
  )
}

export default Navbar

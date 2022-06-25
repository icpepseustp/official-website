import { Link } from "gatsby"

const routes = [
  { text: "Home", path: "/" },
  // { text: "Blog", path: "/#blog" },
  { text: "About", path: "/about" },
  // { text: "Contact", path: "/#contact" },
]

function Navbar() {
  return (
    <main className="container max-w-6xl">
      <nav className="border-2 border-black">
        <ul className="flex divide-x-2 divide-black">
          {routes.map(({ text, path }) => (
            <li key={text} className="flex-1 text-center">
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

      <div className="overflow-hidden border-2 border-t-0 border-black py-2">
        <h5 className="animate-marquee space-x-4 whitespace-nowrap font-PS2P text-sm lg:text-xl">
          {Array(25)
            .fill("ICpEP.SE")
            .map((str, i) => (
              <span key={i} className="after:content-['*/']">
                {str}{" "}
              </span>
            ))}
        </h5>
      </div>
    </main>
  )
}

export default Navbar

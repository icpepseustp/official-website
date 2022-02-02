import { Link } from "gatsby"

const routes = [
  { text: "Home", path: "/" },
  { text: "Blog", path: "/#blog" },
  { text: "About Us", path: "/#about" },
]

function Navbar() {
  return (
    <header>
      <div className="mx-auto flex max-w-6xl py-4">
        <div className="grow">
          <Link to="/">LOGO_HERE</Link>
        </div>
        <nav>
          <ul className="flex gap-x-4">
            {routes.map(({ text, path }) => (
              <li key={text}>
                <Link to={path}>{text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar

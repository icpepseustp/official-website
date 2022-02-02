import "@fontsource/libre-baskerville"
import "@fontsource/montserrat"
import "@fontsource/press-start-2p"
import "@fontsource/raleway"
import "@fontsource/recursive"
import Footer from "./Footer"
import Navbar from "./Navbar"

function Shell({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Shell

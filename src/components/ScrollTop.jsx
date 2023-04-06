import { Transition } from "@headlessui/react"
import { number } from "prop-types"
import { useEffect, useState } from "react"
import { RxCaretUp } from "react-icons/rx"

function ScrollToTop({ showBelow }) {
  const [show, setShow] = useState(!showBelow)

  useEffect(() => {
    if (!showBelow) return undefined

    const handleScroll = () => {
      if (window.pageYOffset > showBelow) {
        setShow(true)
      } else setShow(false)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  })

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <Transition
      show={show}
      enter="transition-[bottom]"
      enterFrom="-bottom-20"
      enterTo="bottom-6"
      leave="transition-[bottom]"
      leaveFrom="bottom-6"
      leaveTo="-bottom-20"
      className="fixed right-8 z-10 md:right-12 xl:right-24"
    >
      <button
        type="button"
        className="rounded-full bg-transparent p-3 text-secondary transition-colors hover:bg-secondary/75 hover:text-white"
        title="Back to top"
        aria-label="to top"
        onClick={handleClick}
      >
        <RxCaretUp size={25} />
      </button>
    </Transition>
  )
}

ScrollToTop.propTypes = {
  showBelow: number,
}

export default ScrollToTop

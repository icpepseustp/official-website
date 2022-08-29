/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"

const useStyles = makeStyles((theme) => ({
  toTop: {
    zIndex: 2,
    position: "fixed",
    bottom: "2.5vh",
    backgroundColor: "#DCDCDC",
    color: "black",
    "&:hover, &.Mui-focusVisible": {
      transition: "0.3s",
      color: "#0f70d7",
      backgroundColor: "#DCDCDC",
    },
    [theme.breakpoints.up("xs")]: {
      right: "5%",
      backgroundColor: "rgb(220,220,220,0.7)",
    },
    [theme.breakpoints.up("lg")]: {
      right: "6.5%",
    },
  },
}))

function ScrollToTop({ showBelow }) {
  const classes = useStyles()

  const [show, setShow] = useState(!showBelow)

  useEffect(() => {
    if (!showBelow) return undefined

    const handleScroll = () => {
      if (window.pageYOffset > showBelow) {
        if (!show) setShow(true)
      } else if (show) setShow(false)
    }

    window.addEventListener(`scroll`, handleScroll)
    return () => window.removeEventListener(`scroll`, handleScroll)
  })

  const handleClick = () => window.scrollTo({ top: 0, behavior: `smooth` })

  if (!show) return null

  return (
    <IconButton
      onClick={handleClick}
      className={classes.toTop}
      aria-label="to top"
      title="Back to top"
    >
      <ExpandLessIcon />
    </IconButton>
  )
}

export default ScrollToTop

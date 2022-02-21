import classNames from "classnames"
import PropTypes from "prop-types"
import { createElement } from "react"

/**
 * Used to contain the entirety of a page's content.
 */
function PageContainer({ children, className, as: type = "div" }) {
  return createElement(
    type,
    { className: classNames("mx-auto max-w-6xl", className) },
    children
  )
}

PageContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  as: PropTypes.string,
}

export default PageContainer

import "./src/styles/global.css"
import Shell from "./src/components/Shell"

import "prismjs/themes/prism.css"

export function wrapPageElement({ element }) {
  return <Shell>{element}</Shell>
}

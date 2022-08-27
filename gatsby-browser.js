import "./src/styles/global.css"
import "prismjs/themes/prism.css"
import Shell from "./src/components/Shell"

export function wrapPageElement({ element }) {
  return <Shell>{element}</Shell>
}

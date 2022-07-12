import { Helmet } from "react-helmet"

function Seo({ lang = "en-US", title }) {
  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ICpEP.SE USTP-CDO`}
      defaultTitle={title}
    />
  )
}

export default Seo

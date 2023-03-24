// eslint-disable-next-line import/no-unresolved
import { useLocation } from "@reach/router"
import { graphql, useStaticQuery } from "gatsby"
import { arrayOf, object, string } from "prop-types"
import { Helmet } from "react-helmet"

function Seo({ lang = "en-US", title, ...rest }) {
  const {
    site: { siteMetadata },
    featuredImage,
  } = useStaticQuery(graphql`
    query Seo {
      site {
        siteMetadata {
          siteUrl
          title
          description
          keywords
        }
      }
      # TODO maybe a dedicated image for each pagetype
      # besides blog would be great here
      featuredImage: file(
        absolutePath: { glob: "**/static/media/icpepse-logo.png" }
      ) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 800)
        }
      }
    }
  `)

  const location = useLocation()

  const withDomain = (path) => `${siteMetadata.siteUrl}${path}`

  const metaTitle = siteMetadata.title
  const description = rest.description || siteMetadata.description
  const keywords = siteMetadata.keywords.concat(rest.keywords)
  const canonical = rest.path ? withDomain(rest.path) : undefined

  const {
    childImageSharp: { gatsbyImageData },
  } = rest.featuredImage || featuredImage

  const scripts = [
    { src: "https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js" },
  ]

  const links = [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/pace-js@1.2.4/pace-theme-default.min.css",
    },
  ]

  const meta = [
    {
      name: "title",
      content: metaTitle,
    },
    {
      name: "description",
      content: description,
    },
    {
      property: "og:title",
      content: title === "Home" ? metaTitle : `${title} | ${metaTitle}`,
    },
    {
      name: "og:url",
      content: withDomain(location.pathname),
    },
    {
      name: "og:locale",
      content: "en_US",
    },
    {
      property: "og:site_name",
      content: metaTitle,
    },
    {
      property: "og:description",
      content: description,
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      name: "twitter:title",
      content: title === "Home" ? metaTitle : `${title} | ${metaTitle}`,
    },
    {
      name: "twitter:description",
      content: description,
    },
    {
      name: "twitter:url",
      content: withDomain(location.pathname),
    },
    {
      name: "keywords",
      content: keywords.join(","),
    },
    {
      name: "robots",
      content: "max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    },
  ].concat(
    gatsbyImageData.images.fallback?.src
      ? [
          {
            property: "og:image",
            content: withDomain(gatsbyImageData.images.fallback.src),
          },
          {
            property: "og:image:width",
            content: gatsbyImageData.width.toString(),
          },
          {
            property: "og:image:height",
            content: gatsbyImageData.height.toString(),
          },
          {
            name: "twitter:image",
            content: withDomain(gatsbyImageData.images.fallback.src),
          },
          {
            name: "twitter:card",
            content: "summary_large_image",
          },
        ]
      : [
          {
            name: "twitter:card",
            content: "summary",
          },
        ]
  )

  if (canonical) {
    links.push({
      rel: "canonical",
      href: canonical,
    })
  }

  if (rest.scripts) scripts.concat(rest.scripts)
  if (rest.links) links.concat(rest.links)
  if (rest.meta) meta.concat(rest.meta)

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate="%s | ICpEP.SE USTP-CDO"
      defaultTitle={metaTitle}
      script={scripts}
      link={links}
      meta={meta}
    />
  )
}

Seo.propTypes = {
  lang: string,
  title: string.isRequired,
  description: string,
  featuredImage: object,
  path: string,
  keywords: arrayOf(string),
  scripts: arrayOf(object),
  links: arrayOf(object),
  meta: arrayOf(object),
}

export default Seo

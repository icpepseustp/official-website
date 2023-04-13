function resolveSourceFS(name, path) {
  return {
    resolve: "gatsby-source-filesystem",
    options: { name, path },
  }
}

function getSiteUrl() {
  const { CONTEXT, URL } = process.env
  if (CONTEXT && CONTEXT !== "production") {
    return process.env.DEPLOY_PRIME_URL
  }
  return URL || "http://localhost:8000"
}

/** @type {import("gatsby").GatsbyConfig} */
module.exports = {
  jsxRuntime: "automatic",
  trailingSlash: "never",
  siteMetadata: {
    siteUrl: getSiteUrl(),
    title: "ICpEP.SE USTP-CDO Official Website",
    description:
      "The Institute of Computer Engineers of the Philippines Student Edition (ICpEP.SE) is the official student body of the Department of Computer Engineering in USTP-CDO.",
    keywords: ["ustp", "icpep", "cdo"],
  },
  plugins: [
    resolveSourceFS("content", "./content/"),
    resolveSourceFS("settings", "./settings/"),
    resolveSourceFS("pages", "./src/pages/"),
    resolveSourceFS("media", "./static/media/"),

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "static/media/icon.png",
      },
    },

    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-yaml",
    "gatsby-plugin-image",
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-slug",
    "gatsby-plugin-extract-schema",
    "gatsby-plugin-mdx",

    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-video-ext",
            options: {
              related: false,
              noIframeBorder: true,
              loadingStrategy: "lazy",
              urlOverrides: [
                {
                  id: "youtube",
                  embedURL: (videoId) =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ],
            },
          },
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: { maxWidth: 1024 },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem",
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },

    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "G-7N2FE5ZEH4", // Google Analytics / GA
        ],
        gtagConfig: {
          anonymize_ip: true,
        },
        pluginConfig: {
          respectDNT: true,
          head: true,
          // TODO: make sure previews/dev deploys are not hit
        },
      },
    },

    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: "./src/cms.js",
      },
    },
    "gatsby-plugin-netlify",
  ],
}

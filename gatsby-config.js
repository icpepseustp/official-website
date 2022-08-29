/** @type {import("gatsby").GatsbyConfig} */
module.exports = {
  jsxRuntime: "automatic",
  trailingSlash: "never",
  siteMetadata: {
    siteUrl: "https://www.icpepse-ustp.org",
    title: "ICpEP.SE USTP Official Website",
    description:
      "The Institute of Computer Engineers of the Philippines Student Edition (ICpEP.SE) is the official student body of the Department of Computer Engineering in USTP-CDO.",
    image: "./src/images/icpepse-logo.png",
    keywords: ["ustp", "icpep"],
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    //! Temporarily disabled. See https://github.com/gatsbyjs/gatsby/issues/34706
    // "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    {
      resolve: `gatsby-transformer-remark`,
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
            resolve: `gatsby-remark-images`,
            options: { maxWidth: 1024 },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: "./content",
      },
      __key: "content",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "uploads",
        path: "./static/",
      },
      __key: "uploads",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: "./src/data/",
      },
      __key: "data",
    },
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-postcss",
    "gatsby-plugin-extract-schema",
    "gatsby-plugin-slug",
    "gatsby-plugin-netlify",
  ],
}

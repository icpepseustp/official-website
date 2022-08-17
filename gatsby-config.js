/** @type {import("gatsby").GatsbyConfig} */
module.exports = {
  jsxRuntime: "automatic",
  trailingSlash: "never",
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "ICpEP.SE USTP Official Website",
    //! description: "",
    //! image: "/src/images/...",
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
        name: "data",
        path: "./src/data/",
      },
      __key: "data",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/content`,
      },
      __key: "content",
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-extract-schema",
  ],
}

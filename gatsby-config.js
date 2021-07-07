module.exports = {
  siteMetadata: {
    title: "Unstarving Artists",
    titleTemplate: "%s | Unstarving Artists",
    siteUrl: "https://unstarvingartists.com",
    twitterUsername: "@unstarvingarts",
    image: "/social-graph.png",
    metaImage: {
      height: 2400,
      width: 1260,
    },
    author: "Unstarving Artists",
    keywords: ["artists", "sales", "become a highly paid artist"],
    description:
      "Become a highly paid artist without art world or gallery connections. Everything you need to become a highly paid artist. No art degree, art world connections, or gallery representation required. Not a tech whiz? That's ok too.",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-sharp",
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
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
        name: "stories",
        path: `${__dirname}/content/stories/`,
      },
    },
    "gatsby-plugin-postcss",
  ],
};

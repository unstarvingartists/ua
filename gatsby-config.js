module.exports = {
  siteMetadata: {
    title: "Unstarving Artists",
    siteUrl: "https://unstarvingartists.com",
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
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        // typeName: ({ node }) => {
        //   const name = node.sourceInstanceName;
        //   if (name === `stories`) {
        //     return `Story`;
        //   }
        //   return name;
        // },
      },
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
        name: "stories",
        path: `${__dirname}/content/stories/`,
      },
    },
    "gatsby-plugin-postcss",
  ],
};

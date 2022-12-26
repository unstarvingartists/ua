module.exports = {
  siteMetadata: {
    title: "Unstarving Artists",
    titleTemplate: "%s | Unstarving Artists",
    siteUrl: "https://www.unstarvingartists.com",
    twitter: {
      site: "@unstarvingarts",
      creator: "@therealharryw",
    },
    image: "/social-graph.png",
    metaImage: {
      height: 2400,
      width: 1260,
    },
    author: "Unstarving Artists",
    keywords: ["artists", "sales", "become a successful artist"],
    description:
      "Everything you need to become a successful artist. No art degree, art world connections, or gallery representation required. Not a tech whiz? That's ok too.",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: [
          "/video/",
          "/video1/",
          "/book/",
          "/book1/",
          "/book2/",
          "/apply/",
          "/thank-you/",
          "/case-studies/",
          "/how-to-prepare/",
          "/fb-training/",
          "/thank-you-for-applying/",
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `avif`],
          placeholder: `blurred`,
        },
      },
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
        name: "reviews",
        path: `${__dirname}/content/reviews/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "results",
        path: `${__dirname}/content/results/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blogs",
        path: `${__dirname}/content/blogs/`,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-TX4GXWB",
        enableWebVitalsTracking: true,
      },
    },
    "gatsby-plugin-postcss",
  ],
};

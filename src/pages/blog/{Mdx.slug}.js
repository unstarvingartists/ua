import * as React from "react";
import Layout from "../../components/layout";
import Navigation from "../../components/white-navigation";
import Hero from "../../components/blog/blog/hero";
import Body from "../../components/blog/blog/body";
import CheckoutMore from "../../components/blog/blog/checkout-more";
import CallToAction from "../../components/call-to-action";
import Footer from "../../components/footer";
import Seo from "../../components/seo";
import { graphql } from "gatsby";

export const query = graphql`
  query blogQuery($slug: String) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    mdx(
      slug: { eq: $slug }
      frontmatter: { category: { name: { eq: "Blog Post" } } }
    ) {
      id
      body
      frontmatter {
        category {
          href
          name
        }
        country
        description
        genre
        href
        videoID
        author {
          name
        }
        title
        image {
          publicURL
        }
      }
    }
    allMdx(
      filter: {
        frontmatter: { category: { name: { eq: "Blog Post" } } }
        slug: { ne: $slug }
      }
      sort: { fields: [frontmatter___id], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            category {
              href
              name
            }
            country
            description
            genre
            href
            author {
              name
            }
            title
            image {
              childImageSharp {
                gatsbyImageData(width: 392)
              }
            }
          }
        }
      }
    }
  }
`;

export default function Page({ data, location }) {
  return (
    <Layout>
      <Seo
        title={data.mdx.frontmatter.author.name}
        pathname={location.pathname}
      />
      <Hero {...data} {...location}>
        <Navigation />
      </Hero>
      <Body {...data} {...location} />
      <CheckoutMore {...data} />
      <CallToAction />
      <Footer />
    </Layout>
  );
}
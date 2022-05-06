import * as React from "react";
import Layout from "../components/layout";
import Navigation from "../components/white-navigation";
import Hero from "../components/blog/blog/hero";
import Body from "../components/blog/blog/body";
import CheckoutMore from "../components/blog/blog/checkout-more";
import CallToAction from "../components/call-to-action";
import Footer from "../components/footer";
import Seo from "../components/seo";
import { graphql } from "gatsby";

export const query = graphql`
  query blogQuery($id: String) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        category {
          href
          name
          label
        }
        href
        videoID
        videoType
        author {
          name
          href
          location
          title
          image {
            publicURL
          }
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
        id: { ne: $id }
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
              label
            }
            description
            href
            author {
              href
              name
              title
              location
              image {
                childImageSharp {
                  gatsbyImageData(width: 40)
                }
              }
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
        title={
          data.mdx.frontmatter.title + " · " + data.mdx.frontmatter.author.name
        }
        description={data.mdx.frontmatter.description}
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

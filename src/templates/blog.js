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
      frontmatter {
        description
        category {
          href
          name
          label
        }
        href
        videoID
        hashID
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
      sort: { frontmatter: { id: DESC } }
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
                gatsbyImageData(width: 468)
              }
            }
          }
        }
      }
    }
  }
`;

export default function Page({ data, location, children }) {
  const { key, ...passableLocation } = location;
  return (
    <Layout>
      <Seo
        title={
          data.mdx.frontmatter.title + " · " + data.mdx.frontmatter.author.name
        }
        description={data.mdx.frontmatter.description}
        pathname={location.pathname}
      />
      <Hero {...data} {...passableLocation}>
        <Navigation />
      </Hero>
      <Body {...data} {...passableLocation} children={children} />
      <CheckoutMore {...data} />
      <CallToAction />
      <Footer />
    </Layout>
  );
}

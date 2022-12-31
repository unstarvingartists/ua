import * as React from "react";
import Layout from "../components/layout";
import Navigation from "../components/white-navigation";
import Hero from "../components/reviews/review/hero";
import Body from "../components/reviews/review/body";
import CheckoutMore from "../components/reviews/review/checkout-more";
import CallToAction from "../components/call-to-action";
import Footer from "../components/footer";
import Seo from "../components/seo";
import { graphql } from "gatsby";

export const query = graphql`
  query reviewQuery($id: String) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    mdx(id: { eq: $id }) {
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
        blogHref
        videoID
        student {
          href
          name
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
        frontmatter: { category: { name: { eq: "Student Review" } } }
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
            }
            country
            description
            genre
            href
            blogHref
            student {
              href
              name
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
          data.mdx.frontmatter.title + " · " + data.mdx.frontmatter.student.name
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

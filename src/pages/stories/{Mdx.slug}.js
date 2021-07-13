import * as React from "react";
import Layout from "../../components/layout";
import Navigation from "../../components/white-navigation";
import Hero from "../../components/stories/story/hero";
import Body from "../../components/stories/story/body";
import CheckoutMore from "../../components/stories/story/checkout-more";
import CallToAction from "../../components/call-to-action";
import Footer from "../../components/footer";
import Seo from "../../components/seo";
import { graphql } from "gatsby";

export const query = graphql`
  query studentStoryQuery($slug: String) {
    mdx(slug: { eq: $slug }) {
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
        frontmatter: { category: { name: { eq: "Student Story" } } }
        slug: { ne: $slug }
      }
      sort: { fields: [frontmatter___id], order: ASC }
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
        title={data.mdx.frontmatter.student.name}
        pathname={location.pathname}
      />
      <Hero {...data}>
        <Navigation />
      </Hero>
      <Body />
      <CheckoutMore {...data} />
      <CallToAction />
      <Footer />
    </Layout>
  );
}

import * as React from "react";
import Layout from "../../components/layout";
import Navigation from "../../components/white-navigation";
import Body from "../../components/stories/story/body";
import CheckoutMore from "../../components/stories/story/checkout-more";
import CallToAction from "../../components/call-to-action";
import Footer from "../../components/footer";
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
  }
`;

export default function Page({ data }) {
  return (
    <Layout>
      <Body {...data}>
        <Navigation />
      </Body>
      <CheckoutMore />
      <CallToAction />
      <Footer />
    </Layout>
  );
}

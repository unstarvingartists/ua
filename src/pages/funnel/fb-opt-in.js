import React from "react";
import Layout from "../../components/layout";
import Navigation from "../../components/white-navigation";
import Footer from "../../components/footer";
import Seo from "../../components/seo";
import Hero from "../../components/funnel/hero";
import Video from "../../components/funnel/video";

export default function FBOptInPage({ location }) {
  return (
    <>
      <Layout>
        <Seo title="FB Opt In" pathname={location.pathname} />
        <Hero
          subheading="(From Home Without Hardcosts, Art World Connections, OR Techy
          Stuff)"
          heading={
            <>
              <p>
                *The 3 Step Process We Used To{" "}
                <b>
                  Earn 💰
                  <br /> From Our Art Over and Over and Over
                </b>
              </p>
              <p>
                *The 3 Step Process We Used To
                <br />
                <b>
                  Get Deep-Pocketed Art Collectors
                  <br /> Over and Over and Over
                </b>
              </p>
            </>
          }
        >
          <Navigation />
        </Hero>
        <Video />
        <Footer />
      </Layout>
    </>
  );
}

import React from "react";
import Layout from "../components/layout";
import Navigation from "../components/training/navigation";
import Footer from "../components/training/footer";
import Seo from "../components/seo";
import Hero from "../components/training/hero";
import Video from "../components/training/video";

export default function OptInPage({ location }) {
  return (
    <>
      <Layout>
        <Seo
          noIndex
          title="A Short Film: Flywheels"
          pathname={location.pathname}
        />
        <Hero
          subheading="(From Home Without Hardcosts, Art World Connections, OR Techy
          Stuff)"
          heading={
            <>
              <p>
                *The 3 Step Process We Used To{" "}
                <b>Earn A 5 Figure A Month Income From Our Art In 20 Days</b>
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

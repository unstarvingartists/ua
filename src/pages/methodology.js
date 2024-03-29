import * as React from "react";
import Layout from "../components/layout";
import Navigation from "../components/white-navigation";
import Hero from "../components/methodology/hero";
import WeDoEducation from "../components/methodology/we-do-education";
import HowOurMethodWorks from "../components/methodology/how-our-method-works";
import TheProofIsInTheNumbers from "../components/methodology/the-proof-is-in-the-numbers";
import LayerOne from "../components/methodology/layer-one";
import LayerTwo from "../components/methodology/layer-two";
import LayerThree from "../components/methodology/layer-three";
import LayerFour from "../components/methodology/layer-four";
import LayerFive from "../components/methodology/layer-five";
import WeTeach from "../components/methodology/we-teach";
import CallToAction from "../components/call-to-action";
import Footer from "../components/footer";
import Seo from "../components/seo";

export default function Page({ location }) {
  return (
    <Layout>
      <Seo title="Our methodology" pathname={location.pathname} />
      <Hero>
        <Navigation />
      </Hero>
      <WeDoEducation />
      <HowOurMethodWorks />
      <TheProofIsInTheNumbers />
      <WeTeach />
      <LayerOne />
      <LayerTwo />
      <LayerThree />
      <LayerFour />
      <LayerFive />
      <CallToAction />
      <Footer />
    </Layout>
  );
}

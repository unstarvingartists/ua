import * as React from "react";
import Layout from "../components/layout";
import Navigation from "../components/white-navigation";
import Hero from "../components/academy/hero";
import CallToAction from "../components/call-to-action";
import Faq from "../components/academy/faq";
import Summary from "../components/academy/summary";
import LearnTheWay from "../components/home/learn-the-way";
import HowItWorks from "../components/home/how-it-works";
import YoureInGoodCompany from "../components/home/youre-in-good-company";
import TheProofIsInTheNumbers from "../components/methodology/the-proof-is-in-the-numbers";
import Seo from "../components/seo";
import Footer from "../components/footer";

export default function Page({ location }) {
  return (
    <Layout>
      <Seo title="The Academy" pathname={location.pathname} />
      <Hero>
        <Navigation />
      </Hero>
      <Faq />
      <HowItWorks />
      <TheProofIsInTheNumbers />
      <LearnTheWay />
      <Summary />
      <YoureInGoodCompany />
      <CallToAction />
      <Footer />
    </Layout>
  );
}

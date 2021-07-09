import * as React from "react";
import Layout from "../components/layout";
import Navigation from "../components/white-navigation";
import Hero from "../components/flywheel-lab/hero";
import CallToAction from "../components/call-to-action";
import Faq from "../components/flywheel-lab/faq";
import ProgramContent from "../components/flywheel-lab/program-content";
import Summary from "../components/flywheel-lab/summary";
import LearnTheWay from "../components/home/learn-the-way";
import HowItWorks from "../components/home/how-it-works";
import YoureInGoodCompany from "../components/home/youre-in-good-company";
import TheProofIsInTheNumbers from "../components/methodology/the-proof-is-in-the-numbers";
import Seo from "../components/seo";
import Footer from "../components/footer";

export default function Page() {
  return (
    <Layout>
      <Seo title="Flywheel Lab" />
      <Hero>
        <Navigation />
      </Hero>
      <Faq />
      <HowItWorks />
      <TheProofIsInTheNumbers />
      <ProgramContent />
      <LearnTheWay />
      <Summary />
      <YoureInGoodCompany />
      <CallToAction />
      <Footer />
    </Layout>
  );
}

import * as React from "react";
import Layout from "../components/layout";
import Navigation from "../components/gray-navigation";
import Hero from "../components/careers/hero";
import Benefits from "../components/careers/benefits";
import CallToAction from "../components/careers/call-to-action";
import OurValues from "../components/careers/our-values";
import TeamOfLeaders from "../components/careers/team-of-leaders";
import Footer from "../components/footer";
import Seo from "../components/seo";

export default function Page({ location }) {
  return (
    <Layout>
      <Seo title="Careers" pathname={location.pathname} />
      <Hero>
        <Navigation />
      </Hero>
      <Benefits />
      <OurValues />
      <TeamOfLeaders />
      <CallToAction />
      <Footer />
    </Layout>
  );
}

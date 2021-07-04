import * as React from "react";
import Layout from "../components/layout";
import Navigation from "../components/gray-navigation";
import Hero from "../components/careers/hero";
import Benefits from "../components/careers/benefits";
import CallToAction from "../components/careers/call-to-action";
import OurValues from "../components/careers/our-values";
import TeamOfLeaders from "../components/careers/team-of-leaders";
import Footer from "../components/footer";

export default function Page() {
  return (
    <Layout>
      <Hero>
        <Navigation />
      </Hero>
      <Benefits />
      <CallToAction />
      <OurValues />
      <TeamOfLeaders />
      <Footer />
    </Layout>
  );
}

import * as React from "react";
import Layout from "../components/layout";
import Navigation from "../components/white-navigation";
import Hero from "../components/philosophy/hero";
import Body from "../components/philosophy/body";
import CallToAction from "../components/call-to-action";
import Footer from "../components/footer";
import Seo from "../components/seo";

export default function Page() {
  return (
    <Layout>
      <Seo title="Our philosophy" />
      <Hero>
        <Navigation />
      </Hero>
      <Body />
      <CallToAction />
      <Footer />
    </Layout>
  );
}

import * as React from "react";
import Layout from "../components/layout";
import Navigation from "../components/gray-navigation";
import Hero from "../components/methodology/hero";
import CallToAction from "../components/call-to-action";
import Footer from "../components/footer";
import Seo from "../components/seo";

export default function Page() {
  return (
    <Layout>
      <Seo title="Thank You" />
      <Hero>
        <Navigation />
      </Hero>
      <CallToAction />
      <Footer />
    </Layout>
  );
}

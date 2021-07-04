import * as React from "react";
import Layout from "../components/layout";
import Navigation from "../components/gray-navigation";
import Hero from "../components/contact/hero";
import Body from "../components/contact/body";
import CallToAction from "../components/call-to-action";
import Footer from "../components/footer";

export default function Page() {
  return (
    <Layout>
      <Hero>
        <Navigation />
      </Hero>
      <Body />
      <CallToAction />
      <Footer />
    </Layout>
  );
}

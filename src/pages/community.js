import * as React from "react";
import Layout from "../components/layout";
import Navigation from "../components/apply/navigation";
import Hero from "../components/community/hero";
import CallToAction from "../components/call-to-action";
import Footer from "../components/footer";
import Seo from "../components/seo";

export default function Page({ location }) {
  return (
    <Layout>
      <Seo title="Community" pathname={location.pathname} />
      <Hero>
        <Navigation />
      </Hero>
      <CallToAction />
      <Footer />
    </Layout>
  );
}

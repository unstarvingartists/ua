import * as React from "react";
import Layout from "../components/layout";
import Navigation from "../components/training-navigation";
import Hero from "../components/methodology/hero";
import Seo from "../components/seo";

export default function Page({ location }) {
  return (
    <Layout>
      <Seo title="Free Training" pathname={location.pathname} />
      <Hero>
        <Navigation />
      </Hero>
    </Layout>
  );
}

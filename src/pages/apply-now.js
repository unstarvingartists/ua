import * as React from "react";
import Layout from "../components/layout";
import Navigation from "../components/apply/navigation";
import Hero from "../components/apply/hero";
import Testimonial from "../components/apply/testimonial";
import FeatureList from "../components/apply/feature-list";
import Footer from "../components/footer";
import Seo from "../components/seo";

export default function Page({ location }) {
  return (
    <Layout>
      <Seo noIndex title="Apply Now" pathname={location.pathname} />
      <Hero>
        <Navigation />
      </Hero>
      <Testimonial />
      <FeatureList />
      <Footer />
    </Layout>
  );
}

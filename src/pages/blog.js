import * as React from "react";
import Layout from "../components/layout";
import Navigation from "../components/white-navigation";
import Hero from "../components/blog/hero";
import Blogs from "../components/blog/blogs";
import CallToAction from "../components/call-to-action";
import Footer from "../components/footer";
import Seo from "../components/seo";

export default function Page({ location }) {
  return (
    <Layout>
      <Seo title="Blog" pathname={location.pathname} />
      <Hero>
        <Navigation />
      </Hero>
      <Blogs />
      <CallToAction />
      <Footer />
    </Layout>
  );
}

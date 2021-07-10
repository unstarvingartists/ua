import * as React from "react";
import Layout from "../components/layout";
import Navigation from "../components/white-navigation";
import Hero from "../components/stories/hero";
import StudentStories from "../components/stories/student-stories";
import CallToAction from "../components/call-to-action";
import Footer from "../components/footer";
import Seo from "../components/seo";

export default function Page({ location }) {
  return (
    <Layout>
      <Seo title="Student Stories" pathname={location.pathname} />
      <Hero>
        <Navigation />
      </Hero>
      <StudentStories />
      <CallToAction />
      <Footer />
    </Layout>
  );
}

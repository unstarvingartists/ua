import * as React from "react";
import Layout from "../components/layout";
import Navigation from "../components/white-navigation";
import Hero from "../components/stories/hero";
import LogoCloud from "../components/stories/logo-cloud";
import StudentStories from "../components/stories/student-stories";
import CallToAction from "../components/call-to-action";
import Footer from "../components/footer";

export default function Page() {
  return (
    <Layout>
      <Hero>
        <Navigation />
      </Hero>
      <LogoCloud />
      <StudentStories />
      <CallToAction />
      <Footer />
    </Layout>
  );
}

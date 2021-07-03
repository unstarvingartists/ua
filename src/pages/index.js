import * as React from "react";
import Layout from "../components/layout";
import Navigation from "../components/navigation";
import Hero from "../components/home/hero";
import LogoCloud from "../components/home/logo-cloud";
import Problem from "../components/home/problem";
import HowItWorks from "../components/home/how-it-works";
import ProvenRealWorld from "../components/home/proven-real-world";
import WeTeach from "../components/home/we-teach";
import CallToAction from "../components/call-to-action";
import LearnTheWay from "../components/home/learn-the-way";
import YoureInGoodCompany from "../components/home/youre-in-good-company";
import LearnEssentials from "../components/home/learn-essentials";
import Footer from "../components/footer";

export default function Page() {
  return (
    <Layout>
      <Hero>
        <Navigation />
      </Hero>
      <LogoCloud />
      <Problem />
      <HowItWorks />
      <ProvenRealWorld />
      <WeTeach />
      <CallToAction />
      <LearnTheWay />
      <YoureInGoodCompany />
      <LearnEssentials />
      <CallToAction />
      <Footer />
    </Layout>
  );
}

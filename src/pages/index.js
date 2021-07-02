import * as React from "react";
import Layout from "../components/layout";
import Navigation from "../components/navigation";
import Hero from "../components/home/hero";
import LogoCloud from "../components/home/logo-cloud";
import Problem from "../components/home/problem";
import HowItWorks from "../components/home/how-it-works";
import BattleTested from "../components/home/battle-tested";
import WeTeach from "../components/home/we-teach";
import CallToAction from "../components/home/call-to-action";
import LearnTheWay from "../components/home/learn-the-way";
import YoureInGoodCompany from "../components/home/youre-in-good-company";
import LearnEverything from "../components/home/learn-everything";
import Footer from "../components/footer";

export default function Home() {
  return (
    <Layout>
      <Hero>
        <Navigation />
      </Hero>
      <LogoCloud />
      <Problem />
      <HowItWorks />
      <BattleTested />
      <WeTeach />
      <CallToAction />
      <LearnTheWay />
      <YoureInGoodCompany />
      <LearnEverything />
      <CallToAction />
      <Footer />
    </Layout>
  );
}

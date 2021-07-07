import * as React from "react";
import Layout from "../components/layout";
import Navigation from "../components/white-navigation";
import Hero from "../components/faq/hero";
import Faq from "../components/faq/faq";
import WhatMakesUsDifferent from "../components/faq/what-makes-us-different";
import YoureInGoodCompany from "../components/home/youre-in-good-company";
import MoreFaq from "../components/faq/more-faq";
import CallToAction from "../components/call-to-action";
import Footer from "../components/footer";

export default function Page() {
  return (
    <Layout>
      <Hero>
        <Navigation />
      </Hero>
      <Faq />
      <WhatMakesUsDifferent />
      <MoreFaq />
      <YoureInGoodCompany />
      <CallToAction />
      <Footer />
    </Layout>
  );
}

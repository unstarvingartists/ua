import * as React from "react";
import Layout from "../../components/layout";
import Navigation from "../../components/white-navigation";
import Body from "../../components/stories/story/body";
import CheckoutMore from "../../components/stories/story/checkout-more";
import CallToAction from "../../components/call-to-action";
import Footer from "../../components/footer";

export default function Page() {
  return (
    <Layout>
      <Body>
        <Navigation />
      </Body>
      <CheckoutMore />
      <CallToAction />
      <Footer />
    </Layout>
  );
}

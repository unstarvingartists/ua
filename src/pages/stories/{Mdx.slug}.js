import * as React from "react";
import Layout from "../../components/layout";
import Navigation from "../../components/white-navigation";
import Story from "../../components/stories/story/story";
import CheckoutMore from "../../components/stories/story/checkout-more";
import CallToAction from "../../components/call-to-action";
import Footer from "../../components/footer";

export default function Page() {
  return (
    <Layout>
      <Story>
        <Navigation />
      </Story>
      <CheckoutMore />
      <CallToAction />
      <Footer />
    </Layout>
  );
}

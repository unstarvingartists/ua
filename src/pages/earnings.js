import * as React from "react";
import Layout from "../components/layout";
import Navigation from "../components/white-navigation";
import Body from "../components/earnings/body";
import Footer from "../components/footer";
import Seo from "../components/seo";

export default function Page() {
  return (
    <Layout>
      <Seo title="Earnings Disclaimer" />
      <Body>
        <Navigation />
      </Body>
      <Footer />
    </Layout>
  );
}

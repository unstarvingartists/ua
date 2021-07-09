import * as React from "react";
import Layout from "../components/layout";
import Navigation from "../components/white-navigation";
import Body from "../components/terms/body";
import Footer from "../components/footer";
import Seo from "../components/seo";

export default function Page() {
  return (
    <Layout>
      <Seo title="Terms & Conditions" />
      <Body>
        <Navigation />
      </Body>
      <Footer />
    </Layout>
  );
}

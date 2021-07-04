import * as React from "react";
import Layout from "../components/layout";
import Navigation from "../components/white-navigation";
import Body from "../components/privacy/body";
import Footer from "../components/footer";

export default function Page() {
  return (
    <Layout>
      <Body>
        <Navigation />
      </Body>
      <Footer />
    </Layout>
  );
}

import * as React from "react";
import Layout from "../components/layout";
import Navigation from "../components/white-navigation";
import Body from "../components/acceptable-use/body";
import Footer from "../components/footer";
import Seo from "../components/seo";

export default function Page({ location }) {
  return (
    <Layout>
      <Seo title="Acceptable Use Policy" pathname={location.pathname} />
      <Body>
        <Navigation />
      </Body>
      <Footer />
    </Layout>
  );
}

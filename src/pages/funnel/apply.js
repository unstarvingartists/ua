import React from "react";
import Layout from "../../components/layout";
import Navigation from "../../components/white-navigation";
import Footer from "../../components/footer";
import Seo from "../../components/seo";
import { Widget } from "@typeform/embed-react";

export default function ApplyPage({ location }) {
  return (
    <>
      <Layout>
        <Seo title="Apply" pathname={location.pathname} />
        <div className="pt-6">
          <Navigation />
        </div>
        <Widget
          id="T6neG6uW"
          style={{ height: "500px" }}
          className="mx-auto max-w-7xl"
        />
        <Footer />
      </Layout>
    </>
  );
}

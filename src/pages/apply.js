import React from "react";
import Layout from "../components/layout";
import Navigation from "../components/training/navigation";
import Seo from "../components/seo";
import { Widget } from "@typeform/embed-react";

export default function ApplyPage({ location }) {
  return (
    <>
      <Layout>
        <Seo
          noIndex
          title="Strategy Session Application"
          pathname={location.pathname}
        />
        <div className="pt-10">
          <Navigation />
        </div>

        <Widget
          className="max-w-5xl mx-auto 2xl:max-w-6xl"
          id="hZ5TaWKP"
          style={{ height: "600px" }}
        />
      </Layout>
    </>
  );
}

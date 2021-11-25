import React from "react";
import Layout from "../../components/layout";
import Navigation from "../../components/funnel/navigation";
import Seo from "../../components/seo";
import { Widget } from "@typeform/embed-react";

export default function ApplyPage({ location }) {
  return (
    <>
      <Layout>
        <Seo
          title="Strategy Session Application"
          pathname={location.pathname}
        />
        <div className="pt-10">
          <Navigation />
        </div>
        <Widget
          id="T6neG6uW"
          style={{ height: "600px" }}
          className="mx-auto max-w-7xl"
        />
      </Layout>
    </>
  );
}

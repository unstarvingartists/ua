import React from "react";
import Layout from "../components/layout";
import Navigation from "../components/training/navigation";
import Seo from "../components/seo";
import { InlineWidget } from "react-calendly";

export default function BookVariant({ location }) {
  return (
    <>
      <Layout>
        <Seo title="Book a Strategy Session" pathname={location.pathname} />
        <div className="pt-10">
          <Navigation />
        </div>
        <div className="px-3 md:px-0">
          <InlineWidget url="https://calendly.com/unstarvingartists/artist-strategy-session-v?hide_gdpr_banner=1&text_color=212529&primary_color=007bff" />
        </div>
      </Layout>
    </>
  );
}

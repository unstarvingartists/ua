import React from "react";
import Layout from "../../components/layout";
import Navigation from "../../components/white-navigation";
import Footer from "../../components/footer";
import Seo from "../../components/seo";
import { InlineWidget } from "react-calendly";

export default function BookControl({ location }) {
  return (
    <>
      <Layout>
        <Seo title="Book (Control)" pathname={location.pathname} />
        <div className="pt-6">
          <Navigation />
        </div>
        <InlineWidget url="https://calendly.com/unstarvingartists/artist?hide_gdpr_banner=1&text_color=212529&primary_color=007bff" />
        <Footer />
      </Layout>
    </>
  );
}

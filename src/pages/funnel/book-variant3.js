import React from "react";
import Layout from "../../components/layout";
import Navigation from "../../components/white-navigation";
import Footer from "../../components/footer";
import Seo from "../../components/seo";
import { InlineWidget } from "react-calendly";

export default function BookVariant({ location }) {
  const params = new Map(
    location.search
      .slice(1)
      .split("&")
      .map((kv) => kv.split("="))
  );
  let fullname = params.get("name");
  let email = params.get("email");
  let phone = params.get("a1");
  var url =
    "https://calendly.com/unstarvingartists/artist-strategy-session-tf?hide_gdpr_banner=1&text_color=212529&primary_color=007bff";
  if (!!fullname) {
    url = url + "&name=" + fullname;
  }
  if (!!email) {
    url = url + "&email=" + email;
  }
  if (!!phone) {
    url = url + "&a1=" + phone;
  }
  return (
    <>
      <Layout>
        <Seo title="Book (Variant 3)" pathname={location.pathname} />
        <div className="pt-6">
          <Navigation />
        </div>
        <InlineWidget url={url} />
        <Footer />
      </Layout>
    </>
  );
}

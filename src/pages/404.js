import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Hero from "../components/404/hero";

const NotFoundPage = ({ location }) => (
  <Layout>
    <Seo title="404: Not found" pathname={location.pathname} />
    <Hero />
  </Layout>
);

export default NotFoundPage;

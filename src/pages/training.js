import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Navigation from "../components/training-navigation";
import Hero from "../components/training/hero";

const NotFoundPage = ({ location }) => (
  <Layout>
    <Seo title="A Short Film: Flywheels" pathname={location.pathname} />
    <Hero>
      <Navigation />
    </Hero>
  </Layout>
);

export default NotFoundPage;

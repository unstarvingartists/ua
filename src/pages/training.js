import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Navigation from "../components/training-navigation";
import Hero from "../components/training/hero";
import Footer from "../components/training/footer";

const NotFoundPage = ({ location }) => (
  <Layout>
    <Seo title="A Short Film: Flywheels" pathname={location.pathname} />
    <Hero>
      <Navigation />
    </Hero>
    <Footer />
  </Layout>
);

export default NotFoundPage;

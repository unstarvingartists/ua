import * as React from "react";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Hero from "../components/404/hero";
import Navigation from "../components/white-navigation";
import Footer from "../components/footer";

const NotFoundPage = ({ location }) => (
  <Layout>
    <Seo title="404: Not found" pathname={location.pathname} />
    <Hero>
      <Navigation />
    </Hero>
    <Footer />
  </Layout>
);

export default NotFoundPage;

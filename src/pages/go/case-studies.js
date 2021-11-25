import React from "react";
import Layout from "../../components/layout";
import Navigation from "../../components/funnel/navigation";
import Footer from "../../components/funnel/footer";
import Seo from "../../components/seo";
import Hero from "../../components/funnel/hero";
import Examples from "../../components/funnel/examples";

export default function ApplyPage({ location }) {
  return (
    <>
      <Layout>
        <Seo title="Case Studies" pathname={location.pathname} />
        <Hero
          heading={
            <p className="mb-2 font-bold text-[38px] leading-normal">
              Want To Get The Most Out Of Your Call?
              <br />
              ...Then Watch A Client Interview (Or Two) Below AND
              <br />
              See How It Turned Out For These Artists
            </p>
          }
          subheading={
            <p className="text-[22px] font-semibold">
              Note: Mention The Password Shown During The Interview For A
              Special Rate
            </p>
          }
        >
          <Navigation />
        </Hero>
        <Examples withoutLink showVideo />
        <a
          className="flex justify-center mb-10 text-lg font-bold text-center text-blue-500 hover:underline"
          href="https://www.unstarvingartists.com/stories/"
        >
          🍿 Click Here To See All Our Student Stories
        </a>
        <Footer short />
      </Layout>
    </>
  );
}

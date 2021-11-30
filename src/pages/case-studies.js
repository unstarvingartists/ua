import React from "react";
import Layout from "../components/layout";
import Navigation from "../components/training/navigation";
import Footer from "../components/training/footer";
import Seo from "../components/seo";
import Hero from "../components/training/hero";
import Examples from "../components/training/examples";

export default function ApplyPage({ location }) {
  return (
    <>
      <Layout>
        <Seo title="Case Studies" pathname={location.pathname} />
        <Hero
          heading={
            <p className="mb-2 text-base font-bold md:text-[38px] leading-normal">
              Want To Get The Most Out Of Your Call?
              <br />
              ...Then Watch A Client Interview (Or Two) Below AND
              <br />
              See How It Turned Out For These Artists
            </p>
          }
          subheading={
            <p className="text-sm md:text-[22px] font-semibold">
              Note: Mention The Password Shown During The Interview For A
              Special Rate
            </p>
          }
        >
          <Navigation />
        </Hero>
        <Examples withoutLink showVideo hidePlaybar />
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

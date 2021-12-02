import React from "react";
import Layout from "../components/layout";
import Navigation from "../components/training/navigation";
import Footer from "../components/training/footer";
import Seo from "../components/seo";
import Hero from "../components/training/hero";
import Wistia from "../components/training/wistia";
import Examples from "../components/training/examples";
import HowCallWork from "../components/training/howCallWork";

export default function BookVariant({ location }) {
  return (
    <>
      <Layout>
        <Seo noIndex title="You Are Booked." pathname={location.pathname} />
        <Hero
          heading={
            <p className="text-xl md:text-[38px] md:leading-tight font-semibold mb-2">
              You Are Booked.
              <br />
              Watch This Quick Video OR You Will
              <br /> Not Be Able To Attend The Call
            </p>
          }
          subheading={
            <p className="text-base">
              We DO NOT offer reschedules. If you do not show up for the call
              you will NOT be able to book <br />
              another. This is non negotiable. If you cannot make the time, DO
              NOT BOOK THE CALL.
            </p>
          }
        >
          <Navigation />
        </Hero>
        <div className="max-w-3xl px-3 mx-auto md:px-0">
          <Wistia id="60cb6qpa2e" />
        </div>
        <HowCallWork />
        <Examples />
        <Footer short />
      </Layout>
    </>
  );
}

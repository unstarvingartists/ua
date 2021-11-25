import React from "react";
import Layout from "../../components/layout";
import Navigation from "../../components/funnel/navigation";
import Footer from "../../components/funnel/footer";
import Seo from "../../components/seo";
import Hero from "../../components/funnel/hero";
import Wistia from "../../components/funnel/wistia";
import Examples from "../../components/funnel/examples";
import HowCallWork from "../../components/funnel/howCallWork";

export default function BookVariant({ location }) {
  return (
    <>
      <Layout>
        <Seo title="You Are Booked." pathname={location.pathname} />
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
        <div className="max-w-3xl mx-auto">
          <Wistia id="60cb6qpa2e" />
        </div>
        <HowCallWork />
        <Examples />
        <Footer short />
      </Layout>
    </>
  );
}

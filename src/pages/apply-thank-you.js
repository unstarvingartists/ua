import React from "react";
import Layout from "../components/layout";
import Navigation from "../components/training/navigation";
import Seo from "../components/seo";
import Hero from "../components/training/hero";

export default function ApplyThankYouPage({ location }) {
  return (
    <>
      <Layout>
        <Seo
          noIndex
          title="Sorry, Not A Good Fit"
          pathname={location.pathname}
        />
        <Hero
          heading={
            <p className="text-xl md:text-[30px] font-bold mb-8">
              Sorry, not a good fit at this time
            </p>
          }
          subheading={
            <div className="space-y-5 font-normal text-left text-black md:text-xl">
              <p>
                In order to keep our student experience at the highest level
                possible, Unstarving Artists is by invitation only. At the
                moment, we can only speak with people we feel we're in a great
                position to help.
              </p>
              <p>
                Unfortunately, based on your answers, we don't feel we're in a
                great position to help you at this time. It doesn't mean you
                can't make it as an artist. It doesn't mean that we don't think
                you can be successful. We're a small business with limited
                resources and it just means that at this time we're not ready
                yet with an offer that would be a great fit for you.
              </p>
              <p>
                If you think this is a mistake, please send us an email at{" "}
                <a
                  className="text-blue-500 hover:underline"
                  href="mailto:admissions@unstarvingartists.com"
                >
                  admissions@unstarvingartists.com
                </a>
                , explaining your art practice and why you'd be a good fit for
                Unstarving Artists.
              </p>
              <p>
                Alternatively, check out our Facebook Group for Artists which is
                open to all artists.
              </p>
              <div className="flex items-center justify-center">
                <a
                  href="https://www.facebook.com/groups/unstarvingartistscommunity"
                  className="inline-flex px-5 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                >
                  Join FREE Facebook Group
                </a>
              </div>
            </div>
          }
        >
          <Navigation />
        </Hero>
      </Layout>
    </>
  );
}

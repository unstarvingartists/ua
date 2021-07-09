import * as React from "react";
import { Link } from "gatsby";

const navigation = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Cookie Policy", href: "/cookies" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Earnings Disclaimer", href: "/earnings" },
  { name: "Acceptable Use", href: "/acceptable-use" },
];

export default function Component({ children }) {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        >
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8">
        {children}
        <div className="max-w-7xl pt-6 mx-auto sm:px-6 lg:px-8">
          <div className="sm:grid sm:grid-cols-6 sm:gap-4">
            <div>
              <ul className="mt-4 space-y-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-base text-gray-500 hover:text-gray-900"
                      activeClassName="text-gray-700 underline font-semibold"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sm:col-start-2 sm:col-span-4">
              <div className="text-lg max-w-prose mx-auto pt-10">
                <h1>
                  <span className="block text-base text-center text-blue-600 font-semibold tracking-wide uppercase">
                    The Fine <span className="line-through">Art</span> Print
                  </span>
                  <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Earnings Disclaimer
                  </span>
                </h1>
                <p className="mt-8 text-xl text-gray-500 leading-8">
                  Disclaimer: No Earnings Projections, Promises Or
                  Representations
                </p>
              </div>
              <div className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto">
                <p>
                  You recognize and agree that we have made no implications,
                  warranties, promises, suggestions, projections,
                  representations or guarantees whatsoever to you about future
                  prospects or earnings, or that you will earn any money, with
                  respect to your purchase of Vouch Group, LLC ("Unstarving
                  Artists" hereafter) products and/or services, and that we have
                  not authorized any such projection, promise, or representation
                  by others.
                </p>
                <p>
                  Any earnings or income statements, or any earnings or income
                  examples, are only estimates of what we think you could earn.
                  There is no assurance you will do as well as stated in any
                  examples. If you rely upon any figures provided, you must
                  accept the entire risk of not doing as well as the information
                  provided. This applies whether the earnings or income examples
                  are monetary in nature or pertain to advertising credits which
                  may be earned (whether such credits are convertible to cash or
                  not).
                </p>
                <p>
                  There is no assurance that any prior successes or past results
                  as to earnings or income (whether monetary or advertising
                  credits, whether convertible to cash or not) will apply, nor
                  can any prior successes be used, as an indication of your
                  future success or results from any of the information,
                  content, or strategies. Any and all claims or representations
                  as to income or earnings (whether monetary or advertising
                  credits, whether convertible to cash or not) are not to be
                  considered as “average earnings”.
                </p>
                <p>
                  (i) The Economy. The economy, both where you do business, and
                  on a national and even worldwide scale, creates additional
                  uncertainty and economic risk. An economic recession or
                  depression might negatively affect the results produced by
                  Unstarving Artists products and/or services.
                </p>
                <p>
                  (ii) Your Success Or Lack Of It. Your success in using the
                  information or strategies provided at
                  https://www.unstarvingartists.org depends on a variety of
                  factors. We have no way of knowing how well you will do, as we
                  do not know you, your background, your work ethic, your
                  dedication, your motivation, your desire, or your business
                  skills or practices. Therefore, we do not guarantee or imply
                  that you will get rich, that you will do as well, or that you
                  will have any earnings (whether monetary or advertising
                  credits, whether convertible to cash or not), at all.
                </p>
                <p>
                  Internet businesses and earnings derived therefrom, involve
                  unknown risks and are not suitable for everyone. You may not
                  rely on any information presented on the website or otherwise
                  provided by us, unless you do so with the knowledge and
                  understanding that you can experience significant losses
                  (including, but not limited to, the loss of any monies paid to
                  purchase Unstarving Artists products and/or services, and/or
                  any monies spent setting up, operating, and/or marketing
                  Unstarving Artists products and/or services, and further, that
                  you may have no earnings at all (whether monetary or
                  advertising credits, whether convertible to cash or not).
                </p>
                <p>
                  (iii) Forward-Looking Statements. MATERIALS CONTAINED ON THIS
                  WEBSITE OR IN MATERIALS PURCHASED AND/OR DOWNLOADED FROM THIS
                  WEBSITE MAY CONTAIN INFORMATION THAT INCLUDES OR IS BASED UPON
                  FORWARD-LOOKING STATEMENTS WITHIN THE MEANING OF THE
                  SECURITIES LITIGATION REFORM ACT OF 1995. FORWARD-LOOKING
                  STATEMENTS GIVE OUR EXPECTATIONS OR FORECASTS OF FUTURE
                  EVENTS. YOU CAN IDENTIFY THESE STATEMENTS BY THE FACT THAT
                  THEY DO NOT RELATE STRICTLY TO HISTORICAL OR CURRENT FACTS.
                  THEY USE WORDS SUCH AS “ANTICIPATE,” “ESTIMATE,” “EXPECT,”
                  “PROJECT,” “INTEND,” “PLAN,” “BELIEVE,” AND OTHER WORDS AND
                  TERMS OF SIMILAR MEANING IN CONNECTION WITH A DESCRIPTION OF
                  POTENTIAL EARNINGS OR FINANCIAL PERFORMANCE.
                </p>
                <p>
                  ANY AND ALL FORWARD LOOKING STATEMENTS HERE, IN OTHER
                  MATERIALS CONTAINED ON THIS WEBSITE OR IN MATERIALS PURCHASED
                  AND/OR DOWNLOADED FROM THIS WEBSITE ARE INTENDED TO EXPRESS
                  OUR OPINION OF EARNINGS POTENTIAL. MANY FACTORS WILL BE
                  IMPORTANT IN DETERMINING YOUR ACTUAL RESULTS AND NO GUARANTEES
                  ARE MADE THAT YOU WILL ACHIEVE RESULTS SIMILAR TO OURS OR
                  ANYBODY ELSE, IN FACT NO GUARANTEES ARE MADE THAT YOU WILL
                  ACHIEVE ANY RESULTS FROM OUR IDEAS AND TECHNIQUES IN OUR
                  MATERIAL.
                </p>
                <p>
                  (iv) Due Diligence. You are advised to do your own due
                  diligence when it comes to making business decisions and
                  should use caution and seek the advice of qualified
                  professionals. You should check with your accountant, lawyer,
                  or professional advisor, before acting on this or any
                  information. You may not consider any examples, documents, or
                  other content on the website or otherwise provided by us to be
                  the equivalent of professional advice. Nothing contained on
                  the website or in materials available for sale or download on
                  the website provides professional advice in any way. You
                  should consult with your own accountant, lawyer, or
                  professional advisor for any questions you may have.
                </p>
                <p>
                  We assume no responsibility for any losses or damages
                  resulting from your use of any link, information, or
                  opportunity contained within the website or within any
                  information disclosed by the owner of this site in any form
                  whatsoever.
                </p>
                <p>
                  (v) Purchase Price. Although we believe the price is fair for
                  the value that you receive, you understand and agree that the
                  purchase price for Unstarving Artists products and/or services
                  has been arbitrarily set by us. This price bears no
                  relationship to objective standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import * as React from "react";
import { Link } from "gatsby";

const navigation = [
  { name: "Privacy Policy", to: "/privacy" },
  { name: "Cookie Policy", to: "/cookies" },
  { name: "Terms & Conditions", to: "/terms" },
  { name: "Earnings Disclaimer", to: "/earnings" },
  { name: "Acceptable Use", to: "/acceptable-use" },
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
                      to={item.to}
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
                    Cookie Policy
                  </span>
                </h1>
                <p className="mt-8 text-xl text-gray-500 leading-8">
                  We use cookies to help improve your experience of{" "}
                  <Link to="/">unstarvingartists.com.</Link>{" "}
                </p>
              </div>
              <div className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto">
                <p>
                  This cookie policy is part of Vouch Group, LLC's privacy
                  policy, and covers the use of cookies between your device and
                  our site. We also provide basic information on third-party
                  services we may use, who may also use cookies as part of their
                  service, though they are not covered by our policy.
                </p>
                <p>
                  If you don’t wish to accept cookies from us, you should
                  instruct your browser to refuse cookies from{" "}
                  <Link to="/">unstarvingartists.com</Link> with the
                  understanding that we may be unable to provide you with some
                  of your desired content and services.
                </p>
                <h2>What is a cookie?</h2>
                <p>
                  A cookie is a small piece of data that a website stores on
                  your device when you visit, typically containing information
                  about the website itself, a unique identifier that allows the
                  site to recognise your web browser when you return, additional
                  data that serves the purpose of the cookie, and the lifespan
                  of the cookie itself.
                </p>
                <p>
                  Cookies are used to enable certain features (eg. logging in),
                  to track site usage (eg. analytics), to store your user
                  settings (eg. timezone, notification preferences), and to
                  personalise your content (eg. advertising, language).
                </p>
                <p>
                  Cookies set by the website you are visiting are normally
                  referred to as “first-party cookies”, and typically only track
                  your activity on that particular site. Cookies set by other
                  sites and companies (ie. third parties) are called
                  “third-party cookies”, and can be used to track you on other
                  websites that use the same third-party service.
                </p>
                <h2>Types of cookies and how we use them</h2>
                <h3>Essential cookies</h3>
                <p>
                  Essential cookies are crucial to your experience of a website,
                  enabling core features like user logins, account management,
                  shopping carts and payment processing. We use essential
                  cookies to enable certain functions on our website.
                </p>
                <h3>Performance cookies</h3>
                <p>
                  Performance cookies are used in the tracking of how you use a
                  website during your visit, without collecting personal
                  information about you. Typically, this information is
                  anonymous and aggregated with information tracked across all
                  site users, to help companies understand visitor usage
                  patterns, identify and diagnose problems or errors their users
                  may encounter, and make better strategic decisions in
                  improving their audience’s overall website experience. These
                  cookies may be set by the website you’re visiting
                  (first-party) or by third-party services. We use performance
                  cookies on our site.
                </p>
                <h3>Functionality cookies</h3>
                <p>
                  Functionality cookies are used in collecting information about
                  your device and any settings you may configure on the website
                  you’re visiting (like language and timezone settings). With
                  this information, websites can provide you with customised,
                  enhanced or optimised content and services. These cookies may
                  be set by the website you’re visiting (first-party) or by
                  third-party service. We use functionality cookies for selected
                  features on our site.
                </p>
                <h3>Targeting/advertising cookies</h3>
                <p>
                  Targeting/advertising cookies are used in determining what
                  promotional content is more relevant and appropriate to you
                  and your interests. Websites may use them to deliver targeted
                  advertising or to limit the number of times you see an
                  advertisement. This helps companies improve the effectiveness
                  of their campaigns and the quality of content presented to
                  you. These cookies may be set by the website you’re visiting
                  (first-party) or by third-party services.
                  Targeting/advertising cookies set by third-parties may be used
                  to track you on other websites that use the same third-party
                  service. We use targeting/advertising cookies on our site.
                </p>
                <h2>Third-party cookies on our site</h2>
                <p>
                  We may employ third-party companies and individuals on our
                  websites—for example, analytics providers and content
                  partners. We grant these third parties access to selected
                  information to perform specific tasks on our behalf. They may
                  also set third-party cookies in order to deliver the services
                  they are providing. Third-party cookies can be used to track
                  you on other websites that use the same third-party service.
                  As we have no control over third-party cookies, they are not
                  covered by Vouch Group, LLC's cookie policy.
                </p>
                <h3>Our third-party privacy promise</h3>
                <p>
                  We review the privacy policies of all our third-party
                  providers before enlisting their services to ensure their
                  practices align with ours. We will never knowingly include
                  third-party services that compromise or violate the privacy of
                  our users.
                </p>
                <h2>How you can control or opt out of cookies</h2>
                <p>
                  If you do not wish to accept cookies from us, you can instruct
                  your browser to refuse cookies from our website. Most browsers
                  are configured to accept cookies by default, but you can
                  update these settings to either refuse cookies altogether, or
                  to notify you when a website is trying to set or update a
                  cookie.
                </p>
                <p>
                  If you browse websites from multiple devices, you may need to
                  update your settings on each individual device.
                </p>
                <p>
                  Although some cookies can be blocked with little impact on
                  your experience of a website, blocking all cookies may mean
                  you are unable to access certain features and content across
                  the sites you visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

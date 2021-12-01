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
                    Privacy Policy
                  </span>
                </h1>
                <p className="mt-8 text-xl text-gray-500 leading-8">
                  Your privacy is important to us.
                </p>
              </div>
              <div className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto">
                <p>
                  It is Vouch Group, LLC’s policy to respect your privacy
                  regarding any information we may collect from you across our
                  website, <Link to="/">unstarvingartists.com</Link>, and other
                  sites we own and operate.
                </p>
                <h2>1. Information we collect</h2>
                <h3>Log data</h3>
                <p>
                  When you visit our website, our servers may automatically log
                  the standard data provided by your web browser. It may include
                  your computer’s Internet Protocol (IP) address, your browser
                  type and version, the pages you visit, the time and date of
                  your visit, the time spent on each page, and other details.
                </p>
                <h3>Device data</h3>
                <p>
                  We may also collect data about the device you’re using to
                  access our website. This data may include the device type,
                  operating system, unique device identifiers, device settings,
                  and geo-location data. What we collect can depend on the
                  individual settings of your device and software. We recommend
                  checking the policies of your device manufacturer or software
                  provider to learn what information they make available to us.
                </p>
                <h3>Personal information</h3>
                <p>We may ask for personal information, such as your:</p>
                <ul>
                  <li>Name</li>
                  <li>Email</li>
                  <li>Social media profiles</li>
                  <li>Date of birth</li>
                  <li>Phone/mobile number</li>
                  <li>Home/Mailing address</li>
                  <li>Work address</li>
                  <li>Website address</li>
                  <li>Payment information</li>
                </ul>
                <h3>Business data</h3>
                <p>
                  Business data refers to data that accumulates over the normal
                  course of operation on our platform. This may include
                  transaction records, stored files, user profiles, analytics
                  data and other metrics, as well as other types of information,
                  created or generated, as users interact with our services.
                </p>
                <h2>2. Legal bases for processing</h2>
                <p>
                  We will process your personal information lawfully, fairly and
                  in a transparent manner. We collect and process information
                  about you only where we have legal bases for doing so.
                </p>
                <p>
                  These legal bases depend on the services you use and how you
                  use them, meaning we collect and use your information only
                  where:
                </p>
                <ul>
                  <li>
                    it’s necessary for the performance of a contract to which
                    you are a party or to take steps at your request before
                    entering into such a contract (for example, when we provide
                    a service you request from us);
                  </li>
                  <li>
                    it satisfies a legitimate interest (which is not overridden
                    by your data protection interests), such as for research and
                    development, to market and promote our services, and to
                    protect our legal rights and interests;
                  </li>
                  <li>
                    you give us consent to do so for a specific purpose (for
                    example, you might consent to us sending you our
                    newsletter); or
                  </li>
                  <li>
                    we need to process your data to comply with a legal
                    obligation.
                  </li>
                </ul>
                <p>
                  Where you consent to our use of information about you for a
                  specific purpose, you have the right to change your mind at
                  any time (but this will not affect any processing that has
                  already taken place).
                </p>
                <p>
                  We don’t keep personal information for longer than is
                  necessary. While we retain this information, we will protect
                  it within commercially acceptable means to prevent loss and
                  theft, as well as unauthorised access, disclosure, copying,
                  use or modification. That said, we advise that no method of
                  electronic transmission or storage is 100% secure and cannot
                  guarantee absolute data security. If necessary, we may retain
                  your personal information for our compliance with a legal
                  obligation or in order to protect your vital interests or the
                  vital interests of another natural person.
                </p>
                <h2>3. Collection and use of information</h2>
                <p>
                  We may collect, hold, use and disclose information for the
                  following purposes and personal information will not be
                  further processed in a manner that is incompatible with these
                  purposes:
                </p>
                <ul>
                  <li>to provide you with our platform's core features;</li>
                  <li>to process any transactional or ongoing payments;</li>
                  <li>
                    to enable you to access and use our website, associated
                    applications and associated social media platforms;
                  </li>
                  <li>to contact and communicate with you;</li>
                  <li>
                    for internal record keeping and administrative purposes;
                  </li>
                  <li>
                    for analytics, market research and business development,
                    including to operate and improve our website, associated
                    applications and associated social media platforms;
                  </li>
                  <li>
                    to run competitions and/or offer additional benefits to you;
                  </li>
                  <li>
                    for advertising and marketing, including to send you
                    promotional information about our products and services and
                    information about third parties that we consider may be of
                    interest to you;
                  </li>
                  <li>
                    to comply with our legal obligations and resolve any
                    disputes that we may have; and
                  </li>
                  <li>to consider your employment application.</li>
                </ul>
                <h2>4. Disclosure of personal information to third parties</h2>
                <p>We may disclose personal information to:</p>
                <ul>
                  <li>
                    third party service providers for the purpose of enabling
                    them to provide their services, including (without
                    limitation) IT service providers, data storage, hosting and
                    server providers, ad networks, analytics, error loggers,
                    debt collectors, maintenance or problem-solving providers,
                    marketing or advertising providers, professional advisors
                    and payment systems operators;
                  </li>
                  <li>our employees, contractors and/or related entities;</li>
                  <li>sponsors or promoters of any competition we run;</li>
                  <li>
                    credit reporting agencies, courts, tribunals and regulatory
                    authorities, in the event you fail to pay for goods or
                    services we have provided to you;
                  </li>
                  <li>
                    courts, tribunals, regulatory authorities and law
                    enforcement officers, as required by law, in connection with
                    any actual or prospective legal proceedings, or in order to
                    establish, exercise or defend our legal rights;
                  </li>
                  <li>
                    third parties, including agents or sub-contractors, who
                    assist us in providing information, products, services or
                    direct marketing to you; and
                  </li>
                  <li>third parties to collect and process data.</li>
                </ul>
                <h2>5. International transfers of personal information</h2>
                <p>
                  The personal information we collect is stored and processed in
                  United States, or where we or our partners, affiliates and
                  third-party providers maintain facilities. By providing us
                  with your personal information, you consent to the disclosure
                  to these overseas third parties.
                </p>
                <p>
                  We will ensure that any transfer of personal information from
                  countries in the European Economic Area (EEA) to countries
                  outside the EEA will be protected by appropriate safeguards,
                  for example by using standard data protection clauses approved
                  by the European Commission, or the use of binding corporate
                  rules or other legally accepted means.
                </p>
                <p>
                  Where we transfer personal information from a non-EEA country
                  to another country, you acknowledge that third parties in
                  other jurisdictions may not be subject to similar data
                  protection laws to the ones in our jurisdiction. There are
                  risks if any such third party engages in any act or practice
                  that would contravene the data privacy laws in our
                  jurisdiction and this might mean that you will not be able to
                  seek redress under our jurisdiction’s privacy laws.
                </p>
                <h2>
                  6. Your rights and controlling your personal information
                </h2>
                <p>
                  <strong>Choice and consent:</strong> By providing personal
                  information to us, you consent to us collecting, holding,
                  using and disclosing your personal information in accordance
                  with this privacy policy. If you are under 16 years of age,
                  you must have, and warrant to the extent permitted by law to
                  us, that you have your parent or legal guardian’s permission
                  to access and use the website and they (your parents or
                  guardian) have consented to you providing us with your
                  personal information. You do not have to provide personal
                  information to us, however, if you do not, it may affect your
                  use of this website or the products and/or services offered on
                  or through it.{" "}
                </p>
                <p>
                  <strong>Information from third parties:</strong> If we receive
                  personal information about you from a third party, we will
                  protect it as set out in this privacy policy. If you are a
                  third party providing personal information about somebody
                  else, you represent and warrant that you have such person’s
                  consent to provide the personal information to us.{" "}
                </p>
                <p>
                  <strong>Restrict:</strong> You may choose to restrict the
                  collection or use of your personal information. If you have
                  previously agreed to us using your personal information for
                  direct marketing purposes, you may change your mind at any
                  time by contacting us using the details below. If you ask us
                  to restrict or limit how we process your personal information,
                  we will let you know how the restriction affects your use of
                  our website or products and services.{" "}
                </p>
                <p>
                  <strong>Access and data portability:</strong> You may request
                  details of the personal information that we hold about you.
                  You may request a copy of the personal information we hold
                  about you. Where possible, we will provide this information in
                  CSV format or other easily readable machine format. You may
                  request that we erase the personal information we hold about
                  you at any time. You may also request that we transfer this
                  personal information to another third party.{" "}
                </p>
                <p>
                  <strong>Correction:</strong> If you believe that any
                  information we hold about you is inaccurate, out of date,
                  incomplete, irrelevant or misleading, please contact us using
                  the details below. We will take reasonable steps to correct
                  any information found to be inaccurate, incomplete, misleading
                  or out of date.{" "}
                </p>
                <p>
                  <strong>Notification of data breaches:</strong> We will comply
                  laws applicable to us in respect of any data breach.{" "}
                </p>
                <p>
                  <strong>Complaints:</strong> If you believe that we have
                  breached a relevant data protection law and wish to make a
                  complaint, please contact us using the details below and
                  provide us with full details of the alleged breach. We will
                  promptly investigate your complaint and respond to you, in
                  writing, setting out the outcome of our investigation and the
                  steps we will take to deal with your complaint. You also have
                  the right to contact a regulatory body or data protection
                  authority in relation to your complaint.{" "}
                </p>
                <p>
                  <strong>Unsubscribe:</strong> To unsubscribe from our e-mail
                  database or opt-out of communications (including marketing
                  communications), please contact us using the details below or
                  opt-out using the opt-out facilities provided in the
                  communication.{" "}
                </p>
                <h2>7. Cookies</h2>
                <p>
                  We use “cookies” to collect information about you and your
                  activity across our site. A cookie is a small piece of data
                  that our website stores on your computer, and accesses each
                  time you visit, so we can understand how you use our site.
                  This helps us serve you content based on preferences you have
                  specified. Please refer to our{" "}
                  <Link to="/cookies">Cookie Policy</Link> for more information.{" "}
                </p>
                <h2>8. Business transfers</h2>
                <p>
                  If we or our assets are acquired, or in the unlikely event
                  that we go out of business or enter bankruptcy, we would
                  include data among the assets transferred to any parties who
                  acquire us. You acknowledge that such transfers may occur, and
                  that any parties who acquire us may continue to use your
                  personal information according to this policy.
                </p>
                <h2>9. Limits of our policy</h2>
                <p>
                  Our website may link to external sites that are not operated
                  by us. Please be aware that we have no control over the
                  content and policies of those sites, and cannot accept
                  responsibility or liability for their respective privacy
                  practices.
                </p>
                <h2>10. Changes to this policy</h2>
                <p>
                  At our discretion, we may change our privacy policy to reflect
                  current acceptable practices. We will take reasonable steps to
                  let users know about changes via our website. Your continued
                  use of this site after any changes to this policy will be
                  regarded as acceptance of our practices around privacy and
                  personal information.
                </p>
                <p>
                  If we make a significant change to this privacy policy, for
                  example changing a lawful basis on which we process your
                  personal information, we will ask you to re-consent to the
                  amended privacy policy.
                </p>
                <p>
                  <strong>Vouch Group, LLC Data Controller</strong>
                  <br />
                  Harry Whelchel
                  <br />
                  hello@unstarvingartists.com
                </p>
                <p>
                  <strong>Vouch Group, LLC Data Protection Officer</strong>
                  <br />
                  Harry Whelchel
                  <br />
                  hello@unstarvingartists.com
                </p>
                <p>This policy is effective as of 1 January 2019.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

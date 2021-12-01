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
                    Terms &amp; Conditions
                  </span>
                </h1>
                <p className="mt-8 text-xl text-gray-500 leading-8">
                  These Terms and Conditions govern your use of the
                  unstarvingartists.com and unstarvingartists.org web site
                  (hereinafter the “Website”). By accessing the Website, you, on
                  behalf of yourself and your applicable affiliates (hereinafter
                  “Customer” and “you”) are acknowledging and accepting these
                  Terms and Conditions.
                </p>
                <p className="mt-8 text-xl text-gray-500 leading-8">
                  These Terms and Conditions are subject to change by Vouch
                  Group, LLC, a Limited Liability Company having offices in
                  Atlanta, GA, USA. (hereinafter “Unstarving Artists”) at any
                  time and at our discretion without notice. Your use of the
                  Website after any changes are implemented constitutes your
                  acceptance of the changes.
                </p>
                <p className="mt-8 text-xl text-gray-500 leading-8">
                  As a result, we encourage you to consult the Terms and
                  Conditions each time you use the Website. Please read
                  carefully, and note our MANDATORY ARBITRATION PROVISION and
                  WAIVER OF CLASS ACTION PROVISION. The materials contained in
                  this Website are protected by applicable copyright and
                  trademark law.
                </p>
              </div>
              <div className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto">
                <h3>Last Revised: July 4, 2021</h3>
                <h2>1. Refund and Cancellation Policies</h2>
                <p>
                  1.1. Our Clear Action Based Refund Guarantee On All Purchases:
                </p>
                <p>
                  We stand behind the ability of our programs to get you results
                  when you spend the time studying and implementing what you
                  learn. Because of this we simply ask that you give the program
                  a fair attempt.
                </p>
                <p>
                  In order to qualify for a refund you must simply do the
                  following within 90 days.
                </p>
                <p>
                  1. Watch and complete all assessments up to week 6 (this means
                  all content and tests prior to the week 7 and bonus modules).
                </p>
                <p>2. Craft an Offer following our process.</p>
                <p>
                  3. Establish a Foundational Marketing Presence following our
                  process.
                </p>
                <p>4. Adapt a Sales Script following our process.</p>
                <p>
                  5. Conduct 2 Client Or Niche Interviews following our process.
                </p>
                <p>
                  6. Spend a minimum of 10 hours on Facebook generating leads
                  organically in Facebook Groups and in Facebook Messenger.
                </p>
                <p>
                  7. Ask coaches for help at least once in our Facebook Group
                  and engage at least 4 times per week inside the group.
                </p>
                <p>
                  8. Make an honest attempt. This means you put effort in over
                  the 90 day period.
                </p>
                <p>
                  An example of an “honest” attempt would be applying work over
                  a 90 day period and participating in the training.
                </p>
                <p>
                  A dishonest attempt would be waiting till day 89 and then
                  throwing an offer and sales script together, clicking through
                  the videos and aimlessly spending time on FB running down the
                  clock to generate leads.
                </p>
                <p>
                  We are extremely lenient on this and as long as you put in
                  genuine effort we are more than happy to issue your refund.
                </p>
                <p>
                  We have this guarantee to protect the value of our information
                  and coaching.
                </p>
                <p>
                  It’s our responsibility to train you and coach you to the best
                  our efforts.
                </p>
                <p>
                  It is your responsibility to apply the training and coaching.
                </p>
                <p>
                  If you do not get results after applying, then it is our fault
                  and we will happily refund you.
                </p>
                <p>
                  If you do not apply the training, it is unfortunately your
                  fault.
                </p>
                <p>
                  As long as you intend to use this program and do the bare
                  minimum above you have absolutely zero risk.
                </p>
                <p>
                  To claim your refund you must also return all property of ours
                  to us. This includes any templates, scripts, graphics, website
                  themes, checklists, handouts, etc.
                </p>
                <h2>2. Use License</h2>
                <ol type="a">
                  <li>
                    Permission is granted to temporarily download one copy of
                    the materials (information or software) on Unstarving
                    Artists' website for personal, non-commercial transitory
                    viewing only. This is the grant of a license, not a transfer
                    of title, and under this license you may not:
                    <ol type="i">
                      <li>modify or copy the materials;</li>
                      <li>
                        use the materials for any commercial purpose, or for any
                        public display (commercial or non-commercial);
                      </li>
                      <li>
                        attempt to decompile or reverse engineer any software
                        contained on Unstarving Artists' website;
                      </li>
                      <li>
                        remove any copyright or other proprietary notations from
                        the materials; or
                      </li>
                      <li>
                        transfer the materials to another person or "mirror" the
                        materials on any other server.
                      </li>
                    </ol>
                  </li>
                  <li>
                    This license shall automatically terminate if you violate
                    any of these restrictions and may be terminated by
                    Unstarving Artists at any time. Upon terminating your
                    viewing of these materials or upon the termination of this
                    license, you must destroy any downloaded materials in your
                    possession whether in electronic or printed format.
                  </li>
                </ol>
                <h2>3. Disclaimer</h2>
                <ol type="a">
                  <li>
                    The materials on Unstarving Artists' website are provided on
                    an 'as is' basis. Unstarving Artists makes no warranties,
                    expressed or implied, and hereby disclaims and negates all
                    other warranties including, without limitation, implied
                    warranties or conditions of merchantability, fitness for a
                    particular purpose, or non-infringement of intellectual
                    property or other violation of rights.
                  </li>
                  <li>
                    Further, Unstarving Artists does not warrant or make any
                    representations concerning the accuracy, likely results, or
                    reliability of the use of the materials on its website or
                    otherwise relating to such materials or on any sites linked
                    to this site.
                  </li>
                </ol>
                <h2>4. Testimonial Disclaimers</h2>
                <p>
                  In certain situations, you are required by law to include a
                  testimonial disclaimer if your website or application displays
                  user reviews or endorsements — whether users post them
                  directly or not.
                </p>
                <p>
                  There are several situations in which you need to provide such
                  a policy:
                </p>
                <ol type="i">
                  <li>
                    Your website or app includes reviews or endorsements for
                    your products or services.
                  </li>
                  <li>You pay people for reviews or testimonials.</li>
                  <li>
                    You pay people to make social media posts endorsing or
                    recommending your product, business, or service.
                  </li>
                  <li>
                    You give someone a free product in exchange for a review.
                  </li>
                  <li>
                    Users are otherwise compensated for giving their opinions on
                    the product or service–this includes offering discounts,
                    deals, or entering them into a sweepstakes.
                  </li>
                </ol>
                <p>
                  Ultimately, if there is a relationship between you and the
                  endorser (the person providing the review) that the average
                  consumer would be interested in knowing about, you should
                  disclose this information in a disclaimer.
                </p>
                <p>
                  In no event shall Unstarving Artists or its suppliers be
                  liable for any damages (including, without limitation, damages
                  for loss of data or profit, or due to business interruption)
                  arising from failure to comply with the Fair Trade Commission
                  Act, California’s Online Privacy Protection Act, United States
                  Federal Trade Commission, The Consumer Protection from Unfair
                  Trading Regulations Act of 2008, Data Protection Act of 1998,
                  or any other present or future laws, regulations, or guidance
                  related to testimonials and endorsements.
                </p>
                <h2>5. Intellectual Property</h2>
                <p>
                  By posting or submitting any material (including, without
                  limitation, videos, testimonials, endorsements, comments, blog
                  entries, Facebook postings, photos and videos) to us via
                  Unstarving Artists' website, internet groups, social media
                  venues, or to any of our staff via email, text or otherwise,
                  you are representing: (i) that you are the owner of the
                  material, or are making your posting or submission with the
                  express consent of the owner of the material; and (ii) that
                  you are thirteen years of age or older.
                </p>
                <p>
                  In addition, when you submit, email, text or deliver or post
                  any material, excluding your original artwork, you are
                  granting us, and anyone authorized by us, a royalty-free,
                  perpetual, irrevocable, non-exclusive, unrestricted, worldwide
                  license to use, copy, modify, transmit, sell, exploit, create
                  derivative works from, distribute, and/or publicly perform or
                  display such material, in whole or in part, in any manner or
                  medium, now known or hereafter developed, for any purpose. The
                  foregoing grant shall include the right to exploit any
                  proprietary rights in such posting or submission, including,
                  but not limited to, rights under copyright, trademark, service
                  mark or patent laws under any relevant jurisdiction. Also, in
                  connection with the exercise of such rights, you grant us, and
                  anyone authorized by us, the right to identify you as the
                  author of any of your postings or submissions by name, email
                  address or screen name, as we deem appropriate.
                </p>
                <p>
                  You acknowledge and agree that any contributions originally
                  created by you for us, excluding your original artwork, shall
                  be deemed a “work made for hire” when the work performed is
                  within the scope of the definition of a work made for hire in
                  Section 101 of the United States Copyright Law, as amended. As
                  such, the copyrights in those works shall belong to Unstarving
                  Artists from their creation. Thus, Unstarving Artists shall be
                  deemed the author and exclusive owner thereof and shall have
                  the right to exploit any or all of the results and proceeds in
                  any and all media, now known or hereafter devised, throughout
                  the universe, in perpetuity, in all languages, as Unstarving
                  Artists determines. In the event that any of the results and
                  proceeds of your submissions hereunder are not deemed a “work
                  made for hire” under Section 101 of the Copyright Act, as
                  amended, you hereby, without additional compensation,
                  irrevocably assign, convey and transfer to Unstarving Artists
                  all proprietary rights, including without limitation, all
                  copyrights and trademarks throughout the universe, in
                  perpetuity in every medium, whether now known or hereafter
                  devised, to such material and any and all right, title and
                  interest in and to all such proprietary rights in every
                  medium, whether now known or hereafter devised, throughout the
                  universe, in perpetuity. Any posted material which are
                  reproductions of prior works by you shall be co-owned by us.
                </p>
                <p>
                  You agree that Unstarving Artists has the right to use
                  materials created pursuant to this agreement for Unstarving
                  Artists’s portfolio, samples, self-promotion including
                  advertising for Unstarving Artists’s business including
                  without limitation Facebook or Instagram, or any other social
                  media platform.
                </p>
                <p>
                  You acknowledge that Unstarving Artists has the right but not
                  the obligation to use and display any postings or
                  contributions of any kind and that Unstarving Artists may
                  elect to cease the use and display of any such materials (or
                  any portion thereof), at any time for any reason whatsoever.
                </p>
                <p>
                  Limitations on Linking and Framing. You may establish a
                  hypertext link to Unstarving Artists' website so long as the
                  link does not state or imply any sponsorship of your site by
                  us or by Unstarving Artists' website. However, you may not,
                  without our prior written permission, frame or inline link any
                  of the content of Unstarving Artists' website, or incorporate
                  into another website or other service any of our material,
                  content or intellectual property.
                </p>
                <h2>6. Limitations</h2>
                <p>
                  In no event shall Unstarving Artists or its suppliers be
                  liable for any damages (including, without limitation, damages
                  for loss of data or profit, or due to business interruption)
                  arising out of the use or inability to use the materials on
                  Unstarving Artists' website, even if Unstarving Artists or a
                  Unstarving Artists authorized representative has been notified
                  orally or in writing of the possibility of such damage.
                  Because some jurisdictions do not allow limitations on implied
                  warranties, or limitations of liability for consequential or
                  incidental damages, these limitations may not apply to you.
                </p>
                <h2>7. Accuracy of materials</h2>
                <p>
                  The materials appearing on Unstarving Artists' website could
                  include technical, typographical, or photographic errors.
                  Unstarving Artists does not warrant that any of the materials
                  on its website are accurate, complete or current. Unstarving
                  Artists may make changes to the materials contained on its
                  website at any time without notice. However Unstarving Artists
                  does not make any commitment to update the materials.
                </p>
                <h2>8. Links</h2>
                <p>
                  Unstarving Artists has not reviewed all of the sites linked to
                  its website and is not responsible for the contents of any
                  such linked site. The inclusion of any link does not imply
                  endorsement by Unstarving Artists of the site. Use of any such
                  linked website is at the user's own risk.
                </p>
                <h2>9. Testimonial Disclaimer</h2>
                <p>
                  Unstarving Artists' website may contain testimonials by users
                  of our products and/or services. These testimonials reflect
                  the real-life experiences and opinions of such users. However,
                  the experiences are personal to those particular users, and
                  may not necessarily be representative of all users of our
                  products and/or services. We do not claim, and you should not
                  assume, that all users will have the same experiences. YOUR
                  INDIVIDUAL RESULTS MAY VARY.
                </p>
                <p>
                  The testimonials on Unstarving Artists' website are submitted
                  in various forms such as text, audio and/or video, and are
                  reviewed by us before being posted. They appear on Unstarving
                  Artists' website verbatim as given by the users, except for
                  the correction of grammar or typing errors. Some testimonials
                  may have been shortened for the sake of brevity where the full
                  testimonial contained extraneous information not relevant to
                  the general public.
                </p>
                <p>
                  The views and opinions contained in the testimonials belong
                  solely to the individual user and do not reflect our views and
                  opinions. Some users may have received small cash gifts, free
                  access to subscription software, gift cards, donations to the
                  charity of their choice, or other small tokens of
                  appreciation.
                </p>
                <p>
                  For testimonials we post on our site that are in the nature of
                  subjective opinions, we do not independently verify, nor do we
                  seek independent verification; however, to the best of our
                  knowledge we believe the people offering a testimonial are
                  giving their honest opinions.
                </p>
                <p>
                  Additionally, these testimonials are not intended to make
                  claims that these products or servces can be used to diagnose,
                  treat, cure, mitigate or prevent any disease. These claims
                  have not been clinically proven or evaluated by the FDA.
                </p>
                <h2>10. Modifications</h2>
                <p>
                  Unstarving Artists may revise these terms of service for its
                  website at any time without notice. By using this website you
                  are agreeing to be bound by the then current version of these
                  terms of service.
                </p>
                <h2>11. Governing Law</h2>
                <p>
                  These terms and conditions are governed by and construed in
                  accordance with the laws of Georgia and you irrevocably submit
                  to the exclusive jurisdiction of the courts in that State or
                  location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

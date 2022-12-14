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
                    Terms of Service
                  </span>
                  <span className="mt-2 block text-center">
                    Last Revised: August 2022
                  </span>
                </h1>
              </div>
              <div className="mt-20 prose prose-blue prose-lg text-gray-500 mx-auto">
                <h2>TERMS OF USE & CONDITIONS OF SALE</h2>
                <i>
                  IMPORTANT – PLEASE READ OUR TERMS OF USE AND CONDITIONS OF
                  SALE CAREFULLY BEFORE ACCESSING, USING, OR PLACING AN ORDER.
                  THESE TERMS CONTAIN DISCLAIMERS OF WARRANTIES, LIMITATIONS OF
                  LIABILITIES, AND CLASS ACTION WAIVER AND MANDATORY ARBITRATION
                  PROVISIONS (SEE SECTIONS 12, 13, AND 14, RESPECTIVELY.)
                </i>
                <p>
                  Unstarving Artists, LLC (“Unstarving Artists,” “we,” or “us”)
                  provides its website, Unstarving Artists, located at
                  www.UnstarvingArtists.com (together with all other websites,
                  mobile applications, and services operated on behalf of
                  Unstarving Artists, The Academy, and Harry Whelchel,
                  collectively, the “Site”), to you, an individual user (“you”)
                  for your individual usage, subject to your acceptance of, and
                  compliance with, the terms and conditions set forth herein.
                </p>
                <h2>1. Agreement</h2>
                <p>
                  By accessing or using this Site, or placing an order through
                  the Site, you agree to be bound by our Terms of Use &
                  Conditions of Sale (“Terms”) and Unstarving Artists’ Privacy
                  Policy, which is expressly incorporated into these Terms. If
                  you do not agree to these terms and conditions in their
                  entirety, you are not authorized to use the Site in any manner
                  or form whatsoever.
                </p>
                <p>
                  THIS AGREEMENT CONTAINS ARBITRATION AND CLASS ACTION WAIVER
                  PROVISIONS THAT WAIVE YOUR RIGHT TO A COURT HEARING, RIGHT TO
                  A JURY TRIAL AND RIGHT TO PARTICIPATE IN A CLASS ACTION.
                  ARBITRATION IS MANDATORY AND IS THE EXCLUSIVE REMEDY FOR ANY
                  AND ALL DISPUTES UNLESS SPECIFIED BELOW IN SECTION 15 OR IF
                  YOU OPT-OUT. PLEASE CAREFULLY REVIEW THE DISPUTE RESOLUTION
                  PROVISIONS IN SECTION 15 BELOW WHICH ALSO DESCRIBES YOUR RIGHT
                  TO OPT-OUT.
                </p>
                <p>
                  By using the Site and agreeing to these Terms, you represent
                  that you are at least the age of majority in your state or
                  province of residence. If you use the Site, you are affirming
                  that you have the legal capacity to enter into a binding
                  contract with us, and have read this Agreement and understand
                  and agree to its terms.
                </p>
                <h2>2. Changes to These Terms</h2>
                <p>
                  Unstarving Artists reserves the right to update, change, or
                  replace any part of these Terms by posting updates and/or
                  changes to our Site. You can review the most current version
                  of these Terms at any time by visiting this page
                  (https://www.unstarvingartists.com/terms). It is your
                  responsibility to check this page periodically for changes.
                  Your continued use of, or access to, the Site following the
                  posting of any changes constitutes your binding acceptance of
                  those changes.
                </p>
                <h2>3. Privacy and Security Disclosure</h2>
                <p>
                  Unstarving Artists’ Privacy Policy may be viewed at
                  https://www.unstarvingartists.com/privacy. The Privacy Policy
                  is hereby incorporated into these Terms by reference and
                  constitute a part of this Agreement. Unstarving Artists
                  reserves the right to modify the Privacy Policy at its sole
                  discretion.
                </p>
                <h2>4. Intellectual Property</h2>
                <p>
                  The Site and the content contained herein, as well as all
                  copyrights, including without limitation, the text, documents,
                  articles, products, software, graphics, photos, sounds,
                  videos, interactive features, services, links, user
                  submissions (as defined in Section 18), third-party apps, and
                  any other content on the Site (collectively, “Content”) and
                  the trademarks, service marks and logos contained therein are
                  the property of Unstarving Artists and its third-party
                  licensors or providers. You may access and use the Content,
                  and download and/or print out copies of any content from the
                  Site, solely for your personal, non-commercial use. If you
                  download or print a copy of the Content for personal use, you
                  must retain all copyright and other proprietary notices
                  contained therein. You acknowledge that you do not acquire any
                  ownership rights by using the Site. Unstarving Artists
                  reserves all rights not expressly granted in and to the Site.
                </p>
                <p>
                  The site may contain references to protected trademarks and
                  service marks of other parties, but Unstarving Artists may not
                  specifically identify them as such. Unstarving Artists does
                  not claim ownership in any such marks.
                </p>
                <h2>5. Disclaimer on Earnings</h2>
                <p>
                  Every artist is different, employing different strategic
                  approaches and organizational structures, and offering
                  different products. Therefore, individual results will vary
                  from user to user. YOUR INDIVIDUAL RESULTS WILL VARY DEPENDING
                  UPON A VARIETY OF FACTORS UNIQUE TO YOU, INCLUDING BUT NOT
                  LIMITED TO YOUR CONTENT, BUSINESS MODEL, AND PRODUCT
                  OFFERINGS.
                </p>
                <p>
                  Unstarving Artists does not promise, guarantee, or warrant
                  your success, income, or sales. You understand and acknowledge
                  that Unstarving Artists will not at any time provide sales
                  leads or referrals to you or your business. Those who purchase
                  our products or services will receive access to software and
                  tools to help publish content on Instagram and otherwise
                  assist with their respective offerings. However, we do not
                  guarantee your success and based upon many market factors that
                  we cannot control, the software and tools we provide may or
                  may not be applicable to your specific art enterprise.
                  Further, we do not make earnings claims, efforts claims,
                  return on investment claims, or claims that our software,
                  tools, or other offerings will make your art enterprise any
                  specific amount of money, and it is possible that you will not
                  earn your investment back. We do not sell a business
                  opportunity, “get rich quick” program, guaranteed system,
                  franchise system, or a business in a box. You should not
                  purchase our products or services if that is your expectation.
                  Instead, you should purchase with the understanding that using
                  the information and software purchased will take time and
                  effort and may be applicable in some situations but not
                  others. Also, we do not offer any tax, accounting, financial,
                  or legal advice. You should consult your business’ accountant,
                  attorney, or financial advisor for advice on these topics.
                </p>
                <h2>6. User Conduct</h2>
                <p>
                  You may not use, copy, display, sell, license, de-compile,
                  republish, upload, post, transmit, distribute, create
                  derivative works or otherwise exploit Content from the Site to
                  online bulletin boards, message boards, newsgroups, chat
                  rooms, or in any other manner, without our prior written
                  permission. Modification of the Content or use of the Content
                  for any purpose other than your own personal, noncommercial
                  use is a violation of our copyright and other proprietary
                  rights, and can subject you to legal liability.
                </p>
                <p>
                  In addition, in connection with your use of the Site and its
                  services, you agree not to:
                </p>
                <ul>
                  <li>
                    Restrict or inhibit any other visitor from using the Site,
                    including, without limitation, by means of “hacking” or
                    defacing any portion of the Site;
                  </li>
                  <li>Use the Site for any unlawful purpose;</li>
                  <li>
                    Express or imply that any statements you make are endorsed
                    by us, without our prior written consent;
                  </li>
                  <li>
                    Modify, adapt, sublicense, translate, sell, reverse
                    engineer, decompile or disassemble any portion of the Site;
                  </li>
                  <li>
                    Disable, damage or alter the functioning or appearance of
                    the Site, including the presentation of advertising;
                  </li>
                  <li>
                    “Frame” or “mirror” any part of the Site without our prior
                    written authorization;
                  </li>
                  <li>
                    Use any robot, spider, site search/retrieval application, or
                    other manual or automatic device or process to download,
                    retrieve, index, “data mine,” “scrape,” “harvest” or in any
                    way reproduce or circumvent the navigational structure or
                    presentation of the Site or its contents;
                  </li>
                  <li>
                    Harvest or collect information about visitors to the Site
                    without their express consent;
                  </li>
                  <li>
                    Send unsolicited or unauthorized advertisements, spam, chain
                    letters, etc. to other users of the Site; or
                  </li>
                  <li>
                    Transmit any Content which contains software viruses, or
                    other harmful computer code, files or programs.
                  </li>
                </ul>
                <h2>7. Account Registration</h2>
                <p>
                  In order to access some of the services of the Site, you will
                  be required to create an account. By creating this account you
                  agree to the following:
                </p>
                <ul>
                  <li>You may only maintain a single account;</li>
                  <li>
                    You may never share your account username or password or
                    knowingly provide or authorize access to your account;
                  </li>
                  <li>
                    You may never use another user's account without permission;
                  </li>
                  <li>
                    When creating your account, you must provide accurate and
                    complete information;
                  </li>
                  <li>
                    You are solely responsible for the activity that occurs on
                    your account, and you must keep your account password
                    secure;
                  </li>
                  <li>
                    You must notify us immediately of any breach of security or
                    unauthorized use of your account; and
                  </li>
                  <li>
                    You will be liable for any use made of your account or
                    password and the losses of Unstarving Artists or others due
                    to such unauthorized use. We will not be liable for your
                    losses caused by any unauthorized use of your account.
                  </li>
                </ul>
                <p>
                  Unstarving Artists has the right, in its sole discretion, to
                  cancel your subscription or suspend your access to the Site.
                </p>
                <h2>8. Cancellation & Refund Policy</h2>
                <p>
                  You agree that you fully understand that our staff is always
                  willing to work with you and will always honor any guarantee.
                  You agree to contact us before you attempt to file any dispute
                  or chargeback with your bank or credit card. However, if you
                  file a fraudulent dispute or chargeback, your account will be
                  reported to your bank as fraud, sent to collections, and
                  possibly pursued legally. You have zero risk of this issue as
                  long as you just speak with our staff by emailing them at
                  support@unstarvingartists.com. We will not tolerate fraud of
                  any kind.
                </p>
                <h3>Guarantee</h3>
                <h4>a. The Academy</h4>
                <p>
                  At The Academy, we stand behind the ability of our program to
                  get you results when you spend the time studying and
                  implementing what you learn. Because of this, we simply ask
                  that you give the program a fair attempt.
                </p>
                <p>
                  The Academy comes with a 72 hour no questions asked refund
                  period. After 72 hours have passed, the program comes with our
                  action-based Money Back Guarantee.
                </p>
                <p>
                  Our refund guarantee is a black and white guarantee meaning
                  refunds are granted on a black and white basis (no gray area).
                  If you have taken the required actions to qualify (listed
                  below), then you can receive a full refund, end of story.
                </p>
                <p>
                  If you have not taken the required actions to qualify for a
                  full refund (listed below), then you do not qualify and you
                  will not receive a refund, end of story. There will be no
                  exceptions.
                </p>
                <p>
                  Our guarantee and the conditions that follow have been put in
                  place for your own good. The actions required to qualify are
                  the exact same actions it takes to become a successful
                  independent artist. We are not asking you to do anything that
                  you shouldn’t already do. We are simply asking you to use the
                  program as it is intended, and that requires taking action.
                  Some people give up at the first sign of resistance, and if
                  you do so, then you are not giving us or the program the
                  chance to help you. If we allowed students to quit when they
                  hit adversity, we would have a fraction as many student
                  success stories as we do.
                </p>
                <p>
                  The conditions for the Money Back Guarantee are as follows:
                </p>
                <ol>
                  <li>
                    The member must set up one online art booth on Instagram.
                  </li>
                  <li>
                    The member must complete a minimum of 50 studio tours
                    recorded on Zoom.
                  </li>
                  <li>The member must attend two 1-on-1 coaching calls.</li>
                </ol>
                <p>
                  The timeframe in which these criteria must be met is 180 days.
                  If the criteria is met and the member is not happy with their
                  level or results, they can claim a full refund for the
                  enrollment fee in the program.
                </p>
                <p>
                  All criteria for meeting our Money Back Guarantee must be
                  provided to our support staff via email at
                  support@unstarvingartists.com within 180 days from the date of
                  purchase. If you have not completed the actions stated above,
                  your refund request will not be considered. Please do not
                  contact our team for a refund if you have not taken the
                  actions required to receive a full refund.
                </p>
                <p>
                  If you claim and receive the Money Back Guarantee (Full refund
                  of $1,997 if you joined with the 1-time pay OR $999x3 if you
                  joined with the 3-pay payment plan), you will return all
                  financial bonuses, course materials and access granted to you
                  during the period of your enrollment in the program.
                </p>
                <p>
                  Therefore, if you got the $500 cash bonus during your
                  participation in the program, it will be deducted from the
                  full refund of your original enrollment fee at the point of
                  refund. This means you will receive either $1,497 (if you
                  joined with the 1-time pay) OR $2,497 (if you joined with the
                  3-pay payment plan and provided you have paid all
                  installments) as your refund amount. If you enrolled with the
                  3-pay option and have not completed your 3 payments of
                  $999/month, you will receive a refund of the enrollment fee
                  amount you have paid minus the $500 cash bonus if you have
                  received it.
                </p>
                <p>
                  This guarantee is only applicable to your enrollment fee in
                  The Academy as all additional purchases are non-refundable and
                  are completely available to you to be used at your discretion
                  during your membership period.
                </p>
                <p>
                  You agree that you fully understand that our staff is always
                  willing to work with you and will always honor any guarantee.
                  However, if you file a fraudulent dispute or chargeback, you
                  forfeit your refund and your account will be reported to your
                  bank as fraud, sent to collections and possibly pursued
                  legally. You have zero risk of this issue as long as you just
                  speak with our staff by emailing them at
                  support@unstarvingartists.com. We will not tolerate fraud of
                  any kind.
                </p>
                <p>
                  The Money Back Guarantee does not look at your personal issues
                  as forms of consideration, strictly and only the criteria
                  stated above. This is why the refund guarantee is a black &
                  white guarantee. No ifs, ands or buts.
                </p>
                <p>
                  The following reasons do not qualify for the money back
                  guarantee and you will not receive a refund if:
                </p>
                <ul>
                  <li>You changed your mind</li>
                  <li>You lost motivation</li>
                  <li>You found the program confusing and not for you</li>
                  <li>Not computer or tech savvy enough</li>
                  <li>Don’t have the money or time to use the program</li>
                  <li>Emergency family situation</li>
                  <li>Unexpected health or financial issues</li>
                  <li>Need some quick and easy money</li>
                  <li>Personal drama</li>
                  <li>
                    Any other reason that is unrelated to the action-based
                    criteria stated above
                  </li>
                </ul>
                <p>
                  This is not because we are evil, money hungry devils. It is
                  because we will not allow you to use your personal life’s
                  circumstances to give up on the program, and more importantly
                  yourself. If you do not apply what is taught in the program,
                  there is nothing we can do to help. Therefore, we make it a
                  requirement that you apply what is taught.
                </p>
                <h4>b. Artist Accelerator</h4>
                <p>
                  As the Artist Accelerator is our top level personal coaching
                  program designed to help you get results, we are committed to
                  working with you to make that happen. The Money Back Guarantee
                  is only applicable to The Academy program and does not apply
                  to your enrollment into the Artist Accelerator. This means
                  that any cancellation of your enrollment into the Artist
                  Accelerator is governed by the following cancellation policy.
                </p>
                <p>
                  You may cancel this transaction at any time within 72 hours of
                  the payment being made, after which the sale is final and
                  non-refundable. If you cancel, any payments made by you under
                  this contract or sale will be returned to you within 14
                  business days. All cancellation requests must be in writing
                  via email to support@unstarvingartists.com. The company will
                  retain a 5% cancellation charge to cover any fees. Please
                  contact the support email address listed above for any
                  questions regarding cancellation or your request.
                </p>
                <p>
                  If at the end of your 6-month membership in Artist Accelerator
                  you are not satisfied with your progress and you can prove
                  that you have utilized the resources given and taken action on
                  the training, then you will be given an additional 6 months of
                  access to Artist Accelerator, at no additional charge.
                  Utilizing the resources means you have watched the video
                  training, attended at least one of each workshop, communicated
                  with your coach on a monthly basis, your coach has reviewed
                  and approved important steps in the online art booth process
                  such as your art topic, Instagram account targets, and studio
                  tour script, and you showed up for your accountability calls.
                  Unstarving Artists, LLC makes no guarantee regarding the
                  amount of business success you will achieve with this program.
                  Any damages are limited to the amounts paid to Unstarving
                  Artists, LLC.
                </p>
                <h4>c. The Academy</h4>
                <p>
                  We stand behind the ability of The Academy program to get you
                  results when you spend the time studying and implementing what
                  you learn. Because of this we simply ask that you give the
                  program a fair attempt. In order to qualify for a refund of
                  The Academy program you must simply do the following within 90
                  days:
                </p>
                <ol>
                  <li>
                    Watch and complete all training and action items up through
                    section 6 "Collector Attraction" (this means all content and
                    action items prior to the Weekly Q&A recordings and any
                    bonus sections).
                  </li>
                  <li>Craft an Art Offer following our process.</li>
                  <li>
                    Establish a Foundational Marketing Presence following our
                    process.
                  </li>
                  <li>
                    Adapt a Sales Script following our process. Complete 10+
                    hours of practice studio tours with fellow artists in the
                    program. Record 10+ live studio tours.
                  </li>
                  <li>
                    Conduct 2 Client Or Niche Interviews following our process.
                  </li>
                  <li>
                    Spend a minimum of 10 hours on Facebook generating leads
                    organically in Facebook Groups and in Facebook Messenger.
                  </li>
                  <li>
                    Ask coaches for help at least 3 times per week in our
                    Facebook Group for 90 days. One mulligan week.
                  </li>
                  <li>
                    Ask questions at both weekly Q&A calls for 90 days. One
                    mulligan week.
                  </li>
                  <li>
                    Make an honest attempt. This means you put effort in over
                    the 90 day period.
                  </li>
                </ol>
                <p>
                  An example of an “honest” attempt would be applying work over
                  a 90 day period and participating in the training. A dishonest
                  attempt would be waiting till day 89 and then throwing an
                  offer and sales script together, clicking through the videos
                  and aimlessly spending time on FB running down the clock to
                  generate leads. We are extremely lenient on this and as long
                  as you put in genuine effort we are more than happy to issue
                  your refund. We have this guarantee to protect the value of
                  our information and coaching. It’s our responsibility to train
                  you and coach you to the best of our efforts. It is your
                  responsibility to apply the training and coaching. If you do
                  not get results after applying, then it is our fault and we
                  will happily refund you. If you do not apply the training, it
                  is unfortunately your fault. As long as you intend to use this
                  program and do the bare minimum above you have absolutely zero
                  risk. To claim your refund you must also return all property
                  of ours to us. This includes any templates, scripts, graphics,
                  website themes, checklists, handouts, etc.
                </p>
                <h2>9. $500 Bonus</h2>
                <p>
                  The $500 cash back bonus is a reward for following the program
                  and taking action. To claim this, you need to have spent a
                  minimum of $500 to set up your online art booth and then
                  submit your receipts through the application area once your
                  online art booth meets all of the requirements. Once your
                  submission has been approved, our team will get back to you
                  regarding the status of your application. As indicated in the
                  application area, online art booths set up under the 7-day
                  profit challenge are not eligible to claim this bonus.
                </p>
                <h2>10. Payment Methods</h2>
                <p>
                  All charges are in U.S. Dollars. We accept U.S. issued credit
                  and debit cards from Visa, MasterCard, American Express, and
                  Discover.
                </p>
                <p>When placing an order online, you will need:</p>
                <ol>
                  <li>
                    The address the card’s statement is sent to (billing
                    address);
                  </li>
                  <li>The card number and expiration date; and</li>
                  <li>
                    The 3 or 4 digit code found only on the card (CVV2 code).
                  </li>
                </ol>
                <p>
                  By submitting credit card information or other payment
                  information to us, you represent and agree that: (i) you are
                  fully entitled to use that card or account; (ii) if you choose
                  a subscription-based purchase, that you will pay all payments
                  for your subscriptions by the date due; (iii) all payment
                  information provided is complete and accurate; (iv) you will
                  be responsible for any credit card fees; and (v) that
                  sufficient funds exist to pay us the amount(s) due.
                </p>
                <p>
                  We and our third party payment service providers may request,
                  and we may receive, updated credit card information from your
                  credit card issuer, such as updated card numbers and
                  expiration date information when your credit card has expired.
                  If such updated information is provided to us and our
                  third-party payment service providers, we will update your
                  account information accordingly, and will use such updated
                  information to process payments for your subscription(s) if
                  you signed up for subscription(s). Your credit card issuer may
                  give you the right to opt out of providing vendors and
                  third-party payment service providers with your updated credit
                  card information. If you wish to opt out of your credit card’s
                  updating service, you should contact your credit card issuer.
                </p>
                <p>
                  We are not responsible for any fees or charges that your bank
                  or credit card issuer may apply. If your bank or credit card
                  issuer reverses a charge to your credit card, we may bill you
                  directly and seek payment by another method including a mailed
                  statement.
                </p>
                <h2>11. Copyright Notice</h2>
                <p>
                  The Site maintains specific contact information provided
                  below, including an email address, for notifications of
                  claimed infringement regarding materials posted to this
                  Website. All notices should be addressed to the contact person
                  specified below (our agent for notice of claimed
                  infringement):
                </p>
                <p>Notification of Claimed Infringement:</p>
                <p>Unstarving Artists</p>
                <p>Attn: Copyright Agent</p>
                <p>Email Address: support@unstarvingartists.com</p>
                <p>
                  You may contact our agent for notice of claimed infringement
                  specified above with complaints regarding allegedly infringing
                  posted material and we will investigate those complaints. If
                  the posted material is believed in good faith by us to violate
                  any applicable law, we will remove or disable access to any
                  such material, and we will notify the posting party that the
                  material has been blocked or removed.
                </p>
                <p>
                  In notifying us of alleged copyright infringement, the Digital
                  Millennium Copyright Act requires that you include the
                  following information: (i) description of the copyrighted work
                  that is the subject of claimed infringement; (ii) description
                  of the infringing material and information sufficient to
                  permit us to locate the alleged material; (iii) contact
                  information for you, including your address, telephone number
                  and/or e-mail address; (iv) a statement by you that you have a
                  good faith belief that the material in the manner complained
                  of is not authorized by the copyright owner, or its agent, or
                  by the operation of any law; (v) a statement by you, signed
                  under penalty of perjury, that the information in the
                  notification is accurate and that you have the authority to
                  enforce the copyrights that are claimed to be infringed; and
                  (vi) a physical or electronic signature of the copyright owner
                  or a person authorized to act on the copyright owner’s behalf.
                  Failure to include all of the above-listed information may
                  result in the delay of the processing of your complaint.
                </p>
                <h2>12. DISCLAIMER OF WARRANTIES</h2>
                <p>
                  EXCEPT WHERE OTHERWISE INAPPLICABLE OR PROHIBITED BY LAW, THE
                  WEBSITE AND ALL CONTENT ARE PROVIDED ON AN “AS IS”, “AS
                  AVAILABLE” BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER
                  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF
                  TITLE OR IMPLIED WARRANTIES OF MERCHANTABILITY OR FITNESS FOR
                  A PARTICULAR PURPOSE. WE MAKE NO, AND EXPRESSLY DISCLAIM ANY
                  AND ALL, REPRESENTATIONS AND WARRANTIES AS TO THE RELIABILITY,
                  TIMELINESS, QUALITY, SUITABILITY, AVAILABILITY, ACCURACY
                  AND/OR COMPLETENESS OF ANY INFORMATION ON THIS WEBSITE. WE DO
                  NOT REPRESENT OR WARRANT, AND EXPRESSLY DISCLAIM THAT: (A) THE
                  USE OF THE WEBSITE WILL BE SECURE, TIMELY, UNINTERRUPTED OR
                  ERROR-FREE, OR OPERATE IN COMBINATION WITH ANY OTHER HARDWARE,
                  SOFTWARE, SYSTEM OR DATA, (B) THE WEBSITE OR OUR PRODUCTS WILL
                  MEET YOUR REQUIREMENTS OR EXPECTATIONS, (C) ANY STORED DATA
                  WILL BE ACCURATE OR RELIABLE, (D) THE QUALITY OF ANY PRODUCTS,
                  SERVICES, INFORMATION, OR OTHER MATERIAL PURCHASED OR OBTAINED
                  BY YOU THROUGH THE WEBSITE WILL MEET YOUR REQUIREMENTS OR
                  EXPECTATIONS, (E) ERRORS OR DEFECTS IN THE WEBSITE WILL BE
                  CORRECTED, OR (F) THE WEBSITE OR THE SERVER(S) THAT MAKE THE
                  WEBSITE AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL
                  COMPONENTS. ALL CONDITIONS, REPRESENTATIONS AND WARRANTIES,
                  WHETHER EXPRESS, IMPLIED, STATUTORY OR OTHERWISE, INCLUDING,
                  WITHOUT LIMITATION, ANY IMPLIED WARRANTY OF MERCHANTABILITY,
                  FITNESS FOR A PARTICULAR PURPOSE, OR NON INFRINGEMENT OF THIRD
                  PARTY RIGHTS, ARE HEREBY DISCLAIMED TO THE MAXIMUM EXTENT
                  PERMITTED BY APPLICABLE LAW.
                </p>
                <h2>13. DISCLAIMER OF LIABILITIES</h2>
                <p>
                  EXCEPT WHERE OTHERWISE INAPPLICABLE OR PROHIBITED BY LAW, IN
                  NO EVENT SHALL UNSTARVING ARTISTS OR ANY OF ITS OFFICERS,
                  DIRECTORS, SHAREHOLDERS, EMPLOYEES, INDEPENDENT CONTRACTORS,
                  TELECOMMUNICATIONS PROVIDERS, AND/OR AGENTS BE LIABLE FOR ANY
                  INDIRECT, SPECIAL, INCIDENTAL, EXEMPLARY, CONSEQUENTIAL,
                  PUNITIVE, OR ANY OTHER DAMAGES, FEES, COSTS OR CLAIMS ARISING
                  FROM OR RELATED TO THIS AGREEMENT, THE PRIVACY POLICY, THE
                  PRODUCTS, OR YOUR OR A THIRD PARTY’S USE OR ATTEMPTED USE OF
                  THE WEBSITE OR ANY PRODUCT, REGARDLESS OF WHETHER UNSTARVING
                  ARTISTS, LLC HAS HAD NOTICE OF THE POSSIBILITY OF SUCH
                  DAMAGES, FEES, COSTS, OR CLAIMS. THIS INCLUDES, WITHOUT
                  LIMITATION, ANY LOSS OF USE, LOSS OF PROFITS, LOSS OF DATA,
                  LOSS OF GOODWILL, COST OF PROCUREMENT OF SUBSTITUTE SERVICES
                  OR PRODUCTS, OR ANY OTHER INDIRECT, SPECIAL, INCIDENTAL,
                  PUNITIVE, CONSEQUENTIAL, OR OTHER DAMAGES. THIS APPLIES
                  REGARDLESS OF THE MANNER IN WHICH DAMAGES ARE ALLEGEDLY
                  CAUSED, AND ON ANY THEORY OF LIABILITY, WHETHER FOR BREACH OF
                  CONTRACT, TORT (INCLUDING NEGLIGENCE AND STRICT LIABILITY),
                  WARRANTY, OR OTHERWISE. IF, NOTWITHSTANDING THE LIMITATIONS OF
                  LIABILITY SET FORTH ABOVE, UNSTARVING ARTISTS, LLC IS FOUND
                  LIABLE UNDER ANY THEORY, UNSTARVING ARTISTS, LLC’S LIABILITY
                  AND YOUR EXCLUSIVE REMEDY WILL BE LIMITED TO USD $500.00. THIS
                  LIMITATION OF LIABILITY SHALL APPLY FOR ALL CLAIMS, REGARDLESS
                  OF WHETHER UNSTARVING ARTISTS, LLC WAS AWARE OF OR ADVISED IN
                  ADVANCE OF THE POSSIBILITY OF DAMAGES OR SUCH CLAIMS. SOME
                  STATES DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES, SO
                  SOME OF THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU AND YOU MAY
                  HAVE ADDITIONAL RIGHTS.
                </p>
                <h2>
                  14. DISPUTE RESOLUTION BY MANDATORY BINDING ARBITRATION AND
                  CLASS ACTION WAIVER
                </h2>
                <p>
                  PLEASE READ THIS ARBITRATION AND CLASS ACTION WAIVER PROVISION
                  CAREFULLY. IT REQUIRES YOU TO ARBITRATE DISPUTES WITH
                  UNSTARVING ARTISTS AND LIMITS THE MANNER IN WHICH YOU CAN SEEK
                  RELIEF FROM US.
                </p>
                <p>
                  EXCEPT WHERE PROHIBITED BY LAW, YOU AGREE THAT ANY CLAIM THAT
                  YOU MAY HAVE IN THE FUTURE MUST BE RESOLVED THROUGH FINAL AND
                  BINDING CONFIDENTIAL ARBITRATION. YOU ACKNOWLEDGE AND AGREE
                  THAT YOU ARE WAIVING THE RIGHT TO A TRIAL BY JURY. THE RIGHTS
                  THAT YOU WOULD HAVE IF YOU WENT TO COURT, SUCH AS DISCOVERY OR
                  THE RIGHT TO APPEAL, MAY BE MORE LIMITED OR MAY NOT EXIST. YOU
                  AGREE THAT YOU MAY ONLY BRING A CLAIM IN YOUR INDIVIDUAL
                  CAPACITY AND NOT AS A PLAINTIFF (LEAD OR OTHERWISE) OR CLASS
                  MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING.
                  YOU FURTHER AGREE THAT THE ARBITRATOR MAY NOT CONSOLIDATE
                  PROCEEDINGS OR CLAIMS OR OTHERWISE PRESIDE OVER ANY FORM OF A
                  REPRESENTATIVE OR CLASS PROCEEDING.
                </p>
                <p>
                  THERE IS NO JUDGE OR JURY IN ARBITRATION, AND COURT REVIEW OF
                  AN ARBITRATION AWARD IS LIMITED. HOWEVER, AN ARBITRATOR CAN
                  AWARD ON AN INDIVIDUAL BASIS THE SAME DAMAGES AND RELIEF AS A
                  COURT (INCLUDING INJUNCTIVE AND DECLARATORY RELIEF OR
                  STATUTORY DAMAGES), AND MUST FOLLOW THE TERMS OF THESE
                  CONDITIONS OF USE AS A COURT WOULD.
                </p>
                <h3>a. General</h3>
                <p>
                  Arbitration is a manner of resolving a “Claim” without filing
                  a lawsuit. “Claim” means any dispute between you, Unstarving
                  Artists, or any involved third-party relating to your account,
                  your use of the Website, your relationship with Unstarving
                  Artists, these Terms, or the Privacy Policy. This includes any
                  and all claims that relate in any way to your use or attempted
                  use of the products, and any act or omission by Unstarving
                  Artists or any third-party related to your use or attempted
                  use of the products. You, Unstarving Artists, or any involved
                  third-party may pursue a Claim. Unstarving Artists agrees to
                  final and binding confidential arbitration should it have any
                  Claims against you. Likewise, you agree to final and binding
                  confidential arbitration should you have any Claims against
                  Unstarving Artists. By agreeing to arbitrate, you waive the
                  right to go to court and agree instead to submit any Claims to
                  final and binding confidential arbitration. You further agree
                  that all claims must be arbitrated on an individual basis and
                  not on a class basis, only individual relief is available, and
                  that claims of more than one customer cannot be arbitrated or
                  consolidated with those of any other customer. This
                  arbitration provision sets forth the terms and conditions of
                  our agreement to final and binding confidential arbitration
                  and is governed by and enforceable under the Federal
                  Arbitration Act (the “FAA”), 9 U.S.C. §§ 1-16, as amended.
                </p>
                <p>
                  Notwithstanding anything to the contrary herein, (a) a
                  representative action for public injunctive relief pursuant to
                  California’s Consumer Legal Remedies Act (Cal. Civ. Code §
                  1750 et seq.), Unfair Competition Law (Cal. Bus. & Prof. Code
                  § 17200 et seq.) and/or False Advertising Law (Cal. Bus. &
                  Prof. Code § 17500 et seq.) must be arbitrated on a class
                  basis, (b) in the event that the foregoing clause is deemed
                  invalid or unenforceable, a representative action for public
                  injunctive relief pursuant to California’s Consumer Legal
                  Remedies Act (Cal. Civ. Code § 1750 et seq.), Unfair
                  Competition Law (Cal. Bus. & Prof. Code § 17200 et seq.)
                  and/or False Advertising Law (Cal. Bus. & Prof. Code § 17500
                  et seq.) may be brought in the state or federal courts located
                  in California on a class basis, and (c) any claims other than
                  for public injunctive relief must be arbitrated on an
                  individual, non-class basis as otherwise set forth in this
                  Section.
                </p>
                <h3>b. Exceptions</h3>
                <p>
                  Notwithstanding the foregoing, and as an exception to final
                  and binding confidential arbitration, you and Unstarving
                  Artists both retain the right to pursue, in small claims
                  court, any claim that is within that court’s jurisdiction and
                  proceeds on an individual (non-class) basis, including overdue
                  account matters within the small claims court’s jurisdiction.
                  Unstarving Artists will not demand arbitration in connection
                  with any individual claim that you properly file and pursue in
                  a small claims court, so long as the claim is and remains
                  pending in that court. The following claims shall not be
                  subject to final and binding arbitration and must be
                  adjudicated only in the state or federal courts located in
                  Fulton County, Georgia: (i) an action by Unstarving Artists
                  relating to the infringement or validity of our proprietary
                  rights, including without limitation, trademarks, service
                  marks, trade dress, copyrights, trade secrets, or patents; or
                  (ii) an action by Unstarving Artists for temporary,
                  preliminary, or permanent injunctive relief, whether
                  prohibitive or mandatory, or other provisional relief, against
                  you for breach or threatened breach of this Agreement. You
                  expressly agree to refrain from bringing or joining any claims
                  that are excluded from final and binding arbitration pursuant
                  to this subsection “b” in any representative or class-wide
                  capacity, including but not limited to bringing or joining any
                  claims in any class action or any class-wide arbitration.
                  Small claims matters may be filed in any small claims court
                  with personal and subject matter jurisdiction over the
                  parties. For all other matters excluded from final and binding
                  arbitration by this subsection “b,” the parties consent to
                  exclusive jurisdiction and venue in the state and federal
                  courts located in Fulton County, Georgia, and forever waive
                  any challenge to said courts’ jurisdiction and venue.
                </p>
                <h3>c. Required Pre-Dispute Procedures</h3>
                <p>
                  We acknowledge and agree that before initiating any Claim
                  against the other, we agree to first contact the other with a
                  written description of the dispute, which shall include all
                  relevant documents and information, and the proposed
                  resolution. You may send the written description of any
                  dispute you have with us by U.S. Mail to Unstarving Artists,
                  Attn: Legal Department, 309 E. Paces Ferry Rd NE, Atlanta, GA
                  30305. Unstarving Artists will contact you by letter at the
                  billing address you provided to us or at the email address you
                  provided to us. You agree to negotiate with Unstarving Artists
                  or its designated representative in good faith about your
                  problem or dispute. If for some reason the dispute is not
                  resolved within 60 days after receipt of the written dispute,
                  we agree to the dispute resolution provisions below.
                  Notwithstanding the foregoing or any other term of this
                  arbitration agreement, we will have the right to seek
                  injunctive or other equitable relief in state or federal court
                  located in Fulton County, Georgia to enforce these Terms or
                  prevent an infringement of a third party’s rights or our
                  intellectual property rights, as stated in subsection “b”
                  above. You hereby expressly consent to, and forever waive any
                  challenge to, the exclusive personal jurisdiction and venue of
                  said courts in such actions.
                </p>
                <h3>d. Commencing Arbitration</h3>
                <p>
                  You and Unstarving Artists agree to commence any arbitration
                  proceeding within 1 year after the Claim arises (the 1 year
                  period includes the required pre-dispute procedures set forth
                  above) and that any arbitration proceeding commenced after 1
                  year shall be forever barred.
                </p>
                <h3>e. Arbitration Location</h3>
                <p>
                  If the amount in controversy is $500 or less, then the
                  arbitration may be conducted by telephone or by written
                  submissions. Otherwise, the arbitration shall be conducted in
                  Fulton County, Georgia unless Unstarving Artists otherwise
                  agrees to arbitrate in another forum requested by you.
                </p>
                <h3>f. Organization, Rules and the Arbitrator</h3>
                <p>
                  We each agree that any and all Claims other than those
                  exempted under subsection “b” above shall be submitted to
                  final and binding confidential arbitration before a single
                  arbitrator of the American Arbitration Association (“AAA”).
                  Either party may commence the arbitration process by
                  submitting a written demand for arbitration with the AAA, and
                  providing a copy to the other party, within the time period
                  set forth in subsection “d” above. The arbitrator shall be
                  selected by agreement of the parties or, if the parties cannot
                  agree, chosen in accordance with Rules of the AAA. The
                  arbitration will be conducted in accordance with the
                  provisions of the AAA’s Commercial Dispute Resolutions
                  Procedures, Supplementary Procedures for Consumer-Related
                  Disputes, in effect at the time of submission of the demand
                  for arbitration. The AAA’S Rules are available at www.adr.org
                  or by calling 1-800-778-7879. The arbitrator shall have the
                  exclusive and sole authority to resolve any dispute relating
                  to the interpretation, construction, validity, applicability,
                  or enforceability of these Terms, the Privacy Policy, and this
                  arbitration provision. The arbitrator shall have the exclusive
                  and sole authority to determine whether any dispute is
                  arbitrable. The arbitrator shall have the exclusive and sole
                  authority to determine whether this arbitration agreement can
                  be enforced against a non-signatory to this agreement and
                  whether a non-signatory to this agreement can enforce this
                  provision against you or Unstarving Artists.
                </p>
                <h3>g. Fees</h3>
                <p>
                  Payment of all filing, administration and arbitrator fees will
                  be governed by the AAA’s Rules.
                </p>
                <h3>h. Governing Law and Award</h3>
                <p>
                  The arbitrator shall follow the substantive law of the State
                  of Georgia without regard to its conflicts of laws principles.
                  Any award rendered shall include a confidential written
                  opinion and shall be final, subject to appeal under the FAA.
                  Judgment on the award rendered by the arbitrator may be
                  entered in any court of competent jurisdiction.
                </p>
                <h3>i. Enforceability</h3>
                <p>
                  This provision survives termination of your account or
                  relationship with Unstarving Artists, bankruptcy, assignment,
                  or transfer. If the class action waiver is deemed
                  unenforceable (i.e., unenforceability would allow arbitration
                  to proceed as a class or representative action), then this
                  entire arbitration provision shall be rendered null and void
                  and shall not apply. If a portion of this arbitration
                  provision (other than the class action waiver) is deemed
                  unenforceable, the remaining portions of this arbitration
                  provision shall remain in full force and effect.
                </p>
                <h3>j. Miscellaneous</h3>
                <p>
                  Failure or any delay in enforcing this arbitration provision
                  in connection with any particular Claim will not constitute a
                  waiver of any rights to require arbitration at a later time or
                  in connection with any other Claims except all Claims must be
                  brought within the 1 year limitation period set forth above.
                  This provision is the entire arbitration agreement between you
                  and Unstarving Artists and shall not be modified except in
                  writing by Unstarving Artists.
                </p>
                <h3>k. Amendments</h3>
                <p>
                  Unstarving Artists reserves the right to amend this
                  arbitration provision at any time. Your continued use of the
                  Website, purchase of a product on or through the Website, or
                  use or attempted use of a Unstarving Artists product, is
                  affirmation of your consent to such changes. Should the
                  changes to this arbitration provision be material, Unstarving
                  Artists will provide you notice and an opportunity to opt-out.
                  Your continued use of the Website, purchase of a product on or
                  through the Website, or use or attempted use of a Unstarving
                  Artists product or service, is affirmation of your consent to
                  such material changes.
                </p>
                <p>
                  YOU UNDERSTAND AND AGREE TO HAVE ANY CLAIMS DECIDED
                  INDIVIDUALLY AND ONLY THROUGH BINDING, FINAL, AND CONFIDENTIAL
                  ARBITRATION. YOU HAVE THE RIGHT TO OPT-OUT OF THIS ARBITRATION
                  PROVISION WITHIN THIRTY (30) DAYS FROM THE DATE THAT YOU
                  PURCHASE, USE, OR ATTEMPT TO USE A PRODUCT PURCHASED ON OR
                  THROUGH THE WEBSITE (WHICHEVER COMES FIRST) BY WRITING TO US
                  AT UNSTARVING ARTISTS, ATTN: LEGAL DEPARTMENT, 309 E. Paces
                  Ferry Rd NE, Atlanta, GA 30305. FOR YOUR OPT-OUT TO BE
                  EFFECTIVE, YOU MUST SUBMIT A SIGNED WRITTEN NOTICE IDENTIFYING
                  ANY PRODUCT YOU PURCHASED, USED OR ATTEMPTED TO USE WITHIN THE
                  30 DAYS AND THE DATE YOU FIRST PURCHASED, USED OR ATTEMPTED TO
                  USE THE PRODUCT. IF MORE THAN THIRTY (30) DAYS HAVE PASSED,
                  YOU ARE NOT ELIGIBLE TO OPT OUT OF THIS PROVISION AND YOU MUST
                  PURSUE YOUR CLAIM THROUGH BINDING ARBITRATION AS SET FORTH IN
                  THIS AGREEMENT. SHOULD EITHER PARTY FILE AN ACTION CONTRARY TO
                  THIS PROVISION, THE OTHER PARTY MAY RECOVER ATTORNEY’S FEES
                  AND COSTS UP TO $1000.00.
                </p>
                <h2>15. Indemnification</h2>
                <p>
                  To the fullest extent permitted by law, you agree to
                  indemnify, defend, and hold harmless Unstarving Artists, its
                  affiliates (including without limitation all affiliated
                  professional entities), subsidiaries, and their directors,
                  officers, employees, contractors, licensors, suppliers,
                  representatives, proprietors, partners, shareholders,
                  servants, principals, agents, predecessors, successors,
                  assigns, accountants, and attorneys from and against any
                  claims, actions, losses, liabilities, damages, expenses,
                  demands, and costs of any kind, including, but not limited to,
                  reasonable attorneys’ fees, arising out of, resulting from, or
                  in any way connected with or related to (1) your breach of
                  these Terms, the documents they incorporate by reference, or
                  the Agreement; (2) your breach of any representations or
                  warranties in this Agreement; or (3) your violation of any law
                  or the rights of a third-party.
                </p>
                <h2>16. Third-Party Websites and Links</h2>
                <p>
                  Our Site may include materials from third-parties or links to
                  third-party websites. Unstarving Artists is not liable for any
                  third-party materials or websites. Please review carefully the
                  third-party’s policies and practices and make sure you
                  understand them before you engage in any transaction.
                  Complaints, claims, concerns, or questions regarding
                  third-party products should be directed to the third-party.
                </p>
                <h2>17. Testimonials, Reviews, and Other Submissions</h2>
                <p>
                  Unstarving Artists is pleased to hear from users and customers
                  and welcomes your comments regarding our services and
                  products. You agree that any testimonial or product review
                  that you provide Unstarving Artists is true and accurate in
                  all respects and does not infringe or interfere with the
                  intellectual property rights of any third party. You agree
                  that Unstarving Artists may use testimonials and/or
                  product/service reviews, in whole or in part, together with
                  the name and state/country of the person submitting it.
                  Testimonials may be used for any form of advertising relating
                  to Unstarving Artists’ products or services, in printed and
                  online media, as Unstarving Artists determines in its absolute
                  discretion. Testimonials represent the unique experience of
                  the customers submitting the testimonial, and do not
                  necessarily reflect the experience that you may have using our
                  products or services.
                </p>
                <p>
                  Anything that you submit or post to the Website and/or provide
                  us, including without limitation, photographs, testimonials,
                  ideas, know-how, techniques, questions, reviews, comments, and
                  suggestions (collectively, “User Submissions” or simply,
                  “Submissions”) is and will be treated as non-confidential and
                  nonproprietary, and we shall have the royalty-free, worldwide,
                  perpetual, irrevocable and transferable right to use, copy,
                  distribute, display, publish, perform, sell, lease, transmit,
                  adapt, and create derivative works from such Submissions by
                  any means and in any form, and to translate, modify,
                  reverse-engineer, disassemble, or decompile such Submissions.
                  You represent and warrant that you are the owner or have
                  sufficient rights to share the Submissions with us. All
                  Submissions shall automatically become our sole and exclusive
                  property and shall not be returned to you.
                </p>
                <p>
                  Additionally, Unstarving Artists reserves the right to correct
                  grammatical and typing errors, to shorten testimonials prior
                  to publication or use, and to review all testimonials prior to
                  publication or use. Unstarving Artists shall be under no
                  obligation to use any, or any part of, any testimonial or
                  product/service review submitted. If you submit a testimonial,
                  you are confirming that you have read, understood and agree to
                  these Terms. If you disagree with any part of these Terms, do
                  not submit a testimonial.
                </p>
                <h2>18. Electronic Communications</h2>
                <p>
                  You agree that we may communicate electronically with you and
                  that such communications, as well as notices, disclosures,
                  agreements, and other communications that we provide to you
                  electronically, are equivalent to communications in writing
                  and shall have the same force and effect as if they were in
                  writing and signed by the party sending the communication.
                </p>
                <h2>19. Assignment</h2>
                <p>
                  You may not assign any of your rights under these Terms, and
                  any such attempt will be null and void. Unstarving Artists and
                  its affiliates may, in their individual discretion, transfer,
                  without further consent or notification, all contractual
                  rights and obligations pursuant to these Terms if some or all
                  of Unstarving Artists’ business is transferred to another
                  entity by way of merger, sale of its assets or otherwise.
                </p>
                <h2>20. No Waiver</h2>
                <p>
                  No waiver by Unstarving Artists of any term or condition set
                  forth in these Terms shall be deemed a further or continuing
                  waiver of such term or condition or a waiver of any other term
                  or condition, and any failure by Unstarving Artists to assert
                  a right or provision under these Terms shall not constitute a
                  waiver of such right or provision.
                </p>
                <h2>21. No Agency Relationship</h2>
                <p>
                  No joint venture, partnership, employment, or agency
                  relationship exists between you and Unstarving Artists as a
                  result of your receipt of any Unstarving Artists product, your
                  use of any Unstarving Artists Service, or use of the Site.
                </p>
                <h2>22. Severability</h2>
                <p>
                  In the event that any provision of these Terms is determined
                  to be unlawful, void or unenforceable, such provision shall
                  nonetheless be enforceable to the fullest extent permitted by
                  applicable law, and the unenforceable portion shall be deemed
                  to be severed from these Terms. Such determination shall not
                  affect the validity and enforceability of any other remaining
                  provisions.
                </p>
                <h2>23. Termination</h2>
                <p>
                  In the event that we terminate this Agreement, any
                  representations, warranties, and other obligations made or
                  taken by you, shall survive the termination of this Agreement.
                </p>
                <h2>24. Entire Agreement</h2>
                <p>
                  These Terms, the Agreement, and any policies or operating
                  rules posted by us on the Website or in respect to the Website
                  constitutes the entire agreement and understanding between you
                  and Unstarving Artists, and supersedes and replaces any prior
                  or contemporaneous agreements. Any ambiguities in the
                  interpretation of these Terms or the Agreement shall not be
                  construed against the drafting party.
                </p>
                <h2>25. Questions or Additional Information</h2>
                <p>
                  If you have any questions regarding your account, subscription
                  services, or these Terms, please email
                  support@unstarvingartists.com for assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

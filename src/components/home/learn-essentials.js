import * as React from "react";
import { CheckIcon } from "@heroicons/react/outline";
import { Link } from "gatsby";
const features = [
  {
    name: "Business fundamentals",
    description:
      "Picking a niche, identifying desires, finding opportunities, market validation, and pricing.",
  },
  {
    name: "Collector experience",
    description:
      "Designing, delivering and improving a differentiated experience that collectors love.",
  },
  {
    name: "Marketing",
    description:
      "Getting your market's attention so you can speak with deep-pocketed collectors ready to buy.",
  },
  {
    name: "Sales",
    description:
      "Talking to prospects, ethical persuasion, handling objections, and selling your artwork on calls.",
  },
  {
    name: "Psychology & neuroscience",
    description:
      "Psychology, human behavior, habits, unhelpful beliefs, and how to rewire your brain for growth.",
  },
  {
    name: "Problem solving",
    description:
      "How to think clearly, make good decisions quickly, and see ten steps ahead with precision.",
  },
  {
    name: "Accounting, legal & tax",
    description:
      "Incorporating your art practice, structuring it efficiently, doing your books, legal contracts, tax.",
  },
  {
    name: "Social media",
    description:
      "Creating social media pages and funnels, all by yourself. Be better than the experts, get it for free!",
  },
  {
    name: "Lead generation",
    description:
      "Creating evergreen social media posts that generate real leads, scheduling and testing posts.",
  },
  {
    name: "Management & hiring",
    description:
      "How to hire art reps and apprentices, management, culture, performance tracking.",
  },
  {
    name: "Operations",
    description:
      "Seeing your art practice as a machine. Systemize, tune, and optimize it for efficiency.",
  },
  {
    name: "Scaling & automation",
    description:
      "How to scale from 0 collectors to $300k+ / year at breakneck speed with systems/automation.",
  },
];

export default function LearnEssentials() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Learn the essentials, overcome anything
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Travel farther, faster by standing on the shoulders of giants. We
            teach you everything you need to succeed as an artist today,
            tomorrow, in the future, and in the midst of any storm.
          </p>
        </div>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckIcon
                  className="absolute h-6 w-6 text-emerald-500"
                  aria-hidden="true"
                />
                <p className="ml-9 text-lg leading-6 font-medium text-gray-900">
                  {feature.name}
                </p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
        <div className="mt-10 text-center">
          <Link
            to="/methodology"
            className="text-base font-medium text-emerald-600"
          >
            {" "}
            Learn more about our methodology{" "}
            <span aria-hidden="true">&rarr;</span>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

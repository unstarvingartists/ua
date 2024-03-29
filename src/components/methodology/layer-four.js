import * as React from "react";
import { CheckIcon } from "@heroicons/react/outline";

import layerfour from "../../images/undraw_sculpting_-1-c9p.svg";

const features = [
  {
    name: "Business fundamentals",
    description:
      "Choosing a niche, identifying desires, finding opportunities, market validation, and pricing.",
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

export default function Component() {
  return (
    <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <svg
          className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
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
            height={784}
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Layer 4. Practice disciplines
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              Practice disciplines are specific branches of knowledge relating
              to art practice functions like: sales, marketing, service,
              operations, accounting, legal, support, and management.
            </p>
            <p className="mt-3 text-lg text-gray-500">
              Most online courses cover one discipline, this creates single
              skilled artists who get eaten alive when attempting to sell their
              artwork. We teach you multiple disciplines so that you can start
              and grow an art practice yourself, moving quickly, without hiring
              contractors or staff.
            </p>
            <p className="mt-3 text-lg text-gray-500">
              We create polymath "artist-entrepreneurs" that are
              multi-discipline and pack the firepower of 10 people in one.
              Imagine outproducing 10 people in 1/3rd the time. That's what we
              refer to as "full stack".
            </p>
            <p className="mt-3 text-lg text-gray-500">
              Below are some of the disciplines you'll learn in our programs:
            </p>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
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
                width={784}
                height={404}
                fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
              />
            </svg>
            <img
              className="relative mx-auto"
              width={490}
              height={285}
              src={layerfour}
              alt="Layer 4. Practice disciplines"
            />
          </div>
        </div>
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
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
          </div>
        </div>
      </div>
    </div>
  );
}

import * as React from "react";
import { CheckIcon } from "@heroicons/react/outline";

import layerthree from "../../images/undraw_creativity_wqmm.svg";

const features = [
  {
    name: "Pick a niche",
    description:
      "Find an area you are interested in, focus on it, and understand it better than anyone else.",
  },
  {
    name: "Meet a desire",
    description:
      "Identify a deep widespread desire your niche has and address it with your work.",
  },
  {
    name: "Work from the market backwards",
    description:
      "All ideas should emerge from a dialogue with the market, not your brain. Serve others first.",
  },
  {
    name: "Collector obsession",
    description:
      "Do what's best for your collector, because that is what's best for you, you just might not see it yet.",
  },
  {
    name: "High standards",
    description:
      "Don't settle for great. Set uncommonly high standards & expect them from everyone.",
  },
  {
    name: "Frugality",
    description:
      "Do more with less. Constraints yield resourcefulness, independence, and invention.",
  },
  {
    name: "Relentless grit",
    description:
      "Some people choose to work harder, smarter, or longer. We choose all three at once.",
  },
  {
    name: "Laser focus",
    description:
      "There's nothing so useless as doing efficiently that which should not be done at all.",
  },
  {
    name: "Go all in",
    description:
      "Whether you think you can or can't—either way you're right. Decide and commit. Know you can and will do it.",
  },
  {
    name: "Value > fame",
    description:
      "Art is a game of solving problems, creating value, and getting paid. Fame is not a business model.",
  },
  {
    name: "Think scientifically",
    description:
      "Use data, test, and iterate. Channel your inner scientist and reason from first principles.",
  },
  {
    name: "Competition is for losers",
    description:
      "Collectors like differentiation. If you blindly copy everyone else, you're dead.",
  },
  {
    name: "Systemize and measure everything",
    description:
      "See your art practice as a system. Inputs, processes, outputs, feedback, and more.",
  },
  {
    name: "Cash over profits",
    description:
      "Cash today is more important than potential profits tomorrow. Seek to grow cash, not potential profits.",
  },
  {
    name: "It's all about the long-term",
    description:
      "Sacrifice in the short-term for sustainable long-term success. It's a marathon—not a sprint!",
  },
];

export default function Component() {
  return (
    <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <svg
          className="hidden lg:block absolute transform -translate-x-1/2 -translate-y-1/4"
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
              height={350}
              src={layerthree}
              alt="Layer 3. Practice principles"
            />
          </div>
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Layer 3. Practice principles
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              Practice principles are fundamental beliefs, rules, or values that
              represent what is desirable and positive for the art practice and
              the artist within it. Practice principles together form a
              philosophy.
            </p>
            <p className="mt-3 text-lg text-gray-500">
              We think differently about the art profession, we see it as
              analytical, quantitative, scientific and more "engineering" than
              "charismatic". We have a bias towards value and results, not
              social popularity.
            </p>
            <p className="mt-3 text-lg text-gray-500">
              We teach our students our idiosyncratic practice philosophy and
              allow them to adopt it as their own or edit it so that its more
              personally aligned to their own beliefs and philosophy.
            </p>
            <p className="mt-3 text-lg text-gray-500">
              Unstarving Artists' practice philosophy is built on 15 principles:
            </p>
          </div>
        </div>
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
            <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt>
                    <CheckIcon
                      className="absolute h-6 w-6 text-green-500"
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

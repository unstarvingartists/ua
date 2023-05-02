import * as React from "react";
import { CheckIcon } from "@heroicons/react/outline";

import layerfive from "../../images/undraw_conceptual_idea_xw7k.svg";

const features = [
  {
    name: "Discovering a niche you're interested in",
    description:
      "Instructions on how to choose a niche that aligns with your talents & interests.",
  },
  {
    name: "Conducting market research",
    description:
      "Instructions that walkthrough researching your niche online, in-person, and via calls.",
  },
  {
    name: "Naming & incorporating your practice",
    description:
      "Instructions that show you how to incorporate your art practice and set up shop.",
  },
  {
    name: "How to get clients organically",
    description:
      "Instructions that show you how to get clients with FB, IG, LinkedIn, cold email, and more.",
  },
  {
    name: "Setting up social media",
    description:
      "Instructions that show you how to set up your social media presence quickly and for free.",
  },
  {
    name: "Closing deals with a single phone call",
    description:
      "Instructions that show you how to turn prospects into clients with a 45-min script.",
  },
  {
    name: "Creating funnels that convert",
    description:
      "Step-by-step instructions, templates, and workflows to create social media funnels.",
  },
  {
    name: "Creating Instagram posts",
    description:
      "Instructions, templates, and tools to create world class IG posts that attract deep-pocketed collectors.",
  },
  {
    name: "Hiring and managing contractors",
    description:
      "Instructions, templates, interview questions, software and systems to hire/manage a team.",
  },
  {
    name: "Sophisticated business automation",
    description:
      "Instructions, downloadable templates, and software to create time saving automations.",
  },
  {
    name: "Accounting, cashflow and finance",
    description:
      "Instructions, tools, software and systems to do your books, maximize profits, know your KPI's.",
  },
  {
    name: "Structuring & scaling your practice",
    description:
      "Instructions, org charts, hiring strategies and management systems to rapidly grow a team.",
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
              height={328}
              src={layerfive}
              alt="Layer 5. Practice processes"
            />
          </div>
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Layer 5. Practice processes
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              Practice processes are sets of actions or steps taken in order to
              achieve a particular result. Every art practice discipline has
              multiple practice processes that sit on top. Think of them as
              step-by-step instructions, like a recipe for making your favorite
              pizza, except for anything!
            </p>
            <p className="mt-3 text-lg text-gray-500">
              Example: Marketing is a discipline where you understand the theory
              of how it works. But to actually market your art practice
              effectively, you need to know the step-by-step instructions of
              creating posts, publishing them, measuring KPI's, troubleshooting
              errors, etc.
            </p>
            <p className="mt-3 text-lg text-gray-500">
              Most online courses teach you high level theories with vague
              instructions on how to execute the theories in the real world.
              This leaves students clueless about how to execute what they know
              and actually get results.
            </p>
            <p className="mt-3 text-lg text-gray-500">
              We teach our students the big picture, the details, and every
              layer in between. Our programs show you how to start and grow a
              profitable art practice with instructions that go as detailed as
              what buttons to click and what works to write. (seriously... it's
              wild).
            </p>
            <p className="mt-3 text-lg text-gray-500">
              Below are some of the processes you'll learn in our programs:
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
                      className="absolute h-6 w-6 text-blue-500"
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

import * as React from "react";
import {
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
  CheckIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Problem solving",
    description:
      "Defining the problem, using scientific method to hypothesize solutions, testing and iteration.",
  },
  {
    name: "Critical thinking",
    description:
      "Questioning everything, thinking objectively and independently to form judgements.",
  },
  {
    name: "Prioritization",
    description:
      "Gathering and arranging items or activities in order of importance relative to each other.",
  },
  {
    name: "Planning and scheduling",
    description:
      "Thinking long-term, defining goals, reverse engineering, chunking, scheduling, delegating.",
  },
  {
    name: "Decision making",
    description:
      "Rapidly gathering relevant information, making tradeoffs and deciding what needs to be done.",
  },
  {
    name: "Structuring and organizing",
    description:
      "Categorizing, defining, labeling, structuring and optimizing everything for optimal efficiency.",
  },
  {
    name: "Resource allocation",
    description:
      "Allocating time, focus and energy to important things while ignoring nonimportant things.",
  },
  {
    name: "Perception",
    description:
      "Looking at things from different perspectives and consolidating based on all points of view.",
  },
  {
    name: "Analysis and understanding",
    description:
      "Detailed examination of the elements or structure of something to form understanding.",
  },
  {
    name: "Visual mapping",
    description:
      "Mental visualization of information by identifying objects and interconnections.",
  },
  {
    name: "Systems thinking",
    description:
      "Holistic understanding of systems, inputs, processes, outputs, feedback and environment.",
  },
  {
    name: "Divergent and convergent thinking",
    description:
      "Thinking of many possible paths and collapsing them to decide on the best single path.",
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
              Layer 2. Mental cognition
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              Mental cognition is the second layer, it's responsible for problem
              solving, critical thinking, planning, scheduling and prioritizing.
            </p>
            <p className="mt-3 text-lg text-gray-500">
              It's the "executive" function that weighs all possible actions to
              determine their contribution towards goals and then prioritizes
              them for execution in the logical order of importance.
            </p>
            <p className="mt-3 text-lg text-gray-500">
              We enhance mental cognition in our students minds so they can
              think for themselves and troubleshoot without instructions.
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
              src="https://tailwindui.com/img/features/feature-example-1.png"
              alt=""
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

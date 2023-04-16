import * as React from "react";
import { CheckIcon } from "@heroicons/react/outline";

import layertwo from "../../images/undraw_solution_mindset_re_57bf.svg";

const features = [
  {
    name: "Problem solving",
    description:
      "Getting clear on the root problem, hypothesizing solutions, prioritize ones to test, and iterating.",
  },
  {
    name: "Critical thinking",
    description:
      "Questioning assumptions, reasoning from first principles, and objectively forming judgements.",
  },
  {
    name: "Prioritization",
    description:
      "Knowing what activities to do in what order and how much relative emphasis to place on each activity.",
  },
  {
    name: "Planning and scheduling",
    description:
      "Defining long-term goals, reverse engineering them into milestones, scheduling, batching, and delegating.",
  },
  {
    name: "Decision making",
    description:
      "Rapidly collecting relevant information, weighing trade-offs, and deciding what to do.",
  },
  {
    name: "Efficient organization",
    description:
      "Bucketing, defining, naming, organizing, and tuning things for optimum efficiency.",
  },
  {
    name: "Resource allocation",
    description:
      "Devoting time, focus, and energy to critical things while ignore unessential activities.",
  },
  {
    name: "Perception",
    description:
      "Looking at something from all angles and synthesizing based on multiple points of view.",
  },
  {
    name: "Analysis and understanding",
    description:
      "Breaking something down into its constituent elements to gain a deeper understanding.",
  },
  {
    name: "Mental mapping",
    description:
      "Internalizing principles by visualizing related concepts and their interconnections.",
  },
  {
    name: "Systems thinking",
    description:
      "Grasping the interplay of inputs, outputs, processes, feedback, and the environment within a system.",
  },
  {
    name: "Divergent and convergent thinking",
    description:
      "Exploring many possible paths and then selecting the single best one to walk down.",
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
              Mental cognition, the second layer, is responsible for creative
              problem solving, critical thinking, planning, and prioritization.
            </p>
            <p className="mt-3 text-lg text-gray-500">
              It's the higher-level "executive" function that selects and
              successfully monitors behaviors that facilitate the attainment of
              chosen goals.
            </p>
            <p className="mt-3 text-lg text-gray-500">
              We bolster mental cognition in our students' minds so they can
              think for themselves and troubleshoot more and more without
              hand-holding.
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
              height={362}
              src={layertwo}
              alt="Layer 2. Mental cognition"
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

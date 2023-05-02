import * as React from "react";
import { CheckIcon } from "@heroicons/react/outline";

import layerone from "../../images/undraw_work_in_progress_uhmv.svg";

const features = [
  {
    name: "Taking ownership",
    description:
      "Realizing that your situation in life is nobody's doing but your own. You create it.",
  },
  {
    name: "Self awareness",
    description:
      "Cultivating awareness of your self-image, emotions, biases, thought and behavior patterns.",
  },
  {
    name: "Forging your identity",
    description:
      "Getting clear on your identity, designing a more successful one, and growing into it.",
  },
  {
    name: "Making the unconscious conscious",
    description:
      "Knowing the hidden reasons behind your undesired behavior and decisions.",
  },
  {
    name: "Hyper-aware pattern recognition",
    description:
      "Observing your own thought and behavior patterns as they fire and before you act.",
  },
  {
    name: "Rebuilding belief systems",
    description:
      "Auditing everything you hold to be true and rebuilding a worldview from the ground up.",
  },
  {
    name: "Limbic system awareness",
    description:
      "Becoming aware of your emotional impulses and desires and how to override them.",
  },
  {
    name: "Feedback loop intervention",
    description:
      "Grasping the leveraged nature of consciousness. Riding the positive up, and intercepting the negative on the way down.",
  },
  {
    name: "Transcending the linear",
    description:
      "Appreciating the flaws of linear thinking. Graduating to non-linear thinking.",
  },
  {
    name: "Laser-like focus",
    description:
      "Quieting the noise to spend extended periods of time in deep concentration at will.",
  },
  {
    name: "Self-discipline & impulse control",
    description:
      'Impulse control, planning, and "stick-to-itiveness" so you never waver on your goals.',
  },
  {
    name: "Machine-like consistency",
    description:
      "Building extraordinary grit to work as much and as long as you want, year after year.",
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
              height={348}
              src={layerone}
              alt="Layer 1. Mental awareness"
            />
          </div>
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Layer 1. Mental awareness
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              Mental awareness kickstarts everything. It's what gives you your
              sense of identity, self-image, beliefs, awareness of your
              emotions, thoughts, actions, and behaviors.
            </p>
            <p className="mt-3 text-lg text-gray-500">
              It's the base primal function that allows you to identify
              patterns, think clearly, catch yourself, avoid delusions, and your
              capability for self-control and self-discipline when emotions stir
              inside you.
            </p>
            <p className="mt-3 text-lg text-gray-500">
              We begin here to flush out delusions and unhelpful beliefs,
              rebuild identities, and make our students more conscious of
              reality.
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

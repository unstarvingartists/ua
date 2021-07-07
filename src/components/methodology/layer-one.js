import * as React from "react";
import {
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
  CheckIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Taking ownership",
    description:
      "Understanding that your life situation is nobody's doing but your own. You create it.",
  },
  {
    name: "Self awareness",
    description:
      "Becoming aware of who you are, psychology, selfimage, biases, interests, behavior patterns.",
  },
  {
    name: "Changing your identity",
    description:
      "Taking a baseline of your current identity, designing a new one and growing into it.",
  },
  {
    name: "Making the unconscious conscious",
    description:
      "Understanding the hidden reasons that drive your unwanted behavior and decisions.",
  },
  {
    name: "Hyper-aware pattern recognition",
    description:
      "Catching your own thought and behavior patterns as they fire and before you respond.",
  },
  {
    name: "Rebuilding belief systems",
    description:
      "Taking an audit of everything you believe to be true and rebuilding it from the ground up.",
  },
  {
    name: "Limbic system awareness",
    description:
      "Becoming aware of your emotions, impulses, desires, motivations and how to change them.",
  },
  {
    name: "Feedback loop intervention",
    description:
      "Understanding the exponential function of consciousness. Hacking it up catching it down.",
  },
  {
    name: "Transcending binary logic",
    description:
      "Understanding the flaws and limitations of duality, binary logic. How to think non-linear.",
  },
  {
    name: "Laser-like focus",
    description:
      "How to shut out the noise and concentrate intensely for extended periods of time at will.",
  },
  {
    name: "Self-discipline & impulse control",
    description:
      "How to control your impulses, stick to plans, see things through and never waver on goals.",
  },
  {
    name: "Machine-like consistency",
    description:
      "Developing extreme grit so that you can work 12-hour days, 6-day weeks, for years on end.",
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
              src="https://tailwindui.com/img/features/feature-example-1.png"
              alt=""
            />
          </div>
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Layer 1. Mental awareness
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              Mental awareness is the boot loader for everything. It's
              responsible for your identity, self image, belief systems,
              awareness of your own actions, thoughts and behavior.
            </p>
            <p className="mt-3 text-lg text-gray-500">
              It's the "awake and alert" function that allows you to catch
              things, identify patterns, think rationally and avoid delusions,
              and your ability to self control and self discipline when emotions
              kick in.
            </p>
            <p className="mt-3 text-lg text-gray-500">
              We start our work here by flushing out delusions, rebuilding
              identities and making people more conscious of reality.
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

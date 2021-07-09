import * as React from "react";
/* This example requires Tailwind CSS v2.0+ */
import {
  ShieldCheckIcon,
  EyeIcon,
  LightBulbIcon,
  ThumbUpIcon,
  HeartIcon,
  LightningBoltIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Positive",
    description:
      "Assume good intentions. Always seek out the charitable and open-minded way to view things.",
    icon: ThumbUpIcon,
  },
  {
    name: "Supportive",
    description:
      "We win the battle for our clients by protecting and taking care of each other.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Self-Starting",
    description:
      "Instinctively pursuing and solving hard problems is where our success comes from.",
    icon: LightBulbIcon,
  },
  {
    name: "Make The Experience Share Worthy",
    description:
      'In all things consider the impression the client will have and think, "Will this WOW them so much that they HAVE to tell someone about it".',
    icon: HeartIcon,
  },
  {
    name: "Brutal Data-Driven Truth",
    description:
      "Trust in accurate data. In our work, we must never operate off anything but the 110% accurate truth.",
    icon: LightningBoltIcon,
  },
  {
    name: "Eagle-Eyed Long-Term Focus",
    description:
      "Have courage to focus on the long-term mission. Everything else will follow.",
    icon: EyeIcon,
  },
];

export default function Component() {
  return (
    <div className="bg-gray-50 overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <svg
          className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
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
            fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)"
          />
        </svg>

        <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our team values
            </h2>
          </div>
          <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

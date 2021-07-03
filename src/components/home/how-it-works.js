import * as React from "react";
import { Link } from "gatsby";
import {
  ChatAlt2Icon,
  MapIcon,
  UserGroupIcon,
  AdjustmentsIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Proven Process",
    description:
      "We turned the guesswork of starting/growing a business into a science. Follow practical step-by-step instructions that are proven to work and track your progress using reliable metrics.",
    icon: MapIcon,
  },
  {
    name: "Mental Reprogramming",
    description:
      "We invented a new way to think about and view the world we live in. Discover who you are, interests, biases, habits, behavior patterns. Reprogram your brain for high performance.",
    icon: AdjustmentsIcon,
  },
  {
    name: "Entrepreneur Community",
    description:
      "It's hard to change your life surrounded by the same people. Join an active community of entrepreneurs, collaborate, get help, practice sales calls, make friends and have fun.",
    icon: UserGroupIcon,
  },
  {
    name: "Expert mentorship",
    description:
      "No matter how good the training is, you'll always have questions. Get 24/7 access to millionaire experts in our Facebook group, weekly livestream Q&A's and email.",
    icon: ChatAlt2Icon,
  },
];

export default function HowItWorks() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Our Program
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Here's how it works
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Unstarving Artists provides you with everything you need to have a
            successful art practice. No lecturing — we provide an environment
            and building blocks so you can build and play.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/methodology"
            className="text-base font-medium text-blue-600"
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

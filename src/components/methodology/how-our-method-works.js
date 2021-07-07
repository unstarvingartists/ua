import * as React from "react";
import {
  RefreshIcon,
  SunIcon,
  LightBulbIcon,
  GlobeIcon,
  FlagIcon,
  CubeIcon,
} from "@heroicons/react/outline";
import { Link } from "gatsby";

const features = [
  {
    name: "Environment",
    description:
      "A students ability to grow is heavily influenced by their environment. We provide the ultimate learning environment with online community, accountability, live Q&A's and mentorship.",
    icon: SunIcon,
  },
  {
    name: "Building blocks",
    description:
      "Students are unique and creative, so instead of killing that part of them (like most), we provide them with building blocks of information and let them arrange them anyway they like!",
    icon: CubeIcon,
  },
  {
    name: "Mental reprogramming",
    description:
      "The #1 killer of education is psychological, not logical. For students to learn and evolve, we must reprogram their minds to enhance awareness, cognition and remove delusions.",
    icon: LightBulbIcon,
  },
  {
    name: "Real-world application",
    description:
      'In theory, theory and practice are the same. In practice, they are not. We cover the theory, then instantly apply it in the real world to see what happens. This creates "thinker doers".',
    icon: GlobeIcon,
  },
  {
    name: "Real-world goals",
    description:
      "Certificates and degrees are abstractions that don't reflect reality and give false entitlement. Our students don't get certificates, they aim for, optimize and achieve the real-world goal.",
    icon: FlagIcon,
  },
  {
    name: "Real-world feedback",
    description:
      "Learning requires feedback so students can measure progress and iterate actions to improve. Our students get feedback from the market, not quizzes, tests or assignments.",
    icon: RefreshIcon,
  },
];

export default function Component() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Our Approach
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            How our method works
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Traditional education systems produce cookie-cutter humans with no
            souls or uniqueness. We provide students with an environment and
            building blocks — then we let emergence happen.
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
            to="https://go.unstarvingartists.org/opt-in"
            className="text-base font-medium text-blue-600"
          >
            {" "}
            See how it works for yourself <span aria-hidden="true">
              &rarr;
            </span>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

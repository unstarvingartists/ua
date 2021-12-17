import * as React from "react";
import { Link } from "gatsby";
import {
  RefreshIcon,
  SunIcon,
  LightBulbIcon,
  GlobeIcon,
  FlagIcon,
  CubeIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "Environment",
    description:
      "A student's ability to grow is heavily affected by their environment. We provide the optimal learning environment with positive supportive community, accountability, live Q&As, and expert mentorship.",
    icon: SunIcon,
  },
  {
    name: "Building blocks",
    description:
      'Each student is unique and creative. Instead of killing that part of them, like most educators do, we provide them with knowledge "building blocks" that they can then arrange anyway they choose!',
    icon: CubeIcon,
  },
  {
    name: "Mental reprogramming",
    description:
      "The top stumbling blocks for students are psychological, not practical. For students to learn and grow, we must retool their minds for enhanced awareness, self-esteem, cognition, and the removal of unhelpful beliefs.",
    icon: LightBulbIcon,
  },
  {
    name: "Real-world application",
    description:
      'In theory, students just need theory. In practice, students need practice too. We breakdown the theory, then have students apply it right away in the real world for feedback. This creates "thoughtful action takers".',
    icon: GlobeIcon,
  },
  {
    name: "Real-world goals",
    description:
      "Degrees and certificates are forms of recognition that don't reflect reality and lead to a false sense of entitlement. Our students don't get certificates. They focus on and optimize for real-world goals.",
    icon: FlagIcon,
  },
  {
    name: "Real-world feedback",
    description:
      "Students need feedback to measure their progress and improve their activities. Our students receive genuine actionable feedback from the market, not from artifical quizzes, tests, or assignments.",
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
            Traditional education systems produce cookie-cutter people with no
            creativity or critical thinking. We provide students with a hands-on
            environment and building blocks—then we let emergence happen.
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
          <a
            href="https://go.unstarvingartists.com/training"
            className="text-base font-medium text-blue-600"
          >
            {" "}
            See how it works for yourself <span aria-hidden="true">
              &rarr;
            </span>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

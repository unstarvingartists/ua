import * as React from "react";
import { Link } from "gatsby";
import { StarIcon } from "@heroicons/react/solid";

const navigation = [
  { name: "Our story", href: "/story" },
  { name: "Our philosophy", href: "/philosophy" },
  { name: "Our company", href: "/company" },
];

export default function Component({ children }) {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        >
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
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
              height={384}
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
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
              height={384}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
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
              height={384}
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8">
        {children}
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="sm:grid sm:grid-cols-6 sm:gap-4">
            <div>
              <ul className="mt-4 space-y-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-base text-gray-500 hover:text-gray-900"
                      activeClassName="text-gray-700 underline font-semibold"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sm:col-start-2 sm:col-span-4">
              <div className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto">
                <blockquote>
                  <p>
                    We believe the education and employment systems in today's
                    world are fundamentally flawed and need fixing. The
                    traditional path of school, college and corporate employment
                    leaves people in debt, ill-equipped and soulless.
                  </p>
                  <p>
                    Through Unstarving Artists our mission is to send the
                    elevator back down and help everyday people start and grow
                    wildly profitable art practices and live lives of freedom.
                    Our students have made over $12,000,000 and we're just
                    getting started.
                  </p>
                </blockquote>
              </div>
              <div className="text-lg max-w-prose mx-auto pt-4">
                <h1>
                  <span className="block text-base text-center text-blue-600 font-semibold tracking-wide uppercase">
                    What Drives Us
                  </span>
                  <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Our Core Values
                  </span>
                </h1>
                <p className="mt-8 text-xl text-gray-500 leading-8">
                  Core values are the fundamental beliefs that we operates from
                  at Unstarving Artists. These guiding principles ensure we're
                  on the right path and achieving our mission.
                </p>
              </div>
              <div className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto">
                <ol>
                  <li>
                    We believe that people are powerful beyond measure and can
                    live the lives of their dreams. The problem is nobody ever
                    taught them how the world works and how money is made
                    outside of employment.
                  </li>
                  <li>
                    We believe that knowledge is power and the only gap between
                    the rich and the poor is the access to the right information
                    + the mental paradigm to perceive it.
                  </li>
                  <li>
                    We believe that the traditional path of education and
                    employment is fundamentally wrong and that we are here on
                    the face of this earth to fix it.
                  </li>
                  <li>
                    We believe that we have the best training programs on the
                    planet for helping everyday people start their own art
                    practice, make money and take the steering wheel of their
                    own fate.
                  </li>
                  <li>
                    We believe in questioning the unquestioned and holding
                    nothing sacred in pursuit of the objective truth.
                  </li>
                  <li>
                    We believe less is more and focus is devastatingly powerful.
                    In the modern day it’s more about what you ignore rather
                    than what you pay attention to.
                  </li>
                </ol>
                <h2>Our client success is our success</h2>
                <p>
                  Our marketing plan is profoundly simple: Get our clients life
                  changing results and the rest takes care of itself.
                </p>
                <p>
                  At Unstarving Artists you won’t hear about any gurus or see
                  any photos of people in Lamborghinis. We dedicate our time and
                  effort to helping our clients and we let their results speak
                  for us.
                </p>
                <figure>
                  <img
                    className="w-full rounded-lg"
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
                    alt=""
                    width={1310}
                    height={873}
                  />
                  <figcaption>
                    Sagittis scelerisque nulla cursus in enim consectetur quam.
                  </figcaption>
                </figure>
              </div>
              <div className="mt-10 text-center">
                <div className="inline-flex rounded-md shadow">
                  <Link
                    to="https://go.unstarvingartists.org/opt-in"
                    className="px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    {" "}
                    Join the revolution <span aria-hidden="true">
                      &rarr;
                    </span>{" "}
                  </Link>
                </div>
                <div className="mt-4 mb-1">
                  <div className="inline-flex items-center">
                    <div className="flex-shrink-0 flex mr-2">
                      <StarIcon
                        className="h-6 w-6 text-yellow-400"
                        aria-hidden="true"
                      />
                      <StarIcon
                        className="h-6 w-6 text-yellow-400"
                        aria-hidden="true"
                      />
                      <StarIcon
                        className="h-6 w-6 text-yellow-400"
                        aria-hidden="true"
                      />
                      <StarIcon
                        className="h-6 w-6 text-yellow-400"
                        aria-hidden="true"
                      />
                      <StarIcon
                        className="h-6 w-6 text-yellow-400"
                        aria-hidden="true"
                      />
                    </div>
                    <Link
                      to="/stories"
                      className="text-base font-medium text-blue-600"
                    >
                      {" "}
                      4.9 stars 36 student stories
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

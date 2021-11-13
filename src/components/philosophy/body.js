import * as React from "react";
import { Link } from "gatsby";
import { StarIcon } from "@heroicons/react/solid";
import { StaticImage } from "gatsby-plugin-image";

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
                    leaves people in debt, ill-equipped and lacking purpose.
                  </p>
                  <p>
                    Through Unstarving Artists our mission is to send the
                    elevator back down and help everyday people start and grow
                    wildly profitable art practices and live lives of freedom.
                    Our students have made over $12,000,000. We're just getting
                    started.
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
                    We believe that people are incredibly powerful and can live
                    the lives of their dreams. The problem is nobody ever taught
                    them how the world works and how incomes are made outside of
                    employment.
                  </li>
                  <li>
                    We believe that knowledge is power. The only gap between
                    those who are rich and those who are poor is access to the
                    right knowledge and having an effective mental paradigm to
                    perceive the world.
                  </li>
                  <li>
                    We believe that the traditional path of education is
                    fundamentally flawed and breaking down more and more each
                    year. We believe we're here on earth to offer a better way.
                  </li>
                  <li>
                    We believe that we have the world's best training programs
                    for helping everyday people start their own art practice,
                    earn an income from their artwork, and take in hand the
                    steering wheel of their own destiny.
                  </li>
                  <li>
                    We believe in the pursuit of the objective truth,
                    questioning the unquestioned, and holding nothing sacred.
                  </li>
                  <li>
                    We believe less is more and that focus is extraordinarily
                    powerful. In a world of information abundance, turning out
                    the irrelevant noise is more and more important.
                  </li>
                </ol>
                <h2>Our client success is our success</h2>
                <p>
                  The way we get the word out about what we do is profoundly
                  simple: get our clients life changing results and the rest
                  will take care of itself.
                </p>
                <p>
                  At Unstarving Artists, you won't find any gurus or see photos
                  of people posing in Lamborghinis or private jets. We believe
                  our efforts are best served helping our clients and then
                  letting their results speak for us. We'd love to see you be
                  our next success story.
                </p>
                <figure>
                  <StaticImage
                    className="w-full rounded-lg"
                    imgClassName="w-full rounded-lg"
                    src="../../images/harry-6.jpg"
                    alt="Harry"
                    width={736}
                  />
                  <figcaption>Our client success is our success.</figcaption>
                </figure>
              </div>
              <div className="mt-10 text-center">
                <div className="inline-flex rounded-md shadow">
                  <Link
                    to="/training"
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
                      to="/reviews"
                      className="text-base font-medium text-blue-600"
                    >
                      {" "}
                      4.9 stars 32 student reviews
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

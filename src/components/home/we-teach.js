import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function Component() {
  return (
    <div className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
        <div className="text-base max-w-prose mx-auto lg:max-w-none">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            There Is No Magic Pill
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            We teach the full stack
          </p>
        </div>
        <div className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
          <p className="text-lg text-gray-500">
            Most courses you see out there teach a specific secret "magic pill"
            like Instagram, Etsy, or Shopify. This creates clueless artists who
            don’t understand the whole picture.
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
          <div className="relative z-10">
            <div className="prose prose-blue text-gray-500 mx-auto lg:max-w-none">
              <p>
                To build a successful art practice, you must embrace the “full
                stack”—five connected layers of fundamental principles that
                build on top of each other.
              </p>

              <ol>
                <li>
                  <strong>Mental awareness</strong> — Identity, purpose,
                  discipline, & beliefs
                </li>
                <li>
                  <strong>Mental cognition</strong> — Focus, planning,
                  prioritization, & problem solving
                </li>
                <li>
                  <strong>Practice principles</strong> — Frameworks, concepts, &
                  mental models
                </li>
                <li>
                  <strong>Practice disciplines</strong> — Strategy, service,
                  marketing, & sales
                </li>
                <li>
                  <strong>Practice processes</strong> — Tools, systems,
                  workflows, & metrics
                </li>
              </ol>
            </div>
            <div className="mt-10">
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
          <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
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
                fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
              />
            </svg>
            <blockquote className="relative bg-white rounded-lg shadow-lg">
              <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                <StaticImage
                  src="../../images/oliver-logo.png"
                  alt="Oliver Hojas Logo"
                  width={32}
                />
                <div className="relative text-lg text-gray-700 font-medium mt-8">
                  <svg
                    className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative">
                    Within 30 days, I sold a painting for €3,800—the most I had
                    ever sold my work for. In total I sold €25,800 in my first
                    60 days. If you want to make more sales you need a mentor
                    one or two steps ahead of you. I would 100% recommend Harry
                    and I look forward to us working together for a long time.
                  </p>
                </div>
              </div>
              <cite className="relative flex items-center sm:items-start bg-blue-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
                <div className="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2">
                  <StaticImage
                    className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-blue-300"
                    src="../../images/oliver.jpeg"
                    alt="Oliver Hojas"
                    width={80}
                  />
                </div>
                <span className="relative ml-4 text-blue-300 font-semibold leading-6 sm:ml-24 sm:pl-1">
                  <p className="text-white font-semibold sm:inline">
                    Oliver Hojas
                  </p>{" "}
                  <p className="sm:inline">Abstract Artist</p>
                </span>
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}

import * as React from "react";
import { UserGroupIcon } from "@heroicons/react/outline";
import { StaticImage } from "gatsby-plugin-image";

export default function Component() {
  return (
    <div className="relative bg-white">
      <div className="h-56 bg-blue-600 sm:h-72 lg:absolute lg:left-0 lg:h-full lg:w-1/2">
        <StaticImage
          width={1280}
          className="w-full h-full object-cover"
          src="../../images/careers-benefits.jpg"
          alt="Team Benefits"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:py-16">
        <div className="max-w-2xl mx-auto lg:max-w-none lg:mr-0 lg:ml-auto lg:w-1/2 lg:pl-10">
          <div>
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
              <UserGroupIcon className="h-6 w-6" aria-hidden="true" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Join the team
          </h2>
          <ul className="mt-6 text-lg text-gray-500">
            <li>- 100% remote company</li>
            <li>
              - Growing fast and working with some of the biggest artists online
            </li>
            <li>
              - Results oriented work environment (ROWE): aka as long as you get
              results you make the rules and work how you want.
            </li>
          </ul>
          <div className="mt-8 overflow-hidden">
            <dl className="-mx-8 -mt-8 flex flex-wrap">
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">
                  Artists Reached
                </dt>
                <dd className="order-1 text-2xl font-extrabold text-blue-600 sm:text-3xl">
                  1,000's
                </dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">
                  Happy Clients
                </dt>
                <dd className="order-1 text-2xl font-extrabold text-blue-600 sm:text-3xl">
                  300+
                </dd>
              </div>
              <div className="flex flex-col px-8 pt-8">
                <dt className="order-2 text-base font-medium text-gray-500">
                  Room For Growth
                </dt>
                <dd className="order-1 text-2xl font-extrabold text-blue-600 sm:text-3xl">
                  Unmatched
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

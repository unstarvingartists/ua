import * as React from "react";
import { Link } from "gatsby";

export default function Example() {
  return (
    <div className="bg-indigo-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-blue-600">
            Start your free trial today.
          </span>
        </h2>
        <div className="mt-8 flex">
          <div className="inline-flex rounded-md shadow">
            <Link
              to="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Get started
            </Link>
          </div>
          <div className="ml-3 inline-flex">
            <Link
              to="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

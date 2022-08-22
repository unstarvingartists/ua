import * as React from "react";
import { Link } from "gatsby";

export default function Component() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to earn more from your art?</span>
          <span className="block">First, see how it works.</span>
          <span className="block">Then, apply to see if you qualify.</span>
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <a
              href="https://join.unstarvingartists.com/workshop"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              See How It Works
            </a>
          </div>
          <div className="ml-3 inline-flex">
            <Link
              to="/apply-now"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

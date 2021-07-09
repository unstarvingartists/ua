import * as React from "react";
import { Link } from "gatsby";
import image from "../../images/george-washington-delaware-1851.jpeg";

export default function Component({ children }) {
  return (
    <div className="bg-white">
      <div className="relative pt-6">
        {children}

        <main className="mt-6 sm:mt-10">
          <div>
            <div className="relative">
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
              <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                  <div className="absolute inset-0">
                    <img
                      className="h-full w-full object-cover"
                      src={image}
                      alt="George Washington Crossing The Delaware"
                    />
                    <div className="absolute inset-0 bg-blue-700 mix-blend-multiply" />
                  </div>
                  <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                      <span className="block text-white">
                        Luck Is What Happens When
                      </span>
                      <span className="block text-blue-200">
                        Preparation Meets Opportunity
                      </span>
                    </h1>
                    <p className="mt-6 max-w-lg mx-auto text-center text-xl text-blue-200 sm:max-w-3xl">
                      Success isn't born, it's made. To us, success is a
                      science. We don't believe in luck, fate or magic — only
                      cause & effect. Our method focuses on the things with
                      "causality", not whatever is in vogue. We follow results
                      and data, not the crowd.
                    </p>
                    <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                      <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                        <a
                          href="https://go.unstarvingartists.org/opt-in"
                          className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-gray-50 hover:bg-blue-50 sm:px-8"
                        >
                          See How It Works
                        </a>
                        <Link
                          to="/apply"
                          className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                        >
                          Apply Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Logo cloud */}
          <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"></div>
          </div>
        </main>
      </div>
    </div>
  );
}

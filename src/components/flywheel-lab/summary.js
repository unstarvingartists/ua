import * as React from "react";
import { Link } from "gatsby";
import { BeakerIcon } from "@heroicons/react/outline";
import oliver from "../../images/oliver.jpeg";
import summary from "../../images/undraw_Abstract_re_l9xy.svg";
export default function Component() {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-blue-600">
                  <BeakerIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Here's a summary of everything you get
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  This is not your typical "course". We provide you with
                  everything you need to be successful.
                </p>
                <ul className="mt-4 text-lg text-gray-500">
                  <li>✔ Reprogram your brain</li>
                  <li>✔ Discover your niche</li>
                  <li>✔ Identify a market desire</li>
                  <li>✔ See your art as a solution</li>
                  <li>✔ Market & sell it successfully</li>
                  <li>✔ Generate a 6-figure profit</li>
                </ul>
                <div className="mt-6">
                  <Link
                    to="https://go.unstarvingartists.org/opt-in"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                  >
                    See how it works
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;I've sold $100,400+ of my art—my art is
                    valuable!&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-6 w-6 rounded-full"
                        src={oliver}
                        alt="Oliver Hojas"
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700">
                      Oliver Hojas, Abstract Artist
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 sm:pl-6 lg:px-0 lg:m-0 lg:relative">
              <img
                className="w-full lg:w-auto lg:py-36"
                src={summary}
                alt="summary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

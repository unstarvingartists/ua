import * as React from "react";
import { FlagIcon } from "@heroicons/react/outline";
import michael from "../../images/michael.jpeg";
import summary from "../../images/undraw_Abstract_re_l9xy.svg";
export default function Component() {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-emerald-600">
                  <FlagIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Here's a summary of everything you get
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  This is not your typical "course". We provide you with
                  everything you need to become a successful artist.
                </p>
                <ul className="mt-4 text-lg text-gray-500">
                  <li>✔ Reprogram your brain</li>
                  <li>✔ Discover your art topic</li>
                  <li>✔ Identify a market desire</li>
                  <li>✔ See your art as a solution</li>
                  <li>✔ Market & sell it successfully</li>
                  <li>✔ Become a successful artist</li>
                </ul>
                <div className="mt-6">
                  <a
                    href="https://book.unstarvingartists.com/checkout59148282"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700"
                  >
                    See how it works
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;Social media has dynamically transformed the art
                    market in ways that you have yet to understand. Your ability
                    as an artist to directly connect with your collectors now—it
                    is so easy and so profitable—why wouldn't you do
                    that?&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-6 w-6 rounded-full"
                        src={michael}
                        height={24}
                        width={24}
                        alt="Michael Gibson"
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700">
                      Michael Gibson, Graphite Mixed Media Artist
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
                width={560}
                height={747}
                alt="summary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

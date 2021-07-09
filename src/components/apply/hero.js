import * as React from "react";
import harry from "../../images/harry-1.jpg";

export default function Component({ children }) {
  return (
    <div className="relative bg-white">
      {children}

      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">See what we can do</span>{" "}
              <span className="block text-blue-600 xl:inline">
                for your art practice
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              In order to keep our student experience at the highest level
              possible, Unstarving Artists is by invitation only.
            </p>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              At the moment, we can only speak with people we feel we're in a
              great position to help. If you'd like to speak, please apply below
              and we will see if we are a good fit for your art practice.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="https://vouch.iljmp.com/2/ianhh"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={harry}
            alt="See what we can do your art practice."
          />
        </div>
      </main>
    </div>
  );
}

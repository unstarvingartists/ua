import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Component({ children }) {
  return (
    <div className="relative bg-white">
      {children}

      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Join Our FREE</span>{" "}
              <span className="block text-blue-600 xl:inline">
                Artist Community
              </span>{" "}
              <span className="block xl:inline">On Instagram.</span>
            </h1>
            <p className="font-bold mt-3 max-w-md mx-auto text-lg text-gray-900 sm:text-xl md:mt-5 md:max-w-3xl">
              By Following Harry On Instagram, Get Access To...
            </p>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              ⚡ Real-life case studies from our clients showing you exactly
              what's working right now (Our FREE gift to you for following).
            </p>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              ⚡ Regular art income tips & tricks from Harry and the team as
              well as industry leading experts.
            </p>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              ⚡ Exclusive training on the process we used to earn a 5 figure a
              month income from art.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://instagram.com/harrywhelchel/"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  Follow On Instagram Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <StaticImage
            className="absolute inset-0 w-full h-full object-cover"
            width={1280}
            src="../../images/harry-5.jpg"
            alt="Join Our FREE Facebook Group For Artists Today!"
            loading="eager"
          />
        </div>
      </main>
    </div>
  );
}

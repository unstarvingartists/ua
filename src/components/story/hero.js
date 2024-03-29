import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

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
                    <StaticImage
                      className="h-full w-full object-cover"
                      src="../../images/harry-3.jpg"
                      alt="Meet Harry Whelchel"
                      width={1216}
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-emerald-700 mix-blend-multiply" />
                  </div>
                  <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                      <span className="block text-white">Meet</span>
                      <span className="block text-emerald-200">
                        Harry Whelchel
                      </span>
                    </h1>
                    <p className="mt-6 max-w-lg mx-auto text-center text-xl text-emerald-200 sm:max-w-3xl">
                      Multi 6-Figure Art Market Consultant & Founder of
                      Unstarving Artists
                    </p>
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

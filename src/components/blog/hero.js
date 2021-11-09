import React from "react";

export default function Component({ children }) {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
        {children}
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-12 lg:text-center">
              <h1>
                <span className="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                  Free Training. Just For Artists.
                </span>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                  <span className="text-gray-900">Blog</span>{" "}
                  <span className="text-blue-600">Resources</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                From blog videos to productivity tools, student interviews and
                livestream Q&A's. Here you'll find resources that help you start
                and grow a wildly profitable art practice.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

import * as React from "react";

export default function Component() {
  return (
    <div className="bg-indigo-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">
            Think you got what it takes to join our team?
          </span>
          <span className="block text-blue-600">
            Download our culture deck to see how we operate.
          </span>
        </h2>
        <div className="mt-8 flex">
          <div className="inline-flex rounded-md shadow">
            <a
              href={`/Culture-Deck.pdf`}
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Download 💪
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

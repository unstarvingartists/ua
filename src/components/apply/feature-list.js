import * as React from "react";
import { CheckIcon } from "@heroicons/react/outline";

const features = [
  {
    name: "Invite team members",
  },
  {
    name: "List view",
  },
  {
    name: "Keyboard shortcuts",
  },
  {
    name: "Calendars",
  },
];

export default function Component() {
  return (
    <div className="relative bg-indigo-800">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
          alt=""
        />
        <div
          className="absolute inset-0 bg-indigo-800 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Get in touch
        </h1>
        <div className="mt-6 text-xl text-indigo-100 max-w-3xl">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-1 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon
                    className="absolute h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                  <p className="ml-9 text-xl leading-6 font-medium text-indigo-100">
                    {feature.name}
                  </p>
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

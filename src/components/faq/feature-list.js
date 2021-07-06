import * as React from "react";
import { CheckIcon } from "@heroicons/react/outline";
import faqImage from "../../images/faq-painting.jpeg";

const features = [
  {
    name: "Why Unstarving Artists can save you 20-30% of your ad spend WITHOUT lowering sales.",
  },
  {
    name: "How Unstarving Artists allows businesses to scale at least 20-30% further",
  },
  {
    name: "How Unstarving Artists can train Facebook and Google AIs to find your customers more cheaply",
  },
  {
    name: "How Unstarving Artists provides you unmatched long-term customer value analytics so you can see your customer's true value",
  },
];

export default function Component() {
  return (
    <div className="relative bg-blue-800">
      <div className="absolute inset-0">
        <img className="w-full h-full object-cover" src={faqImage} alt="" />
        <div
          className="absolute inset-0 bg-blue-800 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          In this video you will learn
        </h1>
        <div className="mt-6 text-xl text-blue-100 max-w-3xl">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-1 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon
                    className="absolute h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                  <p className="ml-9 text-xl leading-6 font-medium text-blue-100">
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

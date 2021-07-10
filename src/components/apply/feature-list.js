import * as React from "react";
import { CheckIcon } from "@heroicons/react/outline";
import { StaticImage } from "gatsby-plugin-image";
import image from "../../images/nappy.jpeg";

const features = [
  {
    name: "Reprogram your brain for greater performance and easier art sales.",
  },
  {
    name: "Discover your niche and target the deep-pocketed collectors inside.",
  },
  {
    name: "Identify a market desire and harness it to create demand for your work.",
  },
  {
    name: "See your art as a solution and have collectors scrambling to work with you.",
  },
  {
    name: "Market & sell your artwork successfully. At higher rates. Again and again.",
  },
  {
    name: "Generate a 6-figure profit. Share your art with the world. Make a difference.",
  },
];

export default function Component() {
  return (
    <div className="relative bg-blue-800">
      <div className="absolute inset-0">
        <StaticImage
          className="w-full h-full object-cover"
          imgClassName="w-full h-full object-cover"
          src="../../images/nappy.jpeg"
          alt="Napoleon Bonaparte"
          width={1280}
        />
        <div
          className="absolute inset-0 bg-blue-800 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          With Unstarving Artists you will be able to
        </h1>
        <div className="mt-6 text-xl text-blue-100 max-w-3xl">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-1 sm:grid-rows-6 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
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

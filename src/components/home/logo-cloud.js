import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Component = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Trusted by the happiest artists in the world
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Join 100+ artists across 12 countries who are connecting with
              collectors, earning a great living from their art practice, and
              mastering their craft.
            </p>
            <div className="mt-8 sm:flex">
              <div className="rounded-md shadow">
                <Link
                  to="/methodology"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Our Methodology
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link
                  to="/stories"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200"
                >
                  Student Stories
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 space-x-4 lg:space-x-6">
              <StaticImage
                className="rounded-full max-h-12"
                src="../../images/oliver.jpeg"
                alt="Oliver Hojas"
              />
              <div className="font-medium text-lg leading-6 space-y-1">
                <h3>Oliver Hojas</h3>
                <p className="text-blue-600">Abstract 🇨🇭</p>
              </div>
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 space-x-4 lg:space-x-6">
              <StaticImage
                className="rounded-full max-h-12"
                src="../../images/lauren.jpeg"
                alt="Lauren Satok"
              />
              <div className="font-medium text-lg leading-6 space-y-1">
                <h3>Lauren Satok</h3>
                <p className="text-blue-600">Landscape 🇨🇦</p>
              </div>
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 space-x-4 lg:space-x-6">
              <StaticImage
                className="rounded-full max-h-12"
                src="../../images/michael.jpeg"
                alt="Michael Gibson"
              />
              <div className="font-medium text-lg leading-6 space-y-1">
                <h3>Michael Gibson</h3>
                <p className="text-blue-600">Graphite 🇨🇦</p>
              </div>
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 space-x-4 lg:space-x-6">
              <StaticImage
                className="rounded-full max-h-12"
                src="../../images/ehab.jpeg"
                alt="Ehab Omaro"
              />
              <div className="font-medium text-lg leading-6 space-y-1">
                <h3>Ehab Omaro</h3>
                <p className="text-blue-600">Commission 🇳🇱</p>
              </div>
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 space-x-4 lg:space-x-6">
              <StaticImage
                className="rounded-full max-h-12"
                src="../../images/kate.jpeg"
                alt="Kate Padget-Koh"
              />
              <div className="font-medium text-lg leading-6 space-y-1">
                <h3>Kate Padget-Koh</h3>
                <p className="text-blue-600">Portrait 🇭🇰</p>
              </div>
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 space-x-4 lg:space-x-6">
              <StaticImage
                className="rounded-full max-h-12"
                src="../../images/sharif.jpeg"
                alt="Sharif Carter"
              />
              <div className="font-medium text-lg leading-6 space-y-1">
                <h3>Sharif Carter</h3>
                <p className="text-blue-600">Pop Art 🇺🇸</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Component;

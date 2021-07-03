import * as React from "react";
import { Link } from "gatsby";
import oliver from "../../images/oliver.jpeg";
import kate from "../../images/kate.jpeg";
import sharif from "../../images/sharif.jpeg";
import michael from "../../images/michael.jpeg";
import ehab from "../../images/ehab.jpeg";
import lauren from "../../images/lauren.jpeg";

const people = [
  {
    name: "Oliver Hojas",
    genre: "Abstract 🇨🇭",
    image: oliver,
  },
  {
    name: "Lauren Satok",
    genre: "Landscape 🇨🇦",
    image: lauren,
  },
  {
    name: "Michael Gibson",
    genre: "Graphite 🇨🇦",
    image: michael,
  },
  {
    name: "Ehab Omaro",
    genre: "Commission 🇳🇱",
    image: ehab,
  },
  {
    name: "Kate Padget-Koh",
    genre: "Portrait 🇭🇰",
    image: kate,
  },
  {
    name: "Sharif Carter",
    genre: "Pop Art 🇺🇸",
    image: sharif,
  },
];

const LogoCloud = () => {
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
            {people.map((person) => (
              <div
                key={person.name}
                className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 space-x-4 lg:space-x-6"
              >
                <img
                  className="rounded-full max-h-12"
                  src={person.image}
                  alt={person.name}
                />
                <div className="font-medium text-lg leading-6 space-y-1">
                  <h3>{person.name}</h3>
                  <p className="text-blue-600">{person.genre}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogoCloud;

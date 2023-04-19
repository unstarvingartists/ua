import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const people = [
  {
    name: "Lauren S.",
    genre: "Landscape 🇨🇦",
    src: "lauren.jpeg",
  },
  {
    name: "Michael G.",
    genre: "Graphite 🇨🇦",
    src: "michael.jpeg",
  },
  {
    name: "Ehab O.",
    genre: "Abstract 🇳🇱",
    src: "ehab.jpeg",
  },
  {
    name: "Kate P.",
    genre: "Portrait 🇭🇰",
    src: "kate.jpeg",
  },
  {
    name: "Alexandra S.",
    genre: "Wildlife 🇺🇸",
    src: "alexandra.jpeg",
  },
  {
    name: "Sharif C.",
    genre: "Pop Art 🇺🇸",
    src: "sharif.jpeg",
  },
];

const Component = () => {
  const {
    allFile: { edges },
  } = useStaticQuery(graphql`
    query homeLogoCloudQuery {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativePath: {
            in: [
              "alexandra.jpeg"
              "kate.jpeg"
              "michael.jpeg"
              "sharif.jpeg"
              "ehab.jpeg"
              "lauren.jpeg"
            ]
          }
        }
      ) {
        edges {
          node {
            id
            relativePath
            childImageSharp {
              gatsbyImageData(width: 48)
            }
          }
        }
      }
    }
  `);

  people.map((person) => {
    const { node: source } = edges.find(
      ({ node: { relativePath } }) => relativePath === person.src
    );
    return (person.image = getImage(source));
  });

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Trusted by the happiest artists in the world
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500">
              Join 300+ artists across 12 countries who are connecting with
              collectors, earning a great living from their art practice, and
              mastering their craft.
            </p>
            <div className="mt-8 sm:flex">
              <div className="rounded-md shadow">
                <Link
                  to="/methodology"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700"
                >
                  Our Methodology
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link
                  to="/reviews"
                  className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-emerald-100 hover:bg-emerald-200"
                >
                  Reviews
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-0.5 sm:grid-cols-2 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            {people.map((person) => {
              return (
                <div
                  key={person.name}
                  className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 space-x-4 lg:space-x-6"
                >
                  <GatsbyImage
                    className="rounded-full max-h-12"
                    image={person.image}
                    width={48}
                    alt={person.name}
                    loading="eager"
                  />
                  <div className="font-medium text-lg leading-6 space-y-1">
                    <h3>{person.name}</h3>
                    <p className="text-emerald-600">{person.genre}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Component;

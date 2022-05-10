import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Component() {
  return (
    <StaticQuery
      query={graphql`
        query resultsQuery {
          allFile(
            sort: { fields: sourceInstanceName, order: DESC }
            filter: { relativePath: { regex: "/results/" } }
          ) {
            edges {
              node {
                id
                childImageSharp {
                  gatsbyImageData(width: 392)
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3" />
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {data.allFile.edges.map(({ node: result }) => {
                const image = getImage(result.childImageSharp);
                debugger;
                return (
                  <div
                    key={result.id}
                    className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                  >
                    <GatsbyImage
                      className="h-48 w-full object-cover"
                      image={image}
                      alt={result.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    />
  );
}
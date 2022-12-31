import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Component() {
  return (
    <StaticQuery
      query={graphql`
        query resultsQuery {
          allMdx(
            filter: { frontmatter: { category: { name: { eq: "Result" } } } }
            sort: { frontmatter: { sales: DESC } }
          ) {
            edges {
              node {
                id
                frontmatter {
                  image {
                    name
                    childImageSharp {
                      gatsbyImageData(width: 496)
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className="relative bg-gray-50 pb-20 px-4 sm:px-6 lg:pb-28 lg:px-8">
          <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3" />
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="mt-12 max-w-lg mx-auto columns-1 lg:columns-2 gap-8 lg:max-w-5xl">
              {data.allMdx.edges.map(({ node: result }) => {
                const image = getImage(result.frontmatter.image);

                return (
                  <GatsbyImage
                    key={result.id}
                    className="rounded-lg mt-4"
                    image={image}
                    alt={result.frontmatter.image.name}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    />
  );
}

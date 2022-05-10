import * as React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Component() {
  return (
    <StaticQuery
      query={graphql`
        query resultsQuery {
          allFile(filter: { relativePath: { regex: "/results/" } }) {
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

                return (
                  <div key={result.id}>Test</div>
                  // <div
                  //   key={result.id}
                  //   className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                  // >
                  //   <div className="flex-shrink-0">
                  //     <Link to={result.frontmatter.student.href}>
                  //       <GatsbyImage
                  //         className="h-48 w-full object-cover"
                  //         image={image}
                  //         alt={result.frontmatter.title}
                  //       />
                  //     </Link>
                  //   </div>
                  //   <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  //     <div className="flex-1">
                  //       <p className="text-sm font-medium text-blue-600">
                  //         <Link
                  //           to={result.frontmatter.student.href}
                  //           className="hover:underline"
                  //         >
                  //           {result.frontmatter.category.name}
                  //         </Link>
                  //       </p>
                  //       <Link
                  //         to={result.frontmatter.href}
                  //         className="block mt-2"
                  //       >
                  //         <p className="text-xl font-semibold text-gray-900">
                  //           {result.frontmatter.title}
                  //         </p>
                  //         <p className="mt-3 text-base text-gray-500">
                  //           {result.frontmatter.description}
                  //         </p>
                  //       </Link>
                  //     </div>
                  //     <div className="mt-6 flex items-center">
                  //       <div className="flex-shrink-0">
                  //         <Link to={result.frontmatter.student.href}>
                  //           <span className="sr-only">
                  //             {result.frontmatter.student.name}
                  //           </span>
                  //         </Link>
                  //       </div>
                  //       <div className="ml-3">
                  //         <p className="text-sm font-medium text-gray-900">
                  //           <Link
                  //             to={result.frontmatter.student.href}
                  //             className="hover:underline"
                  //           >
                  //             {result.frontmatter.student.name}
                  //           </Link>
                  //         </p>
                  //         <div className="flex space-x-1 text-sm text-gray-500">
                  //           <span>{result.frontmatter.genre}</span>
                  //           <span aria-hidden="true">&middot;</span>
                  //           <span>{result.frontmatter.country}</span>
                  //         </div>
                  //       </div>
                  //     </div>
                  //   </div>
                  // </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    />
  );
}

import * as React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Component() {
  return (
    <StaticQuery
      query={graphql`
        query blogsQuery {
          allMdx(
            filter: { frontmatter: { category: { name: { eq: "Blog Post" } } } }
            sort: { fields: [frontmatter___id], order: DESC }
          ) {
            edges {
              node {
                id
                frontmatter {
                  category {
                    href
                    name
                  }
                  country
                  description
                  genre
                  href
                  title
                  image {
                    childImageSharp {
                      gatsbyImageData(width: 392)
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className="relative bg-gray-50 pt-4 pb-20 px-4 sm:px-6 lg:pt-8 lg:pb-28 lg:px-8">
          <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3" />
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {data.allMdx.edges.map(({ node: post }) => {
                const image = getImage(post.frontmatter.image);

                return (
                  <div
                    key={post.frontmatter.title}
                    className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                  >
                    <div className="flex-shrink-0">
                      <Link to={post.frontmatter.href}>
                        <GatsbyImage
                          className="h-48 w-full object-cover"
                          image={image}
                          alt={post.frontmatter.title}
                        />
                      </Link>
                    </div>
                    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-blue-600">
                          <Link
                            to={post.frontmatter.href}
                            className="hover:underline"
                          >
                            {post.frontmatter.category.name}
                          </Link>
                        </p>
                        <Link to={post.frontmatter.href} className="block mt-2">
                          <p className="text-xl font-semibold text-gray-900">
                            {post.frontmatter.title}
                          </p>
                          <p className="mt-3 text-base text-gray-500">
                            {post.frontmatter.description}
                          </p>
                        </Link>
                      </div>
                    </div>
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

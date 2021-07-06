import * as React from "react";
import { StaticQuery, graphql } from "gatsby";

export default function Component() {
  return (
    <StaticQuery
      query={graphql`
        query postsQuery {
          allMdx(
            filter: {
              frontmatter: { category: { name: { eq: "Student Story" } } }
            }
          ) {
            edges {
              node {
                id
                frontmatter {
                  category {
                    name
                    href
                  }
                  date
                  datetime
                  description
                  href
                  imageUrl
                  path
                  readingTime
                  title
                  author {
                    href
                    imageUrl
                    name
                  }
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
            <div className="text-center">
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                Our Student Stories
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                Hear from everyday people just like you who started earning more
                from their creative and artistic work.
              </p>
            </div>
            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
              {data.allMdx.edges.map((post) => (
                <div
                  key={post.node.frontmatter.title}
                  className="flex flex-col rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover"
                      src={post.node.frontmatter.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-blue-600">
                        <a
                          href={post.node.frontmatter.category.href}
                          className="hover:underline"
                        >
                          {post.node.frontmatter.category.name}
                        </a>
                      </p>
                      <a
                        href={post.node.frontmatter.href}
                        className="block mt-2"
                      >
                        <p className="text-xl font-semibold text-gray-900">
                          {post.node.frontmatter.title}
                        </p>
                        <p className="mt-3 text-base text-gray-500">
                          {post.node.frontmatter.description}
                        </p>
                      </a>
                    </div>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <a href={post.node.frontmatter.author.href}>
                          <span className="sr-only">
                            {post.node.frontmatter.author.name}
                          </span>
                          <img
                            className="h-10 w-10 rounded-full"
                            src={post.node.frontmatter.author.imageUrl}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          <a
                            href={post.node.frontmatter.author.href}
                            className="hover:underline"
                          >
                            {post.node.frontmatter.author.name}
                          </a>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                          <time dateTime={post.node.frontmatter.datetime}>
                            {post.node.frontmatter.date}
                          </time>
                          <span aria-hidden="true">&middot;</span>
                          <span>{post.node.frontmatter.readingTime} read</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    />
  );
}

import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export default function Component({ allMdx }) {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            Check out more blog resources
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            From blog videos to productivity tools, student interviews and
            livestream Q&A's. Here you'll find resources that help you start and
            grow a wildly profitable art practice.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {allMdx.edges.map(({ node: post }) => {
            const image = getImage(post.frontmatter.image);
            const authorImage = getImage(post.frontmatter.author.image);

            return (
              <div
                key={post.id}
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
                    <p className="text-sm font-medium text-emerald-600">
                      <Link
                        to={post.frontmatter.href}
                        className="hover:underline"
                      >
                        {post.frontmatter.category.label}
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
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <Link to={post.frontmatter.author.href}>
                        <span className="sr-only">
                          {post.frontmatter.author.name}
                        </span>
                        <GatsbyImage
                          className="h-10 w-10 rounded-full"
                          image={authorImage}
                          alt={post.frontmatter.author.name}
                        />
                      </Link>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <Link
                          to={post.frontmatter.author.href}
                          className="hover:underline"
                        >
                          {post.frontmatter.author.name}
                        </Link>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <span>{post.frontmatter.author.title}</span>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.frontmatter.author.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

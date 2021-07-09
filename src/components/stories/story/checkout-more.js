import * as React from "react";
import { StarIcon } from "@heroicons/react/solid";
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
            You're in good company
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Hundreds of artists around the world have used Unstarving Artists to
            start and grow their art practices, expand their minds, and change
            their lives.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {allMdx.edges.map(({ node: post }) => (
            <div
              key={post.frontmatter.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.frontmatter.image.publicURL}
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-600">
                    <a
                      href={post.frontmatter.category.href}
                      className="hover:underline"
                    >
                      {post.frontmatter.category.name}
                    </a>
                  </p>
                  <a href={post.frontmatter.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.frontmatter.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.frontmatter.description}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.frontmatter.student.href}>
                      <span className="sr-only">
                        {post.frontmatter.student.name}
                      </span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={post.frontmatter.student.image.publicURL}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a
                        href={post.frontmatter.student.href}
                        className="hover:underline"
                      >
                        {post.frontmatter.student.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <span>{post.frontmatter.genre}</span>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.frontmatter.country}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <div className="mt-6 mb-1">
            <div className="inline-flex items-center">
              <div className="flex-shrink-0 flex">
                <StarIcon
                  className="h-10 w-10 text-yellow-400"
                  aria-hidden="true"
                />
                <StarIcon
                  className="h-10 w-10 text-yellow-400"
                  aria-hidden="true"
                />
                <StarIcon
                  className="h-10 w-10 text-yellow-400"
                  aria-hidden="true"
                />
                <StarIcon
                  className="h-10 w-10 text-yellow-400"
                  aria-hidden="true"
                />
                <StarIcon
                  className="h-10 w-10 text-yellow-400"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
          <Link to="/stories" className="text-base font-medium text-blue-600">
            {" "}
            4.9 stars from 29 student stories{" "}
            <span aria-hidden="true">&rarr;</span>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

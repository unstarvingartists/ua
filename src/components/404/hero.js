import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import logo from "../../images/logo.svg";

const Component = ({ children }) => {
  return (
    <div className="bg-white min-h-screen flex flex-col lg:relative">
      <div className="flex-grow flex flex-col">
        <main className="flex-grow flex flex-col bg-white">
          <div className="flex-grow mx-auto max-w-7xl w-full flex flex-col px-4 sm:px-6 lg:px-8">
            <div className="flex-shrink-0 pt-10 sm:pt-16">
              <Link to="/" className="inline-flex">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-12 w-auto"
                  src={logo}
                  alt="Unstarving Artists Logo"
                />
              </Link>
            </div>
            <div className="flex-shrink-0 my-auto py-16 sm:py-32">
              <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">
                404 error
              </p>
              <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                Page not found
              </h1>
              <p className="mt-2 text-base text-gray-500">
                Sorry, we couldn’t find the page you’re looking for.
              </p>
              <div className="mt-6">
                <Link
                  to="/"
                  className="text-base font-medium text-emerald-600 hover:text-emerald-500"
                >
                  Go back home<span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <footer className="flex-shrink-0 bg-gray-50">
          <div className="mx-auto max-w-7xl w-full px-4 py-16 sm:px-6 lg:px-8">
            <nav className="flex space-x-4">
              <Link
                to="/methodology"
                className="text-sm font-medium text-gray-500 hover:text-gray-600"
              >
                Our Methodology
              </Link>
              <span
                className="inline-block border-l border-gray-300"
                aria-hidden="true"
              />
              <Link
                to="/reviews"
                className="text-sm font-medium text-gray-500 hover:text-gray-600"
              >
                Reviews
              </Link>
              <span
                className="inline-block border-l border-gray-300"
                aria-hidden="true"
              />
              <Link
                to="/faq"
                className="text-sm font-medium text-gray-500 hover:text-gray-600"
              >
                FAQ
              </Link>
            </nav>
          </div>
        </footer>
      </div>
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <StaticImage
          className="absolute inset-0 h-full w-full object-cover"
          src="../../images/the-concert.jpeg"
          width={1280}
          height={1440}
          alt="The Concert by Vermeer"
        />
      </div>
    </div>
  );
};
export default Component;

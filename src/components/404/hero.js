import * as React from "react";
import { Link } from "gatsby";

const Component = ({ children }) => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div
        className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
        aria-hidden="true"
      ></div>
      <div className="relative pt-6 pb-16 sm:pb-24">
        {children}
        <main className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8 py-36">
          <div className="text-base max-w-prose mx-auto lg:max-w-none">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              404 Error
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Page not found!
            </p>
            <p className="text-lg text-gray-500 mt-2">
              You may have mistyped the address or the page has been moved.
            </p>
            <div className="mt-10">
              <Link to="/" className="text-base font-medium text-blue-600">
                {" "}
                Go back home <span aria-hidden="true">&rarr;</span>{" "}
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default Component;

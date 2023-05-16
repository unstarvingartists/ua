import * as React from "react";
import { Link } from "gatsby";

export default function Component() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-emerald-600 tracking-wide uppercase">
            We Are
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            A Team Of Leaders
          </p>
          <p className="max-w-4xl mt-5 mx-auto text-xl text-gray-500">
            As a 100% remote company we need self starters who OWN their roles.
            When you join Unstarving Artists you are fully trusted to find your
            own solution to problems and will constantly be presented with hard
            problems to solve. Each member of our team has a voice and autonomy
            to improve the company. Because of this we only hire A player
            leaders who are excited about our cause.
          </p>
          <p className="prose prose-emerald max-w-4xl mt-5 mx-auto text-xl text-gray-500">
            Want to know more about us? Check out our company page{" "}
            <Link to="/company">here</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}

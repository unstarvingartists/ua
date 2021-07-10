import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Component() {
  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <StaticImage
            width={1280}
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src="../../images/office.jpeg"
            alt="Office"
          />
        </div>
      </div>
      <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
        <div className="lg:pr-8">
          <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Future Clients
            </h2>
            <p className="prose prose-blue mt-4 text-lg text-gray-500 sm:mt-3">
              Watch our{" "}
              <a href="https://go.unstarvingartists.org/opt-in">
                free training
              </a>{" "}
              and then apply for a strategy session.
            </p>
            <h2 className="text-3xl mt-9 font-extrabold tracking-tight sm:text-4xl">
              Clients
            </h2>
            <p className="mt-4 text-lg text-gray-500 sm:mt-3">
              For general questions, use the Facebook group. That way everyone
              can benefit from the discussion.
            </p>
            <p className="mt-4 text-lg text-gray-500 sm:mt-3">
              For technical or billing questions, send an email to
              support@unstarvingartists.com.
            </p>
            <h2 className="text-3xl mt-9 font-extrabold tracking-tight sm:text-4xl">
              All other inquiries
            </h2>
            <p className="mt-4 text-lg text-gray-500 sm:mt-3">
              Send an email to hello@unstarvingartists.com. We aim to respond to
              all inquiries within 1 business day.
            </p>
            <p className="mt-4 text-lg text-gray-500 sm:mt-3">
              Our office hours are Mon-Thurs 10am to 5pm EST.
            </p>
            <h2 className="text-3xl mt-9 font-extrabold tracking-tight sm:text-4xl">
              Locations
            </h2>
            <p className="mt-4 text-lg text-gray-500 sm:mt-3">
              We have one office in Atlanta, Georgia. If you require postal
              information please contact us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

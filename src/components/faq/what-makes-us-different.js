import * as React from "react";
import { CameraIcon } from "@heroicons/react/solid";
import { Link } from "gatsby";

export default function Component() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
          <div>
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              What Makes Us Different
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Is Unstarving Artists Better Than Other Systems On The Market?
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src="https://images.unsplash.com/photo-1546913199-55e06682967e?ixlib=rb-1.2.1&auto=format&fit=crop&crop=focalpoint&fp-x=.735&fp-y=.55&w=1184&h=1376&q=80"
                    alt="Whitney leaning against a railing on a downtown street"
                    width={1184}
                    height={1376}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  <CameraIcon
                    className="flex-none w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-2">Photograph by Marcus O’Leary</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">
                At Unstarving Artists we build our business by delivering
                superior results, not by trashing our competitors. Simply put,
                Unstarving Artists is unlike any other tracking system on the
                market and we take completely different approaches to tracking.
                It would be like comparing a helicopter to a pickup truck.
              </p>
            </div>
            <div className="mt-5 prose prose-blue text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <strong>Here is what we suggest</strong>
              <p>
                #1: PLEASE go try our "competitors" and run our tracking head to
                head with them. Unlike our competitors, we have a 90-day
                satisfaction guarantee BECAUSE we know our services deliver
                superior results. We are 100% positive you will see not only
                better tracking, but also better customer support, an
                easier-to-use platform and setup, and far more specialized
                features for education businesses.
              </p>
              <p>
                #2: Go to our customer Facebook group HERE and ask our customers
                about their experiences on other platforms VS Unstarving
                Artists. There is a reason people constantly leave other
                platforms to become Unstarving Artists customers for life. Our
                customers are quite vocal about why they love our platform.
              </p>
              <p>
                #3: Go to our customer Facebook group HERE and ask our customers
                about their experiences on other platforms VS Unstarving
                Artists. There is a reason people constantly leave other
                platforms to become Unstarving Artists customers for life. Our
                customers are quite vocal about why they love our platform.
              </p>
            </div>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link
                  to="https://go.unstarvingartists.org/opt-in"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  See How It Works
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link
                  to="/apply"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

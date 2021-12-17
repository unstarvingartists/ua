import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

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
              Why Is Flywheel Lab Better Than Other Programs On The Market?
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
                <div>
                  <StaticImage
                    className="rounded-lg shadow-lg"
                    imgClassName="rounded-lg object-cover object-center"
                    src="../../images/harry-4.jpg"
                    alt="Harry"
                    width={592}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  <span>
                    Rather than hear from us why we're different, check out our
                    Reviews.
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">
                At Unstarving Artists we build our business by delivering
                superior results, not by trashing our competitors. Simply put,
                our Flywheel Lab program is unlike any other training program on
                the market and we take a completely different approach to
                helping our artists build profitable art practices. It would be
                like comparing a rocketship to a scooter.
              </p>
            </div>
            <div className="mt-5 prose prose-blue text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <strong>Here is what we suggest</strong>
              <p>
                #1: PLEASE go try our "competitors" and run our methods head to
                head with theirs. Unlike our competitors, we have a 90-day
                action-based guarantee BECAUSE we know our program delivers
                superior results. If you put in the work, we are 100% positive
                you will see not only better results, but also better client
                support, easier-to-use training, and far more specialized
                examples for artists.
              </p>
              <p>
                #2: Go check out our Reviews <Link to="/reviews">HERE</Link> and
                watch literally dozens and dozens of in-depth interviews with
                artists and past clients of ours. Hear them share firsthand
                about their experiences working with Harry and Unstarving
                Artists vs. other things they've tried in the past. There is a
                reason people constantly leave other programs to become
                Unstarving Artists clients for life. Our clients are quite vocal
                about why they love us and our programs.
              </p>
            </div>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="https://go.unstarvingartists.com/training"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  See How It Works
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link
                  to="/apply-now"
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

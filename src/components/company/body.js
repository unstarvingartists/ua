import * as React from "react";
import { Link } from "gatsby";
import { StarIcon } from "@heroicons/react/solid";
import start from "../../images/starting-unstarving-artists.jpeg";
import newoffice from "../../images/new-office.jpeg";
import team from "../../images/team.png";

const navigation = [
  { name: "Our story", href: "/story" },
  { name: "Our philosophy", href: "/philosophy" },
  { name: "Our company", href: "/company" },
];

export default function Component({ children }) {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          className="relative h-full text-lg max-w-prose mx-auto"
          aria-hidden="true"
        >
          <svg
            className="absolute top-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
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
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
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
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
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
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-8">
        {children}
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="sm:grid sm:grid-cols-6 sm:gap-4">
            <div>
              <ul className="mt-4 space-y-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-base text-gray-500 hover:text-gray-900"
                      activeClassName="text-gray-700 underline font-semibold"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sm:col-start-2 sm:col-span-4">
              <div className="text-lg max-w-prose mx-auto pt-4">
                <h1>
                  <span className="block text-base text-center text-blue-600 font-semibold tracking-wide uppercase">
                    How We Got Here
                  </span>
                  <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Humble Beginnings
                  </span>
                </h1>
                <p className="mt-8 text-xl text-gray-500 leading-8">
                  Our company was founded by Harry Whelchel in 2020 from his
                  parents' basement in Atlanta, GA. Back then the company was
                  called “Vouch” and the company was literally just him, a
                  laptop, a cellphone and a dream.
                </p>
              </div>
              <div className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto">
                <p>
                  Today the company has evolved into a market leading e-learning
                  platform that helps everyday people start and grow their own
                  art practices and live lives of freedom. Since 2020 the
                  company has grown to over 115 paying customers, opened offices
                  in Atlanta and Copenhagen and employs 2 people.
                </p>
                <figure>
                  <img
                    className="w-full rounded-lg"
                    src={start}
                    alt=""
                    width={1310}
                    height={873}
                  />
                  <figcaption>
                    Where I first had the idea for Unstarving Artists.
                  </figcaption>
                </figure>
                <h2>Two locations, global reach</h2>
                <p>
                  Unstarving Artists has two office locations, one in Atlanta,
                  Georgia and another in Copenhagen, Denmark.
                </p>
                <figure>
                  <img
                    className="w-full rounded-lg"
                    src={newoffice}
                    alt="New Office"
                    width={1310}
                    height={873}
                  />
                  <figcaption>
                    Unstarving Artists has two offices in Atlanta and
                    Copenhagen.
                  </figcaption>
                </figure>
                <h2>All star team</h2>
                <p>
                  We’re building a team of inspired, smart, and driven
                  individuals from all sorts of backgrounds. With countless
                  opportunities for growth and mentorship, we strive to help
                  each team member carve out the path that’s right for them.
                </p>
                <figure>
                  <img
                    className="w-full rounded-lg"
                    src={team}
                    alt="Team"
                    width={1310}
                    height={873}
                  />
                  <figcaption>
                    Thierry and I catching up at a regular team meeting.
                  </figcaption>
                </figure>
                <p>
                  The culture at Unstarving Artists can be described as: "A
                  magic balance between sawn off shotguns and scented candles".
                  Our team is hard working with an insatiable hunger to win but
                  at the same time laid back, caring and not willing to break
                  values just to get ahead.
                </p>
                <h2>By the people for the people</h2>
                <p>
                  At Unstarving Artists we try never to forget that our programs
                  are for the people. They're not for the profits. The profits
                  follow, and if we have remembered that, they have never failed
                  to appear. The better we have remembered it, the larger they
                  have been.
                </p>
                <p>
                  People are always before profits at Unstarving Artists and
                  ironically that's the best way to make profits appear in the
                  first place.
                </p>
              </div>
              <div className="mt-10 text-center">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="https://go.unstarvingartists.org/opt-in"
                    className="px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    {" "}
                    Join the revolution <span aria-hidden="true">
                      &rarr;
                    </span>{" "}
                  </a>
                </div>
                <div className="mt-4 mb-1">
                  <div className="inline-flex items-center">
                    <div className="flex-shrink-0 flex mr-2">
                      <StarIcon
                        className="h-6 w-6 text-yellow-400"
                        aria-hidden="true"
                      />
                      <StarIcon
                        className="h-6 w-6 text-yellow-400"
                        aria-hidden="true"
                      />
                      <StarIcon
                        className="h-6 w-6 text-yellow-400"
                        aria-hidden="true"
                      />
                      <StarIcon
                        className="h-6 w-6 text-yellow-400"
                        aria-hidden="true"
                      />
                      <StarIcon
                        className="h-6 w-6 text-yellow-400"
                        aria-hidden="true"
                      />
                    </div>
                    <Link
                      to="/stories"
                      className="text-base font-medium text-blue-600"
                    >
                      {" "}
                      4.9 stars 29 student stories
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

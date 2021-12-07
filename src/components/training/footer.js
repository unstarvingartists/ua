import React from "react";
import { Link } from "gatsby";

export default function Footer({ short, fb }) {
  return (
    <footer className="flex flex-col justify-between max-w-6xl px-4 py-10 mx-auto space-y-5 text-xs text-light-gray md:space-y-0 md:text-sm md:space-x-20 md:flex-row sm:px-6">
      <div className="md:w-1/2">
        <div className="flex flex-col">
          <p>© 2021 Vouch Group, LLC dba Unstarving Artists</p>
          <p>3243 Piedmont Rd NE #377, Atlanta, Ga 30305</p>
        </div>
      </div>
      <div className="space-y-3 text-right md:w-1/2">
        <ul className="flex flex-col text-left md:justify-end md:space-x-16 md:flex-row">
          <li>
            <Link
              className="hover:underline"
              to="https://www.unstarvingartists.com/terms/"
            >
              Terms &amp; Conditions
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline"
              to="https://www.unstarvingartists.com/privacy/"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              className="hover:underline"
              to="https://www.unstarvingartists.com/earnings/"
            >
              Earnings Disclaimer
            </Link>
          </li>
        </ul>
        {!short && (
          <>
            <p className="text-xs">
              *Earnings and income representations made by Harry Whelchel and
              Vouch Group, LLC and their advertisers/sponsors (collectively,
              "Unstarving Artists") are aspirational statements only of your
              earnings potential. These results are not typical and results will
              vary. The results on this page are OUR results and from years of
              testing. We can in NO way guarantee you will get similar results
            </p>
            {fb && (
              <p className="text-xs">
                This site is NOT endorsed by Facebook in any way. FACEBOOK is a
                trademark of FACEBOOK, Inc.
              </p>
            )}
          </>
        )}
      </div>
    </footer>
  );
}

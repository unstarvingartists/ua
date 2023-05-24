import * as React from "react";
import { Link } from "gatsby";

const navigation = {
  company: [
    { name: "Our story", to: "/story" },
    { name: "Our philosophy", to: "/philosophy" },
    { name: "Our company", to: "/company" },
    { name: "Careers", to: "/careers" },
  ],
  programs: [
    { name: "Our methodology", to: "/methodology" },
    { name: "The Academy", to: "/academy" },
  ],
  resources: [
    { name: "Reviews", to: "/reviews" },
    { name: "Blog", href: "https://unstarvingartists.substack.com/" },
    { name: "FAQ", to: "/faq" },
  ],
  extras: [
    {
      name: "Free Training",
      href: "https://book.unstarvingartists.com/offer",
    },
    { name: "Free Community", to: "/community" },
  ],
};

export default function Component() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.to}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Programs
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.programs.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.to}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Resources
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.resources.map((item) => {
                    if (!!item.to) {
                      return (
                        <li key={item.name}>
                          <Link
                            to={item.to}
                            className="text-base text-gray-500 hover:text-gray-900"
                          >
                            {item.name}
                          </Link>
                        </li>
                      );
                    } else {
                      return (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            rel="noreferrer"
                            target="_blank"
                            className="text-base text-gray-500 hover:text-gray-900"
                          >
                            {item.name}
                          </a>
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Extras
                </h3>
                <ul className="mt-4 space-y-4">
                  {navigation.extras.map((item) => {
                    if (!!item.to) {
                      return (
                        <li key={item.name}>
                          <Link
                            to={item.to}
                            className="text-base text-gray-500 hover:text-gray-900"
                          >
                            {item.name}
                          </Link>
                        </li>
                      );
                    } else {
                      return (
                        <li key={item.name}>
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-base text-gray-500 hover:text-gray-900"
                          >
                            {item.name}
                          </a>
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <a
              key="Instagram"
              href="https://www.instagram.com/harrywhelchel/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="text-xs text-gray-400 mr-1">Follow Us On</span>
              <svg
                className="h-6 w-6 inline"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-xs text-gray-400 ml-1">
                For Art Income Tips & Tricks
              </span>
            </a>
          </div>
          <p className="mt-8 text-xs text-gray-400 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()} Unstarving Artists, LLC. All
            rights reserved.{" "}
            <Link className="mx-2" to="/privacy">
              Privacy & Terms
            </Link>{" "}
            <Link to="/contact">Contact</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

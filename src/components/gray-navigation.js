import React, { Fragment } from "react";
import { Link } from "gatsby";
import { Popover, Transition } from "@headlessui/react";
import {
  LightBulbIcon,
  FlagIcon,
  MenuIcon,
  LightningBoltIcon,
  PlayIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import logo from "../images/logo.svg";

const navigation = [
  { name: "Reviews", to: "/reviews" },
  { name: "Blog", to: "/blog" },
  { name: "FAQ", to: "/faq" },
  { name: "Log in", href: "https://learn.unstarvingartists.com/login" },
];

const programs = [
  {
    name: "Our Methodology",
    to: "/methodology",
    description:
      "Get a better understanding of how everyday people are transforming themselves into successful artists.",
    icon: LightBulbIcon,
  },
  {
    name: "Flywheel Lab",
    to: "/flywheel-lab",
    description:
      "Learn more about our flagship program and how artists inside are earning more from their artwork.",
    icon: FlagIcon,
  },
];
const callsToAction = [
  {
    name: "See How It Works",
    href: "https://go.unstarvingartists.com/training",
    icon: PlayIcon,
  },
  { name: "Apply Now", to: "/apply-now", icon: LightningBoltIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Component = () => {
  return (
    <Popover>
      {({ open }) => (
        <>
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-between w-full md:w-auto">
                <Link to="/">
                  <img
                    className="h-8 w-auto sm:h-10 inline"
                    src={logo}
                    alt="Unstarving Artists Logo"
                  />
                  <span className="ml-4 font-semibold bg-gray-50 text-gray-700 hover:text-gray-900">
                    Unstarving Artists
                  </span>
                </Link>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-6">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-gray-500",
                        "group bg-gray-50 rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      )}
                    >
                      <span>Programs</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-gray-500"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel
                        static
                        className="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                      >
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                            {programs.map((item) => (
                              <Link
                                key={item.name}
                                to={item.to}
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <item.icon
                                  className="flex-shrink-0 h-6 w-6 text-blue-600"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            {callsToAction.map((item) => {
                              if (!!item.to) {
                                return (
                                  <div key={item.name} className="flow-root">
                                    <Link
                                      to={item.to}
                                      className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                    >
                                      <item.icon
                                        className="flex-shrink-0 h-6 w-6 text-gray-400"
                                        aria-hidden="true"
                                      />
                                      <span className="ml-3">{item.name}</span>
                                    </Link>
                                  </div>
                                );
                              } else {
                                return (
                                  <div key={item.name} className="flow-root">
                                    <a
                                      href={item.href}
                                      className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                    >
                                      <item.icon
                                        className="flex-shrink-0 h-6 w-6 text-gray-400"
                                        aria-hidden="true"
                                      />
                                      <span className="ml-3">{item.name}</span>
                                    </a>
                                  </div>
                                );
                              }
                            })}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              {navigation.map((item) => {
                if (!!item.to) {
                  return (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="font-medium bg-gray-50 text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </Link>
                  );
                } else {
                  return (
                    <a
                      key={item.name}
                      className="font-medium bg-gray-50 text-gray-500 hover:text-gray-900"
                      href={item.href}
                    >
                      {item.name}
                    </a>
                  );
                }
              })}
              <span className="inline-flex rounded-md shadow-md ring-1 ring-black ring-opacity-5">
                <Link
                  to="/apply-now"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
                >
                  Apply Now
                </Link>
              </span>
            </div>
          </nav>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto inline"
                        src={logo}
                        alt="Unstarving Artists Logo"
                      />
                      <span className="ml-4 font-semibold bg-white text-gray-700 hover:text-gray-900">
                        Unstarving Artists
                      </span>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                        <span className="sr-only">Close main menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {programs.map((item) => (
                        <Link
                          key={item.name}
                          to={item.to}
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          <item.icon
                            className="flex-shrink-0 h-6 w-6 text-blue-600"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => {
                    if (!!item.to) {
                      return (
                        <Link
                          key={item.name}
                          to={item.to}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </Link>
                      );
                    } else {
                      return (
                        <a
                          key={item.name}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                          href={item.href}
                        >
                          {item.name}
                        </a>
                      );
                    }
                  })}
                </div>
                <Link
                  to="/apply-now"
                  className="block w-full px-5 py-3 text-center font-medium text-blue-600 bg-gray-50 hover:bg-gray-100"
                >
                  Apply Now
                </Link>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
export default Component;

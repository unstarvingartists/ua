import React, { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { StaticImage } from "gatsby-plugin-image";

export default function Popup({ open, setOpen }) {
  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-black bg-opacity-75 backdrop-blur-sm" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="linear duration-300"
            enterFrom="opacity-0 sm:translate-y-[-1000px] sm:scale-95"
            enterTo="opacity-100 sm:translate-y-[-1000px] sm:scale-100"
            leave="linear duration-200"
            leaveFrom="opacity-100 sm:translate-y-[-1000px] sm:scale-100"
            leaveTo="opacity-0 sm:translate-y-[-1000px] sm:scale-95"
          >
            <div className="inline-block my-20 text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:align-middle sm:max-w-lg sm:w-full">
              <form
                action="https://formkeep.com/f/99bb97640331"
                acceptCharset="UTF-8"
                encType="multipart/form-data"
                method="POST"
              >
                <div className="px-4 pt-5 pb-4 bg-white sm:p-10 sm:pb-4 rounded-t-md">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-xl leading-6 text-center text-gray-900 sm:text-3xl"
                      >
                        Watch Now For FREE!
                      </Dialog.Title>
                      <div className="mt-2 space-y-5">
                        <p className="text-base text-center text-gray-500">
                          Enter your info, start watching the film immediately
                        </p>
                        <StaticImage
                          className="w-full h-full"
                          src="../../images/status.png"
                          alt=""
                          imgStyle={{ objectFit: "contain" }}
                        />

                        <div>
                          <input
                            placeholder="Enter Your Name"
                            type="text"
                            name="first-name"
                            id="first-name"
                            autoComplete="given-name"
                            className="block w-full px-4 py-3 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>

                        <div>
                          <input
                            placeholder="Enter Your Email Address"
                            type="text"
                            name="email-address"
                            id="email-address"
                            autoComplete="email"
                            className="block w-full px-4 py-3 mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 pb-14 sm:px-10 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-white bg-red-500 border border-gray-300 rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:text-sm"
                    onClick={() => setOpen(false)}
                    //   ref={cancelButtonRef}
                  >
                    Let's Go
                  </button>
                  <button
                    type="button"
                    className="absolute z-10 p-1 text-white bg-black border-2 border-white rounded-full shadow -top-3 -right-3"
                    onClick={() => setOpen(false)}
                  >
                    <CloseButton />
                  </button>
                </div>
              </form>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

const CloseButton = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};
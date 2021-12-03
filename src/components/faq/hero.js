import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function Component({ children }) {
  return (
    <div className="bg-white">
      <div className="relative pt-6">
        {children}

        <main className="mt-6 sm:mt-10">
          <div>
            <div className="relative">
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
              <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                  <div className="absolute inset-0">
                    <StaticImage
                      width={1216}
                      className="h-full w-full object-cover"
                      src="../../images/consummation.jpeg"
                      alt="The Consummation"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-blue-700 mix-blend-multiply" />
                  </div>
                  <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                      <span className="block text-white">Frequently Asked</span>
                      <span className="block text-blue-200">Questions</span>
                    </h1>
                    <p className="mt-6 max-w-lg mx-auto text-center text-xl text-blue-200 sm:max-w-3xl">
                      You asked and we answered. Take a look at our most
                      frequently asked questions below.
                    </p>
                    <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                      <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                        <Link
                          to="/training"
                          className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-gray-50 hover:bg-blue-50 sm:px-8"
                        >
                          See How It Works
                        </Link>
                        <Link
                          to="/apply-now"
                          className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                        >
                          Apply Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Logo cloud */}
          <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8"></div>
          </div>
        </main>
      </div>
    </div>
    // <div className="relative bg-white overflow-hidden">
    //   <div
    //     className="hidden lg:block lg:absolute lg:inset-0"
    //     aria-hidden="true"
    //   >
    //     <svg
    //       className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
    //       width={640}
    //       height={784}
    //       fill="none"
    //       viewBox="0 0 640 784"
    //     >
    //       <defs>
    //         <pattern
    //           id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
    //           x={118}
    //           y={0}
    //           width={20}
    //           height={20}
    //           patternUnits="userSpaceOnUse"
    //         >
    //           <rect
    //             x={0}
    //             y={0}
    //             width={4}
    //             height={4}
    //             className="text-gray-200"
    //             fill="currentColor"
    //           />
    //         </pattern>
    //       </defs>
    //       <rect
    //         y={148}
    //         width={520}
    //         height={520}
    //         className="text-gray-50"
    //         fill="currentColor"
    //       />
    //       <rect
    //         x={118}
    //         width={404}
    //         height={784}
    //         fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
    //       />
    //     </svg>
    //   </div>

    //   <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
    //     {children}

    //     <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32">
    //       <div className="lg:grid lg:grid-cols-12 lg:gap-8">
    //         <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
    //           <h1>
    //             <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
    //               <span className="text-gray-900">Frequently Asked</span>{" "}
    //               <span className="text-blue-600">Questions</span>
    //             </span>
    //           </h1>
    //           <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
    //             You asked and we answered. See a video walkthrough and then take
    //             a look at our most frequently asked questions.
    //           </p>
    //           <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
    //             <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
    //               <div className="rounded-md shadow">
    //                 <a
    //                   href="https://go.unstarvingartists.com/training"
    //                   className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
    //                 >
    //                   See How It Works
    //                 </a>
    //               </div>
    //               <div className="mt-3 sm:mt-0 sm:ml-3">
    //                 <Link
    //                   to="/apply-now"
    //                   className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
    //                 >
    //                   Apply Now
    //                 </Link>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
    //           <svg
    //             className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
    //             width={640}
    //             height={784}
    //             fill="none"
    //             viewBox="0 0 640 784"
    //             aria-hidden="true"
    //           >
    //             <defs>
    //               <pattern
    //                 id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
    //                 x={118}
    //                 y={0}
    //                 width={20}
    //                 height={20}
    //                 patternUnits="userSpaceOnUse"
    //               >
    //                 <rect
    //                   x={0}
    //                   y={0}
    //                   width={4}
    //                   height={4}
    //                   className="text-gray-200"
    //                   fill="currentColor"
    //                 />
    //               </pattern>
    //             </defs>
    //             <rect
    //               y={72}
    //               width={640}
    //               height={640}
    //               className="text-gray-50"
    //               fill="currentColor"
    //             />
    //             <rect
    //               x={118}
    //               width={404}
    //               height={784}
    //               fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
    //             />
    //           </svg>
    //           <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
    //             <button
    //               type="button"
    //               className="relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    //             >
    //               <span className="sr-only">Watch our video to learn more</span>
    //               <img
    //                 className="w-full"
    //                 src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    //                 alt=""
    //               />
    //               <div
    //                 className="absolute inset-0 w-full h-full flex items-center justify-center"
    //                 aria-hidden="true"
    //               >
    //                 <svg
    //                   className="h-20 w-20 text-blue-500"
    //                   fill="currentColor"
    //                   viewBox="0 0 84 84"
    //                 >
    //                   <circle
    //                     opacity="0.9"
    //                     cx={42}
    //                     cy={42}
    //                     r={42}
    //                     fill="white"
    //                   />
    //                   <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
    //                 </svg>
    //               </div>
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </main>
    //   </div>
    // </div>
  );
}

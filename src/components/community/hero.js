import * as React from "react";

export default function Component({ children }) {
  return (
    <div className="relative bg-white">
      {children}

      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Join the</span>{" "}
              <span className="block text-blue-600 xl:inline">
                Unstarving Artists Community
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Want to join a community full of motivated professional and
              semi-professional artists on the same path as you?
            </p>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              The Unstarving Artists Community is a 100% FREE Facebook group for
              anyone interested in growing their art practice, earning more from
              their artwork, and improving their life.
            </p>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              You are the average sum of the five people you spend the most time
              with. By joining this free group you will rub shoulders with
              6-figure, 7-figure, and even 8-figure entrepreneurial artists, and
              their success and thinking will start rubbing off on you.
            </p>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Click the "Join Group" button to get free instant access!
            </p>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <div
            className="fb-group"
            data-href="https://www.facebook.com/groups/unstarvingartistscommunity"
            data-width="427"
            data-show-social-context="true"
            data-show-metadata="false"
          >
            <blockquote
              cite="https://www.facebook.com/groups/unstarvingartistscommunity"
              className="fb-xfbml-parse-ignore"
            >
              Unstarving Artists Community™
            </blockquote>
          </div>
        </div>
      </main>
    </div>
  );
}

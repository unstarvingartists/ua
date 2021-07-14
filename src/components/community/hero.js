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
        <div className="flex items-center justify-items-center mx-auto relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <div className="facebook-group-widget">
            <div className="facebook-group-banner">
              <img
                className="group-banner-image"
                src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-0/c0.0.569.297/p320x320/31306849_2082238448682891_7452725349072240640_n.jpg?_nc_cat=0&amp;oh=b78b3eecda9ae7d496fc588680206fa2&amp;oe=5B9B6A1B"
                alt=""
              />
            </div>
            <div className="facebook-group-title">
              <h4>Unstarving Artists Community™</h4>
              <h6>Facebook Group · 100's of members</h6>
            </div>
            <div className="facebook-group-join-cta">
              <a
                className="button expanded no-utm"
                href="https://www.facebook.com/plugins/group/join/popup/?group_id=1102408969900298&amp;source=email_campaign_plugin"
                target="_blank"
                rel="noopener"
              >
                <img
                  width="16"
                  src="https://facebook.com/images/groups/plugin/email/app_fb_32_fig_white.png"
                />
                &nbsp; Join Group
              </a>
            </div>
            <div className="facebook-group-description">
              <p>
                Welcome to the Consulting Community™. This is the official
                Facebook group for both fans and customers of Consulting.com and
                Sam Ovens. Anybody can join.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

import React from "react";

export default function Hero({ heading, children, subheading }) {
  return (
    <div className="relative overflow-hidden">
      <div className="relative pt-10 pb-4">
        {children}
        <main className="max-w-6xl px-4 mx-auto">
          <div className="mx-auto text-xl md:leading-tight md:text-[44px] text-center max-w-7xl pt-6 sm:pt-12">
            {heading}
            <p className="text-sm font-bold text-red-500 md:text-lg">
              {subheading}
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

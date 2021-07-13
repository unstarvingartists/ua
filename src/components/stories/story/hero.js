import React, { useEffect } from "react";
import { InlineShareButtons } from "sharethis-reactjs";

export default function Component({ mdx, children, site, pathname }) {
  const wistia = `<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_${mdx.frontmatter.videoID} videoFoam=true playerColor=2564eb" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/${mdx.frontmatter.videoID}/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>`;

  useEffect(() => {
    const script1 = document.createElement("script");
    const script2 = document.createElement("script");

    script1.src = `https://fast.wistia.com/embed/medias/${mdx.frontmatter.videoID}.jsonp`;
    script1.async = true;

    script2.src = "https://fast.wistia.com/assets/external/E-v1.js";
    script2.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);
  });

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
        </div>
      </div>
      <div className="relative pt-6 pb-16 sm:pb-20 lg:pb-20 px-4 sm:px-6 lg:px-8">
        {children}
        <div className="text-lg max-w-prose mx-auto pt-10">
          <h1>
            <span className="block text-base text-center text-blue-600 font-semibold tracking-wide uppercase">
              Student Story
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {mdx.frontmatter.student.name}
            </span>
          </h1>
          <p className="text-xl text-gray-500 text-center leading-8">
            {mdx.frontmatter.genre} · {mdx.frontmatter.country}
          </p>
        </div>
        <div className="my-6 prose prose-blue prose-lg text-gray-500 mx-auto">
          <div dangerouslySetInnerHTML={{ __html: wistia }}></div>
        </div>
        <InlineShareButtons
          config={{
            alignment: "center",
            color: "white",
            enabled: true,
            font_size: 11,
            labels: "cta",
            language: "en",
            networks: [
              "facebook",
              "twitter",
              "email",
              "sms",
              "linkedin",
              "messenger",
            ],
            padding: 8,
            radius: 4,
            size: 32,

            message: `${site.siteMetadata.siteURL + pathname}`,
            subject: `Check out this artist: ${mdx.frontmatter.student.name}`,
            username: "@therealharryw",
          }}
        />
      </div>
    </div>
  );
}

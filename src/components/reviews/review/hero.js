import React, { useEffect } from "react";
import { Link } from "gatsby";

export default function Component({ mdx, children, site, pathname }) {
  const videoEmbed = `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/${mdx.frontmatter.videoID}?h=${mdx.frontmatter.hashID}&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>`;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://player.vimeo.com/api/player.js";
    document.body.appendChild(script);

    if (
      typeof window.__sharethis__ !== "undefined" &&
      typeof window.__sharethis__.initialize !== "undefined"
    ) {
      window.__sharethis__.initialize();
    }
  });

  let ctaLink;
  if (mdx.frontmatter.blogHref) {
    ctaLink = (
      <Link
        to={mdx.frontmatter.blogHref}
        target="_blank"
        rel="noreferrer"
        className="text-base font-medium text-emerald-600 underline"
      >
        {" "}
        Watch {mdx.frontmatter.student.name.split(" ", 1)}'s Full Interview{" "}
        <span aria-hidden="true">&rarr;</span>{" "}
      </Link>
    );
  } else {
    ctaLink = (
      <a
        href="https://instagram.com/harrywhelchel/"
        target="_blank"
        rel="noreferrer"
        className="text-base font-medium text-emerald-600 underline"
      >
        {" "}
        Follow Us On Instagram For Art Income Tips & Tricks{" "}
        <span aria-hidden="true">&rarr;</span>{" "}
      </a>
    );
  }

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
            <span className="block text-base text-center text-emerald-600 font-semibold tracking-wide uppercase">
              Student Review
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {mdx.frontmatter.student.name}
            </span>
          </h1>
          <p className="text-xl text-gray-500 text-center leading-8">
            {mdx.frontmatter.genre} · {mdx.frontmatter.country}
          </p>
        </div>
        <div className="my-6 prose prose-emerald prose-lg text-gray-500 mx-auto">
          <div dangerouslySetInnerHTML={{ __html: videoEmbed }}></div>
        </div>
        <div className="sharethis-inline-share-buttons" />
        <div className="mt-3 text-center">{ctaLink}</div>
      </div>
    </div>
  );
}

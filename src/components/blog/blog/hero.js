import React from "react";

export default function Component({ mdx, children, site, pathname }) {
  const youtube = `<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed//${mdx.frontmatter.videoID}' frameborder='0' allowfullscreen></iframe></div>`;

  useEffect(() => {
    window.__sharethis__.initialize();
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
              {mdx.frontmatter.category.name}
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {mdx.frontmatter.title}
            </span>
          </h1>
          <p className="text-xl text-gray-500 text-center leading-8">
            {mdx.frontmatter.author.name}
          </p>
        </div>
        <div className="my-6 prose prose-blue prose-lg text-gray-500 mx-auto">
          <div dangerouslySetInnerHTML={{ __html: youtube }}></div>
        </div>
        <div className="sharethis-inline-share-buttons" />
        <div className="mt-3 text-center">
          <a
            href="https://www.facebook.com/groups/unstarvingartistscommunity"
            target="_blank"
            rel="noreferrer"
            className="text-base font-medium text-blue-600 underline"
          >
            {" "}
            Join Our FREE Facebook Group For Artists{" "}
            <span aria-hidden="true">&rarr;</span>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

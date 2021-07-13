import * as React from "react";

const transcript = `
- Hello everybody. My name is Oliver Hojas and I'm an abstract artist. Here's one of my paintings and in this video I wanna share with you how it was before working with Harry and how it is now after working with Harry for one month. So before I was working with Harry I was making money with my art but very unpredictable. So in 2019 I made 15,000 Swiss Francs within six months So in 2019 I made 15,000 Swiss Francs within six months which was huge for me. After that I took a break, that was in December. And then I raised my prices but didn't know how I should go about to sell my artworks for these high prices. I knew the way I sold them before won't work. So what I did was sabotaging myself and I basically didn't sell anything anymore. So for... So for... Actually until April this year I didn't sell anything. Then I started working with Harry and I made sales again. I started selling my artworks again. So in April I started with a little but still I made some money and then in May which is now, I had made 6,000 Swiss Francs and that was mind-blowing for me. But it also feels like that's just the beginning because I know my goal and now I also see that it is possible. And mostly what I learned is that I had... You can have a system where you make consistent money every month. So what most people do, they just try to sell here and there and it's more a luck game. That's how it was for me. So I was writing people on Facebook. I was telling them the prices immediately. Most people ignored me. I felt bad. I made posts on Facebook where I got a lot of likes. Many people seemed interested like 100s of likes on my artworks but I didn't sell anything because most people asked me for the price, I reply them with the price, they ignore me. So it was actually very, very frustrating. Now I know what I need to do. Now I know that I need to bring them to a call. I knew that before as well but I just was too shy and didn't know how. Because when I brought them to a call, when I asked them to have a call with me or told them "Let's jump on a call", they were ignoring me again, so something was just not right and I knew that, I just didn't know, yeah, what it is. So Harry really brought light into the darkness and showed me what was wrong, how do I need to do it, how do I need to contact people, how do I need to connect to them. What are the things you write and... So basically it's like a system that I got now on my way, that I can use everyday and get leads, convert the leads to clients and so on and so forth. So actually for me it has been amazing. I'm super grateful. I'm happy to keep working with Harry because I know there is so much more Yeah really, starting from here to this is mind blowing because every artist would like to sell his paintings for as much as 4,000 as I just did yesterday. That's my highest sold painting so far and that's also because of Harry. Harry told me for how much I should sell it. Before then I would have sold this painting maybe for 2,500, maybe 2,800 and that would be already high for me but I sold it for 4,000. So thank you so much Harry, thank you for listening everybody. I really can recommend Harry for everybody especially also for artists because artists they try to do things on their own, they use old school methods and systems and I know how it is as an artist, you think like this won't work because you're an artist you're so special but actually it does work because those are sales and marketing skills and people skills so try it out. I can recommend Harry 100%. For me it worked and I know it will work for everybody that puts in the energy, the effort and the time. Thank you so much.
`;
const sentences = transcript.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");

const chunkSentences = sentences.slice(4);
let i = 0,
  j = chunkSentences.length,
  chunks = [],
  chunk = 4;
for (i = 0, j = chunkSentences.length; i < j; i += chunk) {
  chunks.push(chunkSentences.slice(i, i + chunk));
}

export default function Component() {
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
          <svg
            className="absolute bottom-12 left-full transform translate-x-32"
            width={404}
            height={384}
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
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
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-blue-600 font-semibold tracking-wide uppercase">
              Video
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Transcript
            </span>
          </h1>
          <p className="mt-8 text-xl text-gray-500 leading-8">
            {sentences.slice(0, 4).join(" ")}
          </p>
        </div>
        <div className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto">
          {chunks.map((chunk, index) => {
            return <p key={index}>{chunk.join(" ")}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

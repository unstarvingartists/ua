import React from "react";
import Wistia from "./wistia";
const examples = [
  {
    link: "https://go.unstarvingartists.com/case-studies1#tmp_customjs-57359",
    text: "🍿 Oliver Hojas - Abstract Artist - €0 to €25,800 in 60 days",
    image:
      "https://images.clickfunnels.com/03/e9989d4bcf4fac8e9216af766c7a2c/oliver.png",
    video: "wnney1gjx8",
  },
  {
    link: "https://go.unstarvingartists.com/case-studies1#tmp_customjs-16359",
    text: "🍿 Lauren Satok - Landscapes - $15,700 in less than 60 days",
    image:
      "https://images.clickfunnels.com/11/cb72ffbe6d4971aa6694324f17f501/Screen-Shot-2021-07-24-at-10.12.08-PM.png",
    video: "nb82b9tb3l",
  },
  {
    link: "https://go.unstarvingartists.com/case-studies1#customjs-31705",
    text: "🍿 Michael Gibson - Graphite Mixed Media Artist - $800 to $9,000 in 60 days",
    image:
      "https://images.clickfunnels.com/8f/771e6f4ce5492bacdbb8a6e7c75f9c/Screen-Shot-2021-06-15-at-4.33.25-PM.png",
    video: "im2rqpk4r6",
  },
  {
    link: "https://go.unstarvingartists.com/case-studies1#tmp_customjs-16090",
    text: "🍿 Bryce Tubbs - Metalworking Sculpture - $0 to $11,700/mo in 7 days",
    image:
      "https://images.clickfunnels.com/ee/1ec667299e4fbcbc7a997448c950e8/Screen-Shot-2021-08-02-at-11.22.32-PM.png",
    video: "jcbrnyr35y",
  },
  {
    link: "https://go.unstarvingartists.com/case-studies1#customjs-82203",
    text: "🍿 Sharif Carter - Pop Commission Artist - $0 to $6,500 in 30 days",
    image:
      "https://images.clickfunnels.com/23/08040fa6cc47c3b003dd63bbc25693/Screen-Shot-2021-06-10-at-7.11.23-AM.png",
    video: "ry5ww6jjxz",
  },
  {
    link: "https://go.unstarvingartists.com/case-studies1#customjs-69876",
    text: "🍿 Alexandra Saunders - Wildlife Portraits - $0 to $2k/mo in 60 days",
    image:
      "https://images.clickfunnels.com/3c/f32e6a6ff448c192f31d017323fc06/Screen-Shot-2021-08-03-at-3.39.14-PM.png",
    video: "9pmuk5qfz9",
  },
  {
    link: "https://go.unstarvingartists.com/case-studies1#tmp_customjs-89050",
    text: "🍿 Kate Padget-Koh - Commission Artist - $0 to $3k painting sold in 30 days",
    image:
      "https://images.clickfunnels.com/f0/7a36b25d954db598109e3b935a712a/Screen-Shot-2021-03-23-at-11.37.05-AM.png",
    video: "vkdazh0x71",
  },
  {
    link: "https://go.unstarvingartists.com/case-studies1#tmp_customjs-99065",
    text: "🍿 Ehab Omaro - Syrian Refugee Artist - €3,000 in art sales in 1 month",
    image:
      "https://images.clickfunnels.com/74/0f7382ce974164b2cc2b70822c2797/Screen-Shot-2021-06-02-at-12.54.14-PM.png",
    video: "6iq3mp56xi",
  },
  {
    link: null,
    text: "Kate Mayer - Original UK Artist - Selling paintings for more than £1,000",
    image:
      "https://images.clickfunnels.com/58/913f4b339443649496b09f6f8d58fd/Screen-Shot-2021-03-23-at-11.34.55-AM.png",
    video: null,
  },
];
export default function Examples({ showVideo, withoutLink }) {
  return (
    <div className="flex flex-col items-center max-w-2xl py-4 mx-auto space-y-10 text-center md:space-y-20 md:py-6">
      {examples.map((item, i) => {
        const { link, text, image, video } = item;
        return (
          <div key={i}>
            {!withoutLink && link !== null ? (
              <a
                className="inline-block mb-2 text-lg font-bold text-blue-500 hover:underline"
                href={link}
              >
                {text}
              </a>
            ) : (
              <p className="inline-block mb-2 text-lg font-bold ">{text}</p>
            )}

            <img src={image} alt="" className="px-4" />
            {showVideo && video !== null && <Wistia id={video} />}
          </div>
        );
      })}
    </div>
  );
}

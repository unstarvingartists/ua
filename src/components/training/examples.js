import React from "react";
import Wistia from "./wistia";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const examples = [
  {
    link: "/case-studies#lauren-satok",
    id: "lauren-satok",
    text: "🍿 Lauren Satok - Landscapes - $15,700 in less than 60 days",
    src: "case-studies/satok.png",
    video: "nb82b9tb3l",
  },
  {
    link: "/case-studies#michael-gibson",
    id: "michael-gibson",
    text: "🍿 Michael Gibson - Graphite Mixed Media Artist - $800 to $9,000 in 60 days",
    src: "case-studies/michael.png",
    video: "im2rqpk4r6",
  },
  {
    link: "/case-studies#bryce-tubbs",
    id: "bryce-tubbs",
    text: "🍿 Bryce Tubbs - Metalworking Sculpture - $0 to $11,700/mo in 7 days",
    src: "case-studies/bryce.png",
    video: "jcbrnyr35y",
  },
  {
    link: "/case-studies#sharif-carter",
    id: "sharif-carter",
    text: "🍿 Sharif Carter - Pop Commission Artist - $0 to $6,500 in 30 days",
    src: "case-studies/sharif.png",
    video: "ry5ww6jjxz",
  },
  {
    link: "/case-studies#alexandra-saunders",
    id: "alexandra-saunders",
    text: "🍿 Alexandra Saunders - Wildlife Portraits - $0 to $2k/mo in 60 days",
    src: "case-studies/alexandra.png",
    video: "9pmuk5qfz9",
  },
  {
    link: "/case-studies#kate-padget-koh",
    id: "kate-padget-koh",
    text: "🍿 Kate Padget-Koh - Commission Artist - $0 to $3k painting sold in 30 days",
    src: "case-studies/kate.png",
    video: "vkdazh0x71",
  },
  {
    link: "/case-studies#ehab-omaro",
    id: "ehab-omaro",
    text: "🍿 Ehab Omaro - Syrian Refugee Artist - €3,000 in art sales in 1 month",
    src: "case-studies/ehab.png",
    video: "6iq3mp56xi",
  },
  {
    link: null,
    id: null,
    text: "Kate Mayer - Original UK Artist - Selling paintings for more than £1,000",
    src: "case-studies/katemayer.png",
    video: null,
  },
];

export default function Examples({ showVideo, withoutLink, hidePlaybar }) {
  const {
    allFile: { edges },
  } = useStaticQuery(graphql`
    query examplesQuery {
      allFile(filter: { relativeDirectory: { eq: "case-studies" } }) {
        edges {
          node {
            id
            relativePath
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  examples.map((item) => {
    const { node: source } = edges.find(
      ({ node: { relativePath } }) => relativePath === item.src
    );
    return (item.image = getImage(source));
  });

  return (
    <div className="flex flex-col items-center max-w-2xl py-4 mx-auto space-y-10 text-center md:space-y-20 md:py-6">
      {examples.map((item, i) => {
        const { link, text, video, id, image } = item;
        return (
          <div key={i}>
            {!withoutLink && link !== null ? (
              <Link
                className="inline-block px-3 mb-2 font-bold text-blue-500 md:px-0 md:text-lg md:whitespace-nowrap hover:underline"
                to={link}
              >
                {text}
              </Link>
            ) : (
              <p className="inline-block px-3 mb-2 font-bold md:px-0 md:text-lg md:whitespace-nowrap ">
                {text}
              </p>
            )}
            <GatsbyImage
              loading="eager"
              imgStyle={{ objectFit: "contain" }}
              image={image}
              alt=""
              className="px-4"
            />
            {showVideo && video !== null && (
              <div id={id} className="px-4 md:px-0">
                <Wistia hidePlaybar={hidePlaybar} id={video} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

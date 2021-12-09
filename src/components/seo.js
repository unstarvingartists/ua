import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({
  description,
  lang,
  meta,
  image: metaImage,
  title,
  pathname,
  noIndex = false,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            titleTemplate
            description
            author
            keywords
            siteUrl
            image
            twitter {
              creator
              site
            }
            metaImage {
              height
              width
            }
          }
        }
      }
    `
  );

  metaImage ||= {};
  metaImage.src ||= site.siteMetadata.image;
  metaImage.height ||= site.siteMetadata.metaImage.height;
  metaImage.width ||= site.siteMetadata.metaImage.width;

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const image =
    metaImage && metaImage.src
      ? `${site.siteMetadata.siteUrl}${metaImage.src}`
      : null;
  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null;

  let defaultMeta = [
    {
      name: `description`,
      content: metaDescription,
    },
    {
      name: "keywords",
      content: site.siteMetadata.keywords.join(","),
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: metaDescription,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `og:url`,
      content: canonical,
    },
    {
      name: `twitter:creator`,
      content: site.siteMetadata.twitter.creator,
    },
    {
      name: `twitter:site`,
      content: site.siteMetadata.twitter.site,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: metaDescription,
    },
  ];

  if (noIndex) {
    defaultMeta = defaultMeta.concat([
      {
        name: "robots",
        content: "noindex, nofollow, noimageindex",
      },
      {
        name: "googlebot",
        content: "noindex, nofollow, noimageindex",
      },
    ]);
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `${site.siteMetadata.titleTemplate}` : null}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      }
      meta={defaultMeta
        .concat(
          metaImage
            ? [
                {
                  property: "og:image",
                  content: image,
                },
                {
                  property: "og:image:width",
                  content: metaImage.width,
                },
                {
                  property: "og:image:height",
                  content: metaImage.height,
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image",
                },
              ]
            : [
                {
                  name: "twitter:card",
                  content: "summary",
                },
              ]
        )
        .concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  pathname: PropTypes.string,
};

export default SEO;

const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve(`src/templates/blog.js`);
  const reviewTemplate = path.resolve(`src/templates/review.js`);

  return graphql(
    `
      query loadPagesQuery {
        allMdx {
          nodes {
            frontmatter {
              href
              category {
                name
              }
            }
            id
            internal {
              contentFilePath
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    result.data.allMdx.nodes.forEach((node) => {
      const slug = node.frontmatter.href;
      const categoryName = node.frontmatter.category.name;
      const id = node.id;

      if (categoryName === "Blog Post") {
        createPage({
          path: slug,
          component: `${blogTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
          context: { id },
        });
      } else if (categoryName === "Student Review") {
        createPage({
          path: slug,
          component: `${reviewTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
          context: { id },
        });
      }
    });
  });
};

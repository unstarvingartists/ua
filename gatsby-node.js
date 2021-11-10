const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve(`src/templates/blog.js`);
  const reviewTemplate = path.resolve(`src/templates/review.js`);

  return graphql(
    `
      query loadPagesQuery {
        allMdx {
          edges {
            node {
              frontmatter {
                href
                category {
                  name
                }
              }
              id
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    result.data.allMdx.edges.forEach((edge) => {
      const slug = edge.node.frontmatter.href;
      const categoryName = edge.node.frontmatter.category.name;
      const id = edge.node.id;

      if (categoryName === "Blog Post") {
        createPage({
          path: slug,
          component: blogTemplate,
          context: { id },
        });
      } else if (categoryName === "Student Review") {
        createPage({
          path: slug,
          component: reviewTemplate,
          context: { id },
        });
      }
    });
  });
};

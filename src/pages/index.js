import React from "react";
import { graphql } from "gatsby";

export default ({
  data: {
    allFile: { edges },
  }
}) => {
  console.log(edges);
  return (
    <div>Hello world!</div>
  );
}

export const pageQuery = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "work"}}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              date
              path
              title
            }
            id
            excerpt(pruneLength: 250)
          }
        }
      }
    }
  }
`;
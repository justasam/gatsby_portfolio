import React from "react";
import { graphql } from "gatsby";

export default ({
  data: {
    allFile: { edges },
  }
}) => {
  console.log(edges);

  return (
    <div>
      <div style={{
        textAlign: 'center',
        marginTop: 20,
        display: 'inline-block',
        position: 'relative',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
        <h3 style={{
          fontSize: 24,
          position: 'relative'
        }}>JUSTASAM.GITHUB.IO</h3>
        <h4 style={{
          fontSize: 24,
          fontWeight: 100,
          backgroundColor: '#F7FF00',
          color: '#878787',
          display: 'inline-block',
          position: 'absolute',
          bottom: -8,
          right: -14,
          zIndex: -1
        }}>/work</h4>
      </div>
      <div>Hello world!</div>
    </div>
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
              images
              tags
            }
            id
            excerpt(pruneLength: 250)
          }
        }
      }
    }
  }
`;
import React from "react";
import { graphql } from "gatsby";

import Wrap from "../components/layout/main/wrap";

export default function Post({ data }) {
  const post = data.allBludit.edges[0].node;
  return (
    <Wrap>
      <div>
        <h1>{post.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: post.content
              .replaceAll("/bl-content", "https://pilab.dev/bl-content")
              .replaceAll("/images", "https://pilab.dev/images")
              .replaceAll("data-src", "src"),
          }}
        />
      </div>
    </Wrap>
  );
}

export const query = graphql`
  query ($slug: String!) {
    allBludit(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          content
        }
      }
    }
  }
`;
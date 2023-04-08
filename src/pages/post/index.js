import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import {
  card,
  cardTitle,
  cardTime,
  cardButton
} from "../../components/postlist.module.scss";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id} className={card}>
          <h2 className={cardTitle}>{node.frontmatter.title}</h2>
          <p className={cardTime}>Posted: {node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
          <Link className={cardButton} to={`/post/${node.frontmatter.slug}`}>Read More</Link>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "YYYY/MM/D")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title="Posts" />;
export default BlogPage;

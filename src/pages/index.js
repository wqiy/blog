import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt=""
        src="https://images.unsplash.com/photo-1680430108970-af82545154a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      />
      <StaticImage alt="" src="../images/image1.avif" />
    </Layout>
  );
};

export const Head = () => <Seo title="Home" />;
export default IndexPage;

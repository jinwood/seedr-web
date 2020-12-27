import * as React from "react";
import HomepageForm from "../components/HomepageForm";
import Layout from "../components/HomepageForm/layout";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

const headingStyles = {};

const IndexPage = () => {
  return (
    <Layout>
      <title>Home Page</title>
      <h1 style={headingStyles}>
        Plantr
        <br />
      </h1>
      <HomepageForm />
    </Layout>
  );
};

export default IndexPage;

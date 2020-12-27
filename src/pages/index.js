import * as React from "react";
import HomepageForm from "../components/HomepageForm";
import Layout from "../components/HomepageForm/layout";

const IndexPage = () => {
  return (
    <Layout>
      <title>Home Page</title>
      <h1>
        Plantr
        <br />
      </h1>
      <HomepageForm />
    </Layout>
  );
};

export default IndexPage;

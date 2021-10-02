import React from "react";
import Layout from "../components/layout";
import {StaticImage} from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage alt="Picture of a Peugeot 206 WRC" src="../images/peugeot206wrc.jpeg" />
    </Layout>
  )
}

export default IndexPage
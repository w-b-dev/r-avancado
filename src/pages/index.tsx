import React from "react";
import AppMain from "../components/Main";
import Head from "next/head";

const Home = () => (
  <div>
    <Head>
      <title>React Avancado</title>
      <link rel="icon" href="images/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="images/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="images/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="images/favicon-16x16.png"
      />
      <link rel="manifest" href="images/site.webmanifest" />
    </Head>
    <AppMain>
      <h2>I am body</h2>
    </AppMain>
  </div>
);
export default Home;

import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/layout";
import HomeContainer from "@/containers/index";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gimnasio Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HomeContainer />
      </Layout>
    </>
  );
}

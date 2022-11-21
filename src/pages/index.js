import Head from "next/head";
import Link from "next/link";
import HomeContainer from "@/containers/index";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gimnasio Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContainer />
      <div className="h-[200px]"></div>
      <Footer />
    </>
  );
}

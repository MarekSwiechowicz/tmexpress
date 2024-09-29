import Header from "@/components/Header";
import Navbar from "@/components/Navbar/NavBar";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>TMExpress</title>
        <meta name="description" content="TMExpress" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header></Header> */}
      <main className="bg-white">
        <Navbar></Navbar>
      </main>
    </>
  );
}

import Head from "next/head";

import Navbar from "../components/Navbar";
import Login from "../components/login/login";

export default function Home() {
  return (
    <>
      <Head>
        <title>Codremex - Login</title>
      </Head>
      <main>
        <Navbar />
        <Login />
      </main>
    </>
  );
}

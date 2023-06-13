import Head from "next/head";
import Navbar from "../components/Navbar";
import GetUser from "../components/dashboard/GetUser";
import Logout from "../components/dashboard/Logout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Codremex</title>
      </Head>
      <main>
        <Navbar />
        <h1>DASHBOARD</h1>
        <GetUser />
        <Logout />
      </main>
    </>
  );
}

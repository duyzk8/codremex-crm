import Head from "next/head";
import Productos from "../components/productos/ListaProductos"
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Head>
        <title>CODREMEX - Productos</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Productos/>
      </main>
    </>
  );
}

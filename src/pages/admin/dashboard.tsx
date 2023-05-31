import Head from "next/head";
import Navbar from "src/components/admin/Navbar";
import Dashboard from "src/components/admin/Dashboard";
import Logout from "src/components/dashboard/Logout";
import Sidebar from "src/components/admin/Sidebar"

export default function Home() {
  return (
    <>
      <Head>
        <title>Admin</title>
      </Head>
        <main>
        <Navbar />
        <Dashboard />
        <Logout />
        </main>
        
      
    </>
  );
}
 
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/NavBar";
import Image from "next/image";

export const metadata = {
  title: "TMExpress",
  description: "TMExpress",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = "width=device-width, initial-scale=1";

export default function Home() {
  return (
    <>
      <main className="bg-white">
        <Navbar></Navbar>
        <div>123</div>
        <Footer></Footer>
      </main>
    </>
  );
}

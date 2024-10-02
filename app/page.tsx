import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/NavBar";
import Onas from "@/components/Onas";
import Partners from "@/components/Partners";
import Testimonial from "@/components/Testimonial";
import Truck from "@/components/truck";
import Uslugi from "@/components/Uslugi";

export const viewport = "width=device-width, initial-scale=1";

export default function Home() {
  return (
    <>
      <main className="bg-white">
        <Navbar></Navbar>
        <Onas></Onas>
        <Truck></Truck>
        <Uslugi></Uslugi>
        <Testimonial></Testimonial>
        <Partners></Partners>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </>
  );
}

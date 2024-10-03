import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/NavBar";
import Onas from "@/components/Onas";
import Partners from "@/components/Partners";
import TestimonialCarusel from "@/components/TestimonialCarusel";
import Truck from "@/components/truck";
import Uslugi from "@/components/Uslugi";
import WrapperComponent from "@/components/WrapperComponent";

export const viewport = "width=device-width, initial-scale=1";

export default function Home() {
  return (
    <>
      <main className="bg-white">
        <WrapperComponent>
          <Navbar></Navbar>
          <Onas></Onas>
          <Achievements></Achievements>
        </WrapperComponent>
        <Truck></Truck>
        <Uslugi></Uslugi>
        <TestimonialCarusel></TestimonialCarusel>
        <Partners></Partners>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </>
  );
}

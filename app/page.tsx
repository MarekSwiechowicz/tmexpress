import Achievements from "@/components/Achievements";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/NavBar";
import Onas from "@/components/Onas";
import ParkingImage from "@/components/ParkingImage";
import Partners from "@/components/Partners";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Truck from "@/components/truck";
import Uslugi from "@/components/Uslugi";

export default function Home() {
  return (
    <>
      <main className="bg-white">
        <Navbar></Navbar>
        <Onas></Onas>
        <Achievements></Achievements>
        <Truck></Truck>
        <Uslugi></Uslugi>
        <TestimonialCarousel></TestimonialCarousel>
        <ParkingImage></ParkingImage>
        <Partners></Partners>
        <ContactForm></ContactForm>
        <Footer></Footer>
        <ScrollToTopButton></ScrollToTopButton>
      </main>
    </>
  );
}

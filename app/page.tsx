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
import WrapperComponent from "@/components/WrapperComponent";

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
        <WrapperComponent>
          <TestimonialCarousel></TestimonialCarousel>
        </WrapperComponent>

        <ParkingImage></ParkingImage>
        <WrapperComponent>
          <Partners></Partners>
          <ContactForm></ContactForm>
        </WrapperComponent>
        <Footer></Footer>
        <ScrollToTopButton></ScrollToTopButton>
      </main>
    </>
  );
}

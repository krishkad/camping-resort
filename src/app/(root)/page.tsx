import Booking from "@/components/shared/Booking";
import CampListing from "@/components/shared/CampListing";
import Contact from "@/components/shared/Contact";
import DailySchedule from "@/components/shared/DailySchedule";
import Facilities from "@/components/shared/Facilities";
import Footer from "@/components/shared/Footer";
import GallerySection from "@/components/shared/GallerySection";
import Hero from "@/components/shared/Hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <CampListing />
      <DailySchedule />
      <GallerySection />
      {/* <Pricing /> */}
      <Facilities />
      <Booking />
      <Contact />
      <Footer />
    </div>
  );
}

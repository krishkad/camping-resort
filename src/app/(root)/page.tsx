import Hero from "@/components/shared/Hero";
import CampListing from "@/components/shared/CampListing";
import Pricing from "@/components/shared/Pricing";
import DailySchedule from "@/components/shared/DailySchedule";
import Facilities from "@/components/shared/Facilities";
import Contact from "@/components/shared/Contact";
import Booking from "@/components/shared/Booking";
import Footer from "@/components/shared/Footer";
import GallerySection from "@/components/shared/GallerySection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <CampListing />
      <DailySchedule />
      <GallerySection />
      <Pricing />
      <Facilities />
      <Booking />
      <Contact />
      <Footer />
    </div>
  );
}

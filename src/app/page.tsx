import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import VideoReviews from "@/components/VideoReviews";
import SessionGallery from "@/components/SessionGallery";
import About from "@/components/About";
import Contact from "@/components/Contact";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-pink-100 selection:text-pink-900">
      <Navbar />
      <Hero />
      <Services />
      <VideoReviews />
      <SessionGallery />
      <About />
      <Contact />
      <WhatsAppWidget />
      <Footer />
    </main>
  );
}

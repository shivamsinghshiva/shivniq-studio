"use client";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Trusted from "@/components/home/Trusted";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Stats from "@/components/home/Stats";
import Portfolio from "@/components/home/Portfolio";
import TechStack from "@/components/home/TechStack";
import Testimonials from "@/components/home/Testimonials";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Trusted />
      <Services />
      <WhyChooseUs />
      <Stats />
      <Portfolio />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}
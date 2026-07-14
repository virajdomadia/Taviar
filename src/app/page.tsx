import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Why from "@/components/Why";
import Products from "@/components/Products";
import Certifications from "@/components/Certifications";
import Partner from "@/components/Partner";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <Why />
      <Products />
      <Certifications />
      <Partner />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

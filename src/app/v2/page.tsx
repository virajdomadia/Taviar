import Navbar from "@/components/v2/Navbar";
import Hero from "@/components/v2/Hero";
import Ticker from "@/components/v2/Ticker";
import About from "@/components/v2/About";
import Why from "@/components/v2/Why";
import Products from "@/components/v2/Products";
import Certifications from "@/components/v2/Certifications";
import Partner from "@/components/v2/Partner";
import FAQ from "@/components/v2/FAQ";
import Contact from "@/components/v2/Contact";
import Footer from "@/components/v2/Footer";

export default function V2Home() {
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

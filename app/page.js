import WhyChoose from "@/components/WhyChoose";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Products from "@/components/Products";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
<<<<<<< HEAD
=======
import FeaturesSection from "@/components/FeaturesSection";
>>>>>>> dda00465d548745ad5146b527bf5e6a29fa0f11d
// import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
<<<<<<< HEAD
      <Features />
      <Benefits />
      <WhyChoose/>
      <Process />
      <Products />
      <Projects/>
=======
      <FeaturesSection/>
      <Products />
      <Projects/>
      <Features />
      {/* <Benefits /> */}
      <WhyChoose/>
      <Process />
>>>>>>> dda00465d548745ad5146b527bf5e6a29fa0f11d
      <Testimonials/>
      <FAQ/>
      <CTA />
      {/* <Contact /> */}
    </main>
  );
}

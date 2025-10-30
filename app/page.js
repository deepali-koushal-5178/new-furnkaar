
import Benefits from "./components/Benefits";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Products from "./components/Products";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import WhyChoose from "./components/WhyChoose";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <Process />
      <WhyChoose/>
      <Benefits />
      <Products />
      <Projects/>
      <Testimonials/>
      <FAQ/>
      <CTA />
      <Contact />
    </main>
  );
}

"use client";

import { LangProvider } from "@/components/LangContext";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Products from "@/components/Products";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import WhyChoose from "@/components/WhyChoose";
import Process from "@/components/Process";
import FeaturesSection from "@/components/FeaturesSection";

export default function ClientHome({ dict = {}, lang = "en" }) {
  return (
    <LangProvider initialLang={lang} dict={dict}>
      <main>
        <Hero />
        <FeaturesSection />
        <Products />
        <Projects />
        <Features />
        <WhyChoose />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
    </LangProvider>
  );
}

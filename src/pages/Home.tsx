import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Testimonials } from "../components/Testimonials";
import { CtaSection } from "../components/CtaSection";
import { Contact } from "../components/Contact";

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <CtaSection />
      <Contact />
    </>
  );
}

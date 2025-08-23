// src/app/page.jsx
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Services from "@/components/service/Services";
import Feature from "@/components/feature/Feature";
import CaseStudies from "@/components/caseStudies/caseStudies";
import Faqs from "@/components/faqs/Faqs";
import Team from "@/components/team/Team";
import Testimonials from "@/components/testimonials/Testimonials";
import Newsletter from "@/components/newsletter/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About id="about" />
      <Services id="services" />
      <Feature id="feature" />
      <CaseStudies id="case" />
      <Faqs id="faqs" />
      <Team id="team" />
      <Testimonials id="testimonials" />
      <Newsletter />
    </>
  );
}

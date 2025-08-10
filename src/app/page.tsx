import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import AboutPreview from "@/components/sections/AboutPreview";
import Expertise from "@/components/sections/Expertise";
import Stats from "@/components/sections/Stats";
import ProjectsShowcase from "@/components/sections/ProjectsShowcase";
import ServiceAreas from "@/components/sections/ServiceAreas";
import Testimonials from "@/components/sections/Testimonials";
import ContactCta from "@/components/sections/ContactCta";
import GetStartedCTA from "@/components/sections/GetStartedCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <AboutPreview />
      <Expertise />
      <Stats />
      <ProjectsShowcase />
      <ServiceAreas />
      <Testimonials />
      <GetStartedCTA />
      <ContactCta />
    </main>
  );
}

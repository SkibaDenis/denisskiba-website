import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FlagshipCase from "@/components/FlagshipCase";
import Services from "@/components/Services";
import PortfolioGrid from "@/components/PortfolioGrid";
import ExperienceReviews from "@/components/ExperienceReviews";
import WorkflowSteps from "@/components/WorkflowSteps";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FlagshipCase />
        <Services />
        <PortfolioGrid />
        <ExperienceReviews />
        <WorkflowSteps />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

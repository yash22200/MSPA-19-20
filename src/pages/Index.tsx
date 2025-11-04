import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Technologies from "@/components/Technologies";
import Features from "@/components/Features";
import FutureScope from "@/components/FutureScope";
import Developer from "@/components/Developer";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <HowItWorks />
      <Technologies />
      <Features />
      <FutureScope />
      <Developer />
      <Footer />
    </div>
  );
};

export default Index;
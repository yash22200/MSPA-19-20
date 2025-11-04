import { Button } from "@/components/ui/button";
import { ArrowRight, Wifi } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-hero opacity-95 z-10" />
        <img 
          src={heroImage} 
          alt="Smart IoT waste management technology"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-32 text-center">
        <div className="flex items-center justify-center mb-6 animate-fade-in">
          <Wifi className="w-6 h-6 text-secondary mr-2" />
          <span className="text-secondary font-semibold tracking-wide uppercase text-sm">
            IoT-Powered Waste Management
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-slide-up font-['Space_Grotesk']">
          Smart Garbage Bin
          <br />
          <span className="bg-gradient-secondary bg-clip-text text-transparent">
            Fill Level Notifier
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Real-time monitoring and intelligent waste management for sustainable smart cities
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-glow group"
            onClick={() => scrollToSection('features')}
          >
            Explore Features
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            onClick={() => scrollToSection('how-it-works')}
          >
            How It Works
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6">
            <div className="text-4xl font-bold text-secondary mb-2">Real-Time</div>
            <div className="text-primary-foreground/80">Monitoring</div>
          </div>
          <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6">
            <div className="text-4xl font-bold text-accent mb-2">IoT-Based</div>
            <div className="text-primary-foreground/80">Technology</div>
          </div>
          <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6">
            <div className="text-4xl font-bold text-secondary mb-2">Smart City</div>
            <div className="text-primary-foreground/80">Solution</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
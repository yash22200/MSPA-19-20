import { Card, CardContent } from "@/components/ui/card";
import { Eye, DollarSign, Shield, TrendingUp, Users, Leaf } from "lucide-react";
import optimizationIcon from "@/assets/optimization-icon.jpg";

const Features = () => {
  const features = [
    {
      icon: Eye,
      title: "Real-Time Monitoring",
      description: "Continuous tracking of garbage bin fill levels with instant cloud updates",
    },
    {
      icon: DollarSign,
      title: "Cost Reduction",
      description: "Significantly reduces manpower and operational costs through automation",
    },
    {
      icon: Shield,
      title: "Prevents Overflow",
      description: "Proactive alerts prevent bin overflow and maintain urban hygiene",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solution",
      description: "Easily expandable for smart city implementations of any size",
    },
    {
      icon: Users,
      title: "User-Friendly Interface",
      description: "Intuitive mobile and web apps for easy monitoring and management",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Promotes sustainability through efficient waste collection practices",
    },
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-['Space_Grotesk']">
            Key <span className="text-secondary">Features</span> & Benefits
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive advantages that transform traditional waste management into an intelligent system
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Route Optimization Feature Highlight */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-md">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6 font-['Space_Grotesk']">
                Smart Route <span className="text-accent">Optimization</span>
              </h3>
              <p className="text-muted-foreground text-lg mb-6">
                Advanced algorithms analyze bin fill levels across the city to generate optimal collection routes, saving time, fuel, and reducing carbon emissions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Dynamic Routing</div>
                    <div className="text-muted-foreground text-sm">Routes adjust based on real-time bin status</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Fuel Efficiency</div>
                    <div className="text-muted-foreground text-sm">Reduce unnecessary trips by 40-60%</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Carbon Reduction</div>
                    <div className="text-muted-foreground text-sm">Lower emissions through optimized routes</div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src={optimizationIcon} 
                alt="Smart city route optimization for waste collection"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Route, BarChart3, Sun } from "lucide-react";

const FutureScope = () => {
  const future = [
    {
      icon: Brain,
      title: "AI-Based Prediction",
      description: "Machine learning algorithms to predict garbage fill patterns and optimize collection schedules proactively",
    },
    {
      icon: Route,
      title: "Advanced Route Planning",
      description: "AI-powered route optimization for garbage trucks considering traffic, weather, and real-time bin status",
    },
    {
      icon: BarChart3,
      title: "Smart City Integration",
      description: "Seamless integration with smart city dashboards for comprehensive urban management systems",
    },
    {
      icon: Sun,
      title: "Solar-Powered Bins",
      description: "Eco-friendly solar-powered compacting smart bins that reduce waste volume and energy consumption",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-['Space_Grotesk']">
            Future <span className="text-accent">Scope</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exciting possibilities for expanding and enhancing the smart waste management ecosystem
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {future.map((item, index) => (
            <Card 
              key={index}
              className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-hero border-0 shadow-xl">
            <CardContent className="p-12 text-center">
              <h3 className="text-3xl font-bold text-primary-foreground mb-6 font-['Space_Grotesk']">
                Building Sustainable Smart Cities
              </h3>
              <p className="text-primary-foreground/90 text-lg leading-relaxed">
                The Smart Garbage Bin Fill Level Notifier represents a significant step toward building sustainable, 
                efficient smart cities. By integrating IoT technology with real-time monitoring, we reduce manual effort, 
                enhance city cleanliness, and contribute to a greener future for urban environments worldwide.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FutureScope;
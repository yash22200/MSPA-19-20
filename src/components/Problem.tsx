import { AlertCircle, TrendingUp, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Problem = () => {
  const problems = [
    {
      icon: AlertCircle,
      title: "Overflowing Bins",
      description: "Garbage bins overflow causing health hazards and environmental issues",
    },
    {
      icon: Clock,
      title: "Manual Inspection",
      description: "Time-consuming manual checking of bin levels wastes valuable resources",
    },
    {
      icon: MapPin,
      title: "Fixed Schedules",
      description: "Inefficient fixed collection routes regardless of actual bin status",
    },
    {
      icon: TrendingUp,
      title: "No Real-Time Data",
      description: "Lack of live monitoring prevents proactive waste management",
    },
  ];

  const objectives = [
    "Ensure timely waste collection before bins overflow",
    "Enable automation through IoT sensor technology",
    "Provide instant notifications to collection teams",
    "Optimize waste pickup routes for efficiency",
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-['Space_Grotesk']">
            Addressing Urban <span className="text-secondary">Waste Challenges</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Traditional waste management faces critical issues that impact urban sustainability and public health
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {problems.map((problem, index) => (
            <Card 
              key={index} 
              className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center mb-4">
                  <problem.icon className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Objectives */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-md">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6 font-['Space_Grotesk']">
                Our <span className="text-accent">Solution Objectives</span>
              </h3>
              <p className="text-muted-foreground text-lg mb-8">
                The Smart Garbage Bin system leverages IoT technology to transform waste management through intelligent monitoring and automated notifications.
              </p>
              <div className="space-y-4">
                {objectives.map((objective, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <p className="text-foreground">{objective}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-primary rounded-xl p-8 text-primary-foreground">
              <div className="space-y-6">
                <div>
                  <div className="text-5xl font-bold mb-2">85%</div>
                  <div className="text-primary-foreground/80">Cost Reduction</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">Real-Time</div>
                  <div className="text-primary-foreground/80">Monitoring & Alerts</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">Smart</div>
                  <div className="text-primary-foreground/80">Route Optimization</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
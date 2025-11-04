import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Wifi, Code, Database, Smartphone, Radio } from "lucide-react";

const Technologies = () => {
  const hardware = [
    {
      icon: Radio,
      name: "Ultrasonic Sensor",
      description: "HC-SR04 for precise distance measurement and fill level detection",
    },
    {
      icon: Cpu,
      name: "NodeMCU / Arduino",
      description: "Microcontrollers for data processing and sensor integration",
    },
    {
      icon: Wifi,
      name: "Wi-Fi / GSM Module",
      description: "Wireless connectivity for real-time data transmission",
    },
  ];

  const software = [
    {
      icon: Code,
      name: "Arduino IDE",
      description: "Firmware development for microcontroller programming",
    },
    {
      icon: Database,
      name: "Firebase & Node.js",
      description: "Cloud backend for data storage and real-time processing",
    },
    {
      icon: Smartphone,
      name: "React.js",
      description: "Modern web application for monitoring and management",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-['Space_Grotesk']">
            Technologies <span className="text-secondary">Used</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge hardware and software components integrated for optimal performance
          </p>
        </div>

        {/* Hardware */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-foreground mb-8 text-center">
            Hardware Components
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {hardware.map((item, index) => (
              <Card 
                key={index}
                className="border-border hover:shadow-lg transition-all duration-300 hover:border-secondary"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mb-4 mx-auto">
                    <item.icon className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    {item.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Software */}
        <div>
          <h3 className="text-3xl font-semibold text-foreground mb-8 text-center">
            Software Stack
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {software.map((item, index) => (
              <Card 
                key={index}
                className="border-border hover:shadow-lg transition-all duration-300 hover:border-accent"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mb-4 mx-auto">
                    <item.icon className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    {item.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Communication Protocol */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-primary border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold text-primary-foreground mb-4">
                IoT Communication Protocols
              </h3>
              <p className="text-primary-foreground/90 text-lg mb-4">
                MQTT & HTTP for reliable cloud integration
              </p>
              <p className="text-primary-foreground/80">
                Secure, scalable, and efficient data exchange between hardware sensors and cloud infrastructure
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
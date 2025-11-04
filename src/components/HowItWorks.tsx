import { Waves, Cloud, Bell, Smartphone } from "lucide-react";
import sensorIcon from "@/assets/sensor-icon.jpg";
import notificationIcon from "@/assets/notification-icon.jpg";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Waves,
      title: "Sensor Measurement",
      description: "Ultrasonic sensors (HC-SR04) continuously measure the fill level inside garbage bins with high precision.",
      color: "secondary",
    },
    {
      number: "02",
      icon: Cloud,
      title: "Data Transmission",
      description: "NodeMCU/Arduino processes sensor data and transmits it to the cloud via Wi-Fi/GSM modules in real-time.",
      color: "secondary",
    },
    {
      number: "03",
      icon: Bell,
      title: "Threshold Detection",
      description: "Backend systems analyze incoming data and trigger alerts when bins reach predefined threshold levels.",
      color: "accent",
    },
    {
      number: "04",
      icon: Smartphone,
      title: "User Notification",
      description: "Mobile and web applications notify collection teams instantly for timely waste pickup operations.",
      color: "accent",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-['Space_Grotesk']">
            How It <span className="text-secondary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A seamless four-step process powered by IoT technology for intelligent waste management
          </p>
        </div>

        {/* Process Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection line for desktop */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary via-secondary to-accent" style={{ width: 'calc(100% - 8rem)', left: '4rem' }} />
            
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card border border-border rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  {/* Step number */}
                  <div className={`absolute -top-4 -left-4 w-12 h-12 rounded-full font-bold text-xl flex items-center justify-center shadow-lg z-10 ${
                    step.color === 'secondary' 
                      ? 'bg-secondary text-secondary-foreground' 
                      : 'bg-accent text-accent-foreground'
                  }`}>
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-4 mx-auto ${
                    step.color === 'secondary' 
                      ? 'bg-gradient-secondary text-secondary-foreground' 
                      : 'bg-gradient-accent text-accent-foreground'
                  }`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-center text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual representation */}
        <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8 shadow-md">
            <img 
              src={sensorIcon} 
              alt="IoT sensor monitoring garbage bin levels"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-semibold text-foreground mb-3">Sensor Technology</h3>
            <p className="text-muted-foreground">
              Advanced ultrasonic sensors provide accurate real-time measurements of waste levels, enabling precise monitoring and data collection.
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-8 shadow-md">
            <img 
              src={notificationIcon} 
              alt="Real-time mobile notifications for waste collection"
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-semibold text-foreground mb-3">Smart Notifications</h3>
            <p className="text-muted-foreground">
              Instant alerts delivered through mobile and web applications ensure collection teams respond promptly to full bins.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
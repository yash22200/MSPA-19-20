import { Wifi } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wifi className="w-6 h-6 text-secondary" />
              <span className="text-xl font-bold font-['Space_Grotesk']">Smart Bin IoT</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Revolutionizing waste management through intelligent IoT solutions for sustainable smart cities.
            </p>
          </div>

          {/* Project Info */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Project</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Smart Garbage Bin Notifier</li>
              <li>IoT-Based Solution</li>
              <li>Real-Time Monitoring</li>
              <li>Smart City Integration</li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Technologies</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>NodeMCU / Arduino</li>
              <li>Ultrasonic Sensors</li>
              <li>React.js & Node.js</li>
              <li>Firebase Cloud</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80 text-sm">
            Developed by <span className="font-semibold text-secondary">Yash Gatkal</span> | 
            Third Year Computer Engineering, KKWIEER
          </p>
          <p className="text-primary-foreground/60 text-xs mt-2">
            © 2024 Smart Garbage Bin IoT Project. Educational Project.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
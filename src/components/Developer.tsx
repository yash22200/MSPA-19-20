import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code2, Award } from "lucide-react";

const Developer = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-border shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-12 h-12 text-secondary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 font-['Space_Grotesk']">
                  Yash Gatkal
                </h2>
                <p className="text-xl text-secondary font-semibold">Full-Stack Developer</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                    <GraduationCap className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">Education</h3>
                  <p className="text-sm text-muted-foreground">Third Year, B.Tech</p>
                  <p className="text-sm text-muted-foreground">Computer Engineering</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Code2 className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">Specialization</h3>
                  <p className="text-sm text-muted-foreground">IoT Solutions</p>
                  <p className="text-sm text-muted-foreground">Full-Stack Development</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Award className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">Institution</h3>
                  <p className="text-sm text-muted-foreground">KKWIEER</p>
                  <p className="text-sm text-muted-foreground">Division A, Roll No. 20</p>
                </div>
              </div>

              <div className="bg-muted/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">About the Project</h3>
                <p className="text-muted-foreground leading-relaxed">
                  This innovative IoT-based waste management system was developed as part of academic research 
                  at KKWIEER, demonstrating the practical application of Internet of Things technology in solving 
                  real-world urban challenges. The project combines hardware expertise with modern software development 
                  to create a scalable, efficient solution for smart cities.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Developer;
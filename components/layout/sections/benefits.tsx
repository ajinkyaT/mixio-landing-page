import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Users, BarChart } from "lucide-react";

interface BenefitsProps {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    number: "01",
    title: "Rapid Development",
    description: "Get your AI solution from concept to production in weeks, not months, with our proven development process.",
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    number: "02",
    title: "Privacy-First Approach",
    description: "Keep your data secure with our self-hosted AI solutions that never compromise on privacy or performance.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    number: "03",
    title: "Expert Team",
    description: "Work with seasoned AI engineers and researchers who bring deep expertise in building production-ready AI systems.",
  },
  {
    icon: <BarChart className="w-8 h-8 text-primary" />,
    number: "04",
    title: "Measurable Impact",
    description: "See tangible improvements in efficiency and performance with our AI solutions, backed by clear metrics and analytics.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Partner With Us
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We combine deep AI expertise with robust engineering practices to deliver solutions that drive real business value. Our focus is on building AI systems that are not just powerful, but also practical, secure, and scalable.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map((benefit, index) => (
            <Card
              key={index}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  {benefit.icon}
                  <span className="text-4xl font-light text-muted-foreground/50">
                    {benefit.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

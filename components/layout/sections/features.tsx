import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Brain",
    title: "Advanced AI Models",
    description:
      "Access state-of-the-art AI models optimized for your specific use case, ensuring high performance and accuracy.",
  },
  {
    icon: "Shield",
    title: "Enterprise Security",
    description:
      "Built-in security features including data encryption, access controls, and compliance with industry standards.",
  },
  {
    icon: "Scale",
    title: "Scalable Architecture",
    description:
      "Solutions designed to scale seamlessly with your needs, from proof-of-concept to enterprise-wide deployment.",
  },
  {
    icon: "Workflow",
    title: "Custom Integration",
    description:
      "Seamless integration with your existing systems and workflows, minimizing disruption to your operations.",
  },
  {
    icon: "LineChart",
    title: "Performance Analytics",
    description:
      "Comprehensive monitoring and analytics to track system performance, usage patterns, and business impact.",
  },
  {
    icon: "HeartHandshake",
    title: "Ongoing Support",
    description:
      "Dedicated support and maintenance to ensure your AI solutions continue to evolve and perform optimally.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Enterprise-Grade AI Solutions
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Our AI solutions come with powerful features designed to meet the demanding 
        needs of modern enterprises while ensuring security, scalability, and reliability.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

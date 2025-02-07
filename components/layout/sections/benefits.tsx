import { Card, CardContent } from "@/components/ui/card";
import { LayoutGrid, Sparkles, Share2, Camera } from "lucide-react";

interface BenefitsProps {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: <LayoutGrid className="w-8 h-8 text-primary" />,
    number: "01",
    title: "Craft Viral Posts and Ads",
    description: "Generate compelling videos and ads designed to captivate audiences and drive engagement",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    number: "02",
    title: "Unleash your Creativity",
    description: "Produce high-quality content and stunning visuals with GenAI - Save hours on editing and focus on growing your audience",
  },
  {
    icon: <Camera className="w-8 h-8 text-primary" />,
    number: "03",
    title: "Create Professional Photoshoots",
    description: "Produce stunning, professional-grade product photos and visuals without the need for expensive studios",
  },
  {
    icon: <Share2 className="w-8 h-8 text-primary" />,
    number: "04",
    title: "Share Content with Ease",
    description: "Schedule and share your videos and stories instantly across LinkedIn, TikTok, Instagram, and YouTube",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Shortcut to Success
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Unlock the full potential of your marketing with our advanced GenAI models, powered by a proprietary AI engine. Effortlessly create conversion and engaging content at scale—driving results for your brand like never before
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

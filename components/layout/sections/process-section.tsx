"use client";

import { BrandHighlightedTitle } from "@/components/ui/brand-highlighted-title";
import MagicCard from "@/components/ui/magic-card";
import { SearchCode, Brain, Zap, Rocket } from "lucide-react";

const PROCESS = [
  {
    icon: SearchCode,
    title: "Discovery & Planning",
    description:
      "We start by understanding your unique challenges and goals to define a clear AI strategy.",
  },
  {
    icon: Brain,
    title: "AI Model Development",
    description:
      "Our experts design and train custom AI models tailored to your specific requirements.",
  },
  {
    icon: Zap,
    title: "Integration & Deployment",
    description:
      "Seamlessly integrate AI solutions into your existing workflows and systems.",
  },
  {
    icon: Rocket,
    title: "Optimization & Support",
    description:
      "Continuous monitoring, optimization, and support to ensure peak performance.",
  },
];

export function ProcessSection() {
  return (
    <section
      id="workflow"
      className="container py-8 md:py-12 lg:py-16 bg-muted/30 dark:bg-card"
    >
      <div className="flex flex-col items-center justify-center w-full pb-8 max-w-xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold">
          Our <BrandHighlightedTitle>Agile Workflow</BrandHighlightedTitle>
        </h2>
        <p className="mt-4 text-center text-lg text-muted-foreground">
          Follow our structured yet flexible process designed for transparency
          and optimal results, from initial concept to final deployment.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full py-8 gap-4 md:gap-8">
        {PROCESS.map((process, id) => (
          <MagicCard key={id} className="group md:py-8 flex flex-col">
            <div className="flex flex-col items-start justify-start w-full">
              <process.icon
                strokeWidth={1.5}
                className="w-10 h-10 text-primary mb-4"
              />
              <div className="flex flex-col relative items-start">
                <span className="absolute -top-11 right-0 border-2 border-border text-foreground font-medium text-2xl rounded-full w-10 h-10 flex items-center justify-center pt-0.5 bg-background">
                  {id + 1}
                </span>
                <h3 className="text-lg mt-2 font-semibold text-foreground">
                  {process.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground flex-grow">
                  {process.description}
                </p>
              </div>
            </div>
          </MagicCard>
        ))}
      </div>
    </section>
  );
}

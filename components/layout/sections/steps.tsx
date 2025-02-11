import React from "react";

const steps = [
  {
    number: 1,
    title: "Describe what you want to create",
    description: "Start by describing your vision for the content you want to create."
  },
  {
    number: 2,
    title: "Upload your raw Images / Videos or Generate with AI",
    description: "Upload your existing media or let AI help you generate new content."
  },
  {
    number: 3,
    title: "Get a first version in seconds",
    description: "Our AI quickly processes your input to create an initial version."
  },
  {
    number: 4,
    title: "Iterate and improve",
    description: "Fine-tune and refine your content until it's perfect."
  },
  {
    number: 5,
    title: "Share & post in one-click",
    description: "Instantly share your content across your preferred platforms."
  }
];

export const StepsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Create Content in <span className="text-primary">5 Simple Steps</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center text-center p-6 rounded-lg border border-border hover:border-primary transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">{step.number}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
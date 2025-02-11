import React from "react";

const steps = [
  "Describe what you want to create",
  "Upload  your raw Images / Videos or Generate with AI",
  "Get a first version in seconds",
  "Iterate and improve",
  "Share & post in one-click"
];

export const StepsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How it works
          </h2>
          <div className="w-32 h-1 bg-primary rounded-full"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Horizontal connecting line */}
          <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-0.5 bg-border"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-full bg-background border-2 border-primary flex items-center justify-center mb-6 relative z-10 transition-transform group-hover:scale-110">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                </div>
                <p className="text-sm md:text-base font-medium px-4">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
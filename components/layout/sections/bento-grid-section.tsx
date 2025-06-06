"use client";

import { BentoGrid, BentoCard, CARDS } from "@/components/ui/bento-grid";
import { BrandHighlightedTitle } from "@/components/ui/brand-highlighted-title";

export function BentoGridSection() {
  return (
    <section id="bento-grid" className="container py-8 md:py-12 lg:py-16">
      <div className="flex flex-col w-full items-center justify-center pb-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
          Explore Our{" "}
          <BrandHighlightedTitle>AI Capabilities</BrandHighlightedTitle>
        </h2>
        <p className="mt-4 text-center text-lg text-muted-foreground max-w-xl">
          Discover how Mixio Labs leverages diverse AI technologies to deliver
          innovative solutions across various domains.
        </p>
      </div>
      <BentoGrid className="py-8">
        {CARDS.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
}

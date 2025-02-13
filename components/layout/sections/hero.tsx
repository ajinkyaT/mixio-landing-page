"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";

import { heroSection } from "@/config/landing";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { Typewriter } from "@/components/ui/typewriter";

export const HeroSection = () => {
  const { theme } = useTheme();

  return (
    <HeroHighlight>
      <section className="container flex w-full items-center md:min-h-[calc(100vh-128px)]">
        <div className="mx-auto grid place-items-center gap-8 py-20 md:py-24 lg:max-w-screen-xl">
          <div className="space-y-8 text-center">
            <div className="mx-auto max-w-screen-md text-center">
              <h1 className="mb-6 whitespace-nowrap text-3xl font-bold md:text-6xl">
                <div className="flex flex-col items-center justify-center md:gap-2">
                  <div className="mx-auto flex min-w-[285px] justify-start gap-3 md:min-w-[560px]">
                    <span className="">Building</span>
                    <span className="text-primary font-extrabold">
                      <Typewriter
                        words={heroSection.typewriterWords}
                        loop
                        typingSpeed={70}
                        wordPause={1000}
                        className="inline-block min-w-[120px] text-left md:min-w-[200px]"
                      />
                    </span>
                  </div>
                  <div>Solutions</div>
                </div>
              </h1>
            </div>

            <p className="mx-auto max-w-screen-sm text-sm text-muted-foreground md:text-xl">
              {heroSection.description}
            </p>

            <div className="space-y-4 md:space-x-4 md:space-y-0">
              <Link
                href="#contact"
                className={cn(
                  "group/arrow",
                  buttonVariants({ size: "lg" }),
                  "w-auto font-bold",
                )}
              >
                {heroSection.ctaText}
                <ArrowRight className="ml-2 size-5 transition-transform group-hover/arrow:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="relative group mt-24">
            <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
            <Image
              width={1200}
              height={1200}
              className="w-full md:w-[1200px] mx-auto rounded-lg relative rounded-lg leading-none flex items-center border border-t-2 border-secondary border-t-primary/30"
              src={theme === "light" ? "/hero-image-light.jpeg" : "/hero-image-dark.jpeg"}
              alt="AI Solutions Dashboard"
            />
            <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
          </div>
        </div>
      </section>
    </HeroHighlight>
  );
};

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
  Brain,
  MessageSquare,
  Bot,
  Sparkles,
  Cpu,
  Network,
  Database,
  Code2,
} from "lucide-react";

import { heroSection } from "@/config/landing";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import { Card } from "../../ui/card";
import { HeroHighlight } from "../../ui/hero-highlight";
import { Typewriter } from "../../ui/typewriter";
import { OrbitingCircles } from "@/components/ui/orgbiting-circles";

interface ReelData {
  id: number;
  videoUrl: string;
  title: string;
}

const reels: ReelData[] = [
  {
    id: 1,
    videoUrl:
      "https://storage.googleapis.com/mixio_public_assets/adventure_awaits.mp4",
    title: "Adventure Awaits",
  },
  {
    id: 2,
    videoUrl:
      "https://storage.googleapis.com/mixio_public_assets/hero_middle.mp4",
    title: "Why mixio",
  },
  {
    id: 3,
    videoUrl: "https://storage.googleapis.com/mixio_public_assets/do_more.mp4",
    title: "Do More",
  },
];

export default function HeroLanding() {
  return (
    <section className="relative bg-background">
      <HeroHighlight className="min-h-screen px-3 py-32">
        <div className="container">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="space-y-4">
                <h1 className="text-balance font-urban text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-4xl md:leading-none lg:text-5xl">
                  <span className="pb-3">Build AI-Powered Solutions </span>
                  <span className="block">
                    That{"  "}
                    <span className="bg-gradient-to-r from-brand-coral via-brand-orange to-brand-yellow bg-clip-text font-extrabold text-transparent">
                      <Typewriter
                        words={[
                          "Transform Business",
                          "Drive Innovation",
                          "Scale Operations",
                          "Create Impact",
                        ]}
                        loop
                        className="inline-block min-w-[200px] text-left"
                      />
                    </span>
                  </span>
                </h1>

                <p className="text-md md:text-md max-w-xl text-balance text-muted-foreground sm:text-base">
                  Partner with us to build custom AI solutions that solve your
                  unique business challenges. From ideation to deployment,
                  we&apos;re your end-to-end AI development partner.
                </p>
              </div>

              <div className="mt-8 flex w-full flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <Link
                  href="#features"
                  className={cn(
                    buttonVariants({
                      variant: "default",
                      size: "lg",
                    }),
                    "w-full sm:w-auto"
                  )}
                >
                  {heroSection.ctaText}
                </Link>
              </div>

              {/* <p className="mt-2 pl-4 text-[10px] text-muted-foreground">
                Let&apos;s build something amazing together
              </p> */}
            </div>

            <div className="relative">
              <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
                <OrbitingCircles iconSize={32}>
                  <Brain className="size-8 text-brand-coral" />
                  <MessageSquare className="size-8 text-brand-orange" />
                  <Bot className="size-8 text-brand-yellow" />
                  <Sparkles className="size-8 text-brand-coral" />
                  <Cpu className="size-8 text-brand-orange" />
                </OrbitingCircles>
                <OrbitingCircles iconSize={24} radius={100} reverse speed={2}>
                  <Network className="size-6 text-brand-yellow" />
                  <Database className="size-6 text-brand-coral" />
                  <Code2 className="size-6 text-brand-orange" />
                  <Brain className="size-6 text-brand-yellow" />
                </OrbitingCircles>
                <div
                  className={cn(
                    "absolute left-1/2 top-1/3 bottom-1/3 mx-auto w-1/2 -translate-x-1/2 rounded-full bg-brand-yellow/30 blur-3xl transition-opacity duration-1000"
                  )}
                />
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0"></div>
        </div>
      </HeroHighlight>
    </section>
  );
}

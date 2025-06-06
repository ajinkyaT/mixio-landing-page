"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils"; // Adjusted path based on current project structure
import {
  ArrowRightIcon,
  WaypointsIcon,
  BrainCircuitIcon, // For Custom AI Model Development
  BarChartBigIcon, // For AI-Powered Data Analytics
  MessageSquareTextIcon, // For NLP & Text Processing
  ScanEyeIcon, // For Computer Vision Solutions
  LightbulbIcon, // For AI Strategy & Consulting
} from "lucide-react";
import Link from "next/link";
import React, { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { Input } from "./input";
import { Label } from "./label";

// Placeholder for Integrations component if not created separately
const IntegrationsPlaceholder = ({ className }: { className?: string }) => (
  <div className={cn("p-4 border rounded-md bg-muted/40", className)}>
    <p className="text-center text-muted-foreground">Integrations Showcase</p>
  </div>
);

// --- Custom Background Components for Bento Cards ---

const ProfessionalAgenticWorkflowBackground = () => (
  <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-6 opacity-30 group-hover:opacity-50 transition-all duration-500 overflow-hidden">
    <div className="flex items-center space-x-2">
      {[1, 2, 3].map((i) => (
        <React.Fragment key={i}>
          <div className="h-10 w-16 rounded-md bg-muted-foreground/20 border border-muted-foreground/30 flex items-center justify-center">
            <div className="h-3 w-3 rounded-full bg-primary/50" />
          </div>
          {i < 3 && (
            <ArrowRightIcon className="h-5 w-5 text-muted-foreground/50" />
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);

const ProfessionalAiModelBackground = () => (
  <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-6 opacity-30 group-hover:opacity-50 transition-all duration-500 overflow-hidden">
    <div className="flex space-x-4">
      {[3, 4, 2].map((count, layerIndex) => (
        <div key={layerIndex} className="flex flex-col space-y-2 items-center">
          {Array.from({ length: count }).map((_, nodeIndex) => (
            <div
              key={nodeIndex}
              className="h-4 w-4 rounded-full bg-primary/30 border border-primary/50"
            />
          ))}
        </div>
      ))}
    </div>
    <svg
      width="100"
      height="60"
      className="absolute opacity-30"
      style={{ pointerEvents: "none" }}
    >
      <line
        x1="28"
        y1="30"
        x2="48"
        y2="22"
        stroke="hsl(var(--primary))"
        strokeWidth="0.5"
      />
      <line
        x1="28"
        y1="30"
        x2="48"
        y2="38"
        stroke="hsl(var(--primary))"
        strokeWidth="0.5"
      />
      <line
        x1="52"
        y1="22"
        x2="72"
        y2="30"
        stroke="hsl(var(--primary))"
        strokeWidth="0.5"
      />
      <line
        x1="52"
        y1="38"
        x2="72"
        y2="30"
        stroke="hsl(var(--primary))"
        strokeWidth="0.5"
      />
    </svg>
  </div>
);

const ProfessionalDataAnalyticsBackground = () => (
  <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-6 opacity-30 group-hover:opacity-50 transition-all duration-500 overflow-hidden">
    <div className="flex space-x-3 items-end h-20">
      <div className="w-4 h-[60%] rounded-t-sm bg-primary/40" />
      <div className="w-4 h-[80%] rounded-t-sm bg-primary/40" />
      <div className="w-4 h-[40%] rounded-t-sm bg-primary/40" />
      <div className="w-4 h-[70%] rounded-t-sm bg-primary/40" />
      <div className="ml-4 w-10 h-10 border-2 border-primary/40 rounded-full flex items-center justify-center">
        <div className="w-3 h-3 bg-primary/60 rounded-full" />
      </div>
    </div>
  </div>
);

const ProfessionalNlpBackground = () => (
  <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center p-6 space-y-1.5 opacity-30 group-hover:opacity-50 transition-all duration-500 overflow-hidden">
    <div className="w-3/4 h-1.5 bg-muted-foreground/30 rounded-full" />
    <div className="w-full h-1.5 bg-muted-foreground/30 rounded-full" />
    <div className="w-1/2 h-1.5 bg-muted-foreground/30 rounded-full" />
    <div className="flex items-center mt-3">
      <div className="w-10 h-1.5 bg-primary/40 rounded-l-full" />
      <ArrowRightIcon className="h-3 w-3 text-primary/70 mx-1" />
      <div className="w-10 h-1.5 bg-green-500/40 rounded-r-full" />
    </div>
    <div className="w-3/5 h-1.5 bg-muted-foreground/30 rounded-full mt-1" />
  </div>
);

const ProfessionalComputerVisionBackground = () => (
  <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-6 opacity-30 group-hover:opacity-50 transition-all duration-500 overflow-hidden">
    <div className="w-24 h-16 border-2 border-primary/40 rounded-lg relative">
      <div className="absolute top-1/2 left-0 w-full h-px bg-red-500/50 animate-pulse" />
      <div className="absolute left-1/2 top-0 w-px h-full bg-red-500/50 animate-pulse" />
      <div className="absolute top-1 left-1 w-3 h-3 border-t-2 border-l-2 border-primary/70" />
      <div className="absolute top-1 right-1 w-3 h-3 border-t-2 border-r-2 border-primary/70" />
      <div className="absolute bottom-1 left-1 w-3 h-3 border-b-2 border-l-2 border-primary/70" />
      <div className="absolute bottom-1 right-1 w-3 h-3 border-b-2 border-r-2 border-primary/70" />
    </div>
  </div>
);

const ProfessionalAiStrategyBackground = () => (
  <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-6 opacity-30 group-hover:opacity-50 transition-all duration-500 overflow-hidden">
    <div className="relative w-20 h-20">
      {[0, 72, 144, 216, 288].map((deg) => (
        <div
          key={deg}
          className="absolute w-5 h-5 rounded-full bg-primary/30 border border-primary/50"
          style={{
            transform: `rotate(${deg}deg) translate(28px) rotate(-${deg}deg)`,
            transformOrigin: "center center",
            left: "calc(50% - 10px)",
            top: "calc(50% - 10px)",
          }}
        />
      ))}
      <div className="absolute w-8 h-8 rounded-full bg-primary/50 border-2 border-primary left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
    </div>
  </div>
);

// --- End Custom Background Components ---

export const CARDS = [
  {
    Icon: WaypointsIcon,
    name: "Agentic Workflow Systems",
    description:
      "Leverage intelligent agents to automate and optimize complex business processes.",
    href: "#",
    cta: "Explore Workflows",
    background: <ProfessionalAgenticWorkflowBackground />,
    className: "col-span-3 md:col-span-2 row-span-1",
  },
  {
    Icon: BrainCircuitIcon,
    name: "Custom AI Model Development",
    description:
      "Tailored machine learning models for your unique business challenges.",
    href: "#",
    cta: "Learn More",
    background: <ProfessionalAiModelBackground />,
    className: "col-span-3 md:col-span-1 row-span-1",
  },
  {
    Icon: BarChartBigIcon,
    name: "AI-Powered Data Analytics",
    description:
      "Unlock insights and drive decisions with advanced AI-driven data analysis.",
    href: "#",
    cta: "Discover Insights",
    background: <ProfessionalDataAnalyticsBackground />,
    className: "col-span-3 md:col-span-1 row-span-1",
  },
  {
    Icon: MessageSquareTextIcon,
    name: "NLP & Text Processing",
    description:
      "Harness language AI for understanding, processing, and generating text.",
    href: "#",
    cta: "See Capabilities",
    background: <ProfessionalNlpBackground />,
    className: "col-span-3 md:col-span-2 row-span-1",
  },
  {
    Icon: ScanEyeIcon,
    name: "Computer Vision Solutions",
    description:
      "Implement AI to interpret, analyze, and act on visual information.",
    href: "#",
    cta: "View Applications",
    background: <ProfessionalComputerVisionBackground />,
    className: "col-span-3 md:col-span-1 row-span-1",
  },
  {
    Icon: LightbulbIcon,
    name: "AI Strategy & Consulting",
    description:
      "Expert guidance to effectively integrate AI into your business strategy.",
    href: "#",
    cta: "Plan Your Strategy",
    background: <ProfessionalAiStrategyBackground />,
    className: "col-span-3 md:col-span-2 row-span-1",
  },
];

export const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any; // lucide-react icon
  description: string;
  href: string;
  cta: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between border border-border/60 overflow-hidden rounded-xl",
      // "bg-black [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]", // Using project's theme, so removed direct bg-black
      // "bg-card [box-shadow:0_-20px_80px_-20px_hsl(var(--card-foreground))]", // Adjusted shadow to use theme variable - REMOVED SHADOW
      "bg-card", // Removed box-shadow
      className
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <Icon className="h-12 w-12 origin-left text-muted-foreground transition-all duration-300 ease-in-out group-hover:scale-75" />{" "}
      {/* Adjusted color */}
      <h3 className="text-xl font-semibold text-foreground">
        {" "}
        {/* Adjusted color */}
        {name}
      </h3>
      <p className="max-w-lg text-muted-foreground">{description}</p>{" "}
      {/* Adjusted color */}
    </div>

    <div
      className={cn(
        "absolute bottom-0 flex w-full translate-y-10 flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      )}
    >
      <Link
        href={href}
        className={cn(
          buttonVariants({ size: "sm", variant: "ghost" }),
          "cursor-pointer text-primary hover:text-primary/80"
        )}
      >
        {" "}
        {/* Adjusted color */}
        {cta}
        <ArrowRightIcon className="ml-2 h-4 w-4" />
      </Link>
    </div>
    {/* Adjusted hover effect to use theme variables */}
    <div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:bg-foreground/[.03] group-hover:dark:bg-background/10" />
  </div>
);

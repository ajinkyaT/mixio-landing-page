"use client";

import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  /**
   * Whether to show the text next to the logo
   */
  showText?: boolean;
  /**
   * Size variant of the logo
   */
  size?: "sm" | "md" | "lg";
  /**
   * Whether to show the gradient on text
   */
  gradient?: boolean;
  /**
   * Link Url
   */
  href?: string;
  /**
   * Whether to wrap in a link to home
   */
  isLink?: boolean;
  /**
   * Additional classes to apply
   */
  className?: string;
}

const sizeMap = {
  sm: {
    logo: 24,
    text: "text-lg",
    gap: "space-x-1",
  },
  md: {
    logo: 32,
    text: "text-xl",
    gap: "space-x-1.5",
  },
  lg: {
    logo: 40,
    text: "text-2xl",
    gap: "space-x-2",
  },
};

export function Logo({
  showText = true,
  size = "md",
  gradient = true,
  href = "/",
  isLink = true,
  className,
}: LogoProps) {
  const { logo, text, gap } = sizeMap[size];

  const LogoContent = (
    <div className={cn("flex items-center", gap, className)}>
      <Image
        src="/logo.png"
        alt={siteConfig.name}
        width={logo}
        height={logo}
        className={`size-[${logo}px]`}
      />
      {showText && (
        <span
          className={cn(
            "font-urban font-bold",
            text,
            gradient
              ? "bg-gradient-to-r from-brand-orange to-brand-yellow bg-clip-text text-transparent"
              : "text-foreground",
          )}
        >
          {siteConfig.name}
        </span>
      )}
    </div>
  );

  if (isLink) {
    return (
      <Link href={href} className="flex items-center">
        {LogoContent}
      </Link>
    );
  }

  return LogoContent;
}

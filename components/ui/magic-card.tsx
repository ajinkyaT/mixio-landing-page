"use client";

import { cn } from "@/lib/utils"; // Adjusted path
import React, { useRef, useState } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const MagicCard = ({ children, className }: Props) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden rounded-xl border border-border/60 bg-gradient-to-r from-background to-background/40 p-4 md:p-6", // Adjusted to use theme colors like 'background'
        // Removed max-w-md to allow flexibility, can be added by consumer if needed
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          // Using a theme-friendly color for the radial gradient
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, hsl(var(--primary) / 0.15), transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
};

export default MagicCard;

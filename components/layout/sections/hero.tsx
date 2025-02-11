"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

interface AnimatedTextProps {
  words: string[];
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const fullText = words[currentWordIndex];
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      charIndex++;
      setDisplayedText(fullText.substring(0, charIndex));
      if (charIndex === fullText.length) {
        clearInterval(typingInterval);
        const pause = setTimeout(() => {
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
          setDisplayedText("");
        }, 1000);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, [currentWordIndex, words]);

  return (
    <span className="text-primary inline-block w-[120px] transition-all duration-300">
      {displayedText}
    </span>
  );
};

export const HeroSection = () => {
  const { theme } = useTheme();
  
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-10 md:py-24">
        <div className="text-center space-y-8">
          <div className="max-w-screen-md mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 whitespace-nowrap">
              <div className="flex items-center justify-center gap-10">
                <span>Idea to</span>
                <AnimatedText words={["Ad Creative", "Viral Video", "Brand Post"]} />
                <span>in seconds</span>
              </div>
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            Create stunning ad assets, social media posts or videos in seconds with our AI magic
            — no technical skills needed, just your creativity
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/4 font-bold group/arrow">
              Try For Free Now
              <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="relative group mt-24">
            <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
            <Image
              width={1200}
              height={1200}
              className="w-full md:w-[1200px] mx-auto rounded-lg relative rounded-lg leading-none flex items-center border border-t-2 border-secondary border-t-primary/30"
              src={theme === "light" ? "/hero-image-light.jpeg" : "/hero-image-dark.jpeg"}
              alt="dashboard"
            />
            <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

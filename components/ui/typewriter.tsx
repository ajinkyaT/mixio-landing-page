"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  className?: string;
  onComplete?: () => void;
  deleteOnComplete?: boolean;
  typingSpeed?: number;
  deletingSpeed?: number;
  wordPause?: number;
  loop?: boolean;
}

export function Typewriter({
  words,
  className,
  onComplete,
  deleteOnComplete = false,
  typingSpeed = 100,
  deletingSpeed = 50,
  wordPause = 2000,
  loop = false,
}: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isComplete) return;

    const type = () => {
      const currentWord = words[currentWordIndex];

      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, -1));
        if (currentText === "") {
          setIsDeleting(false);
          const nextIndex = (currentWordIndex + 1) % words.length;
          if (nextIndex === 0 && !deleteOnComplete && !loop) {
            setIsComplete(true);
            onComplete?.();
            return;
          }
          setCurrentWordIndex(loop ? nextIndex : nextIndex % words.length);
        }
      } else {
        setCurrentText(currentWord.slice(0, currentText.length + 1));
        if (currentText === currentWord) {
          if (
            currentWordIndex === words.length - 1 &&
            !deleteOnComplete &&
            !loop
          ) {
            setIsComplete(true);
            onComplete?.();
            return;
          }
          setTimeout(() => setIsDeleting(true), wordPause);
          return;
        }
      }
    };

    const timer = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [
    currentText,
    currentWordIndex,
    isDeleting,
    words,
    isComplete,
    onComplete,
    deleteOnComplete,
    typingSpeed,
    deletingSpeed,
    wordPause,
    loop,
  ]);

  return (
    <span className={className}>
      {currentText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  );
}

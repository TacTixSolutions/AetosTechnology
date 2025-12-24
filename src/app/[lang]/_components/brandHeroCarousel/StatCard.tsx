"use client";

import { CircularProgress } from "@/components/ui/circular-progress";
import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  percentage: string;
  description: string;
}

function StatCard({ percentage, description }: StatCardProps) {
  const numericValue = Math.abs(parseFloat(percentage));
  const [animatedValue, setAnimatedValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentCard = cardRef.current;
    if (currentCard) {
      observer.observe(currentCard);
    }

    return () => {
      if (currentCard) {
        observer.unobserve(currentCard);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 800;
    const steps = 60;
    const increment = numericValue / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newValue = Math.min(increment * currentStep, numericValue);
      setAnimatedValue(newValue);

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedValue(numericValue);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, numericValue]);

  return (
    <div
      ref={cardRef}
      className="bg-white rounded-2xl p-4 shadow-lg flex flex-col items-center justify-center min-h-32 max-h-[170px] min-w-32 lg:min-w-40 lg:min-h-40"
    >
      <div className="relative w-[100px] h-[100px]">
        {/* <CircularProgress
          value={animatedValue}
          size={100}
          strokeWidth={10}
          showLabel
          className="stroke-transparent"
          labelClassName="font-bold text-base text-black"
        /> */}
        {/* Overlay SVG gradient */}
        <svg
          className="absolute top-0 left-0 w-full h-full rotate-[-90deg]"
          viewBox="0 0 100 100"
        >
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#024E63" />
              <stop offset="100%" stopColor="#3C50E0" />
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#gradient)"
            strokeWidth="10"
            fill="none"
            strokeDasharray={2 * Math.PI * 45}
            strokeDashoffset={2 * Math.PI * 45 * (1 - animatedValue / 100)}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center font-bold text-base text-black">
          {percentage}
        </div>
      </div>
      <p className="text-xs text-center text-gray-600 leading-tight">
        {description}
      </p>
    </div>
  );
}

export default StatCard;

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

    const duration = 500;
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
      className="bg-white rounded-2xl p-4 shadow-lg flex flex-col items-center justify-center min-h-32 min-w-32 lg:min-w-40 lg:min-h-40"
    >
      <div className="mb-2">
        <CircularProgress
          value={animatedValue}
          size={100}
          strokeWidth={10}
          showLabel
          progressClassName="stroke-[#274fb3]"
          className="stroke-transparent"
          labelClassName="font-bold text-base text-black"
          renderLabel={() => percentage}
        />
      </div>
      <p className="text-xs text-center text-gray-600 leading-tight">
        {description}
      </p>
    </div>
  );
}

export default StatCard;

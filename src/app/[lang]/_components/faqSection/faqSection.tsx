"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { MinusIcon, PlusIcon } from "lucide-react";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

// Custom trigger with plus/minus icons for FAQ section only
function FaqAccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "flex flex-1 items-start justify-start gap-4 py-4 text-left font-medium transition-all outline-none group",
          className
        )}
        {...props}
      >
        <div className="relative size-6 shrink-0 flex items-center justify-center">
          <PlusIcon className="absolute size-7 mt-1.5 text-[#1B1139] transition-opacity duration-200 group-data-[state=open]:opacity-0" />

          <MinusIcon className="absolute  size-7 mt-1.5 text-white transition-opacity duration-200 group-data-[state=closed]:opacity-0" />
        </div>
        {children}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function FaqSection() {
  const faqs: FAQ[] = [
    {
      id: 1,
      question: "What is SuperVisor?",
      answer:
        "SuperVisor is a comprehensive retail management platform designed to streamline operations, improve communication, and enhance efficiency across your retail network.",
    },
    {
      id: 2,
      question: "How does SuperVisor improve store operations?",
      answer:
        "SuperVisor provides real-time visibility, digital checklists, and automated reporting to help you coordinate better and execute faster in your stores.",
    },
    {
      id: 3,
      question: "Can I customize the platform for my needs?",
      answer:
        "Yes, SuperVisor is fully customizable to match your specific business processes, workflows, and operational requirements.",
    },
    {
      id: 4,
      question: "What kind of support do you provide?",
      answer:
        "We offer comprehensive support including onboarding, training, technical assistance, and ongoing consultation to ensure your success.",
    },
    {
      id: 5,
      question: "How long does implementation take?",
      answer:
        "Implementation typically takes 2-4 weeks depending on your requirements, with full support from our team throughout the process.",
    },
  ];

  return (
    <div className="w-8/10 mx-auto py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8">
          <section className="lg:col-span-3">
            <h2 className="text-3xl font-poppins md:text-4xl font-semibold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <Accordion
              type="single"
              collapsible
              className="w-full space-y-4 font-inter"
            >
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={`item-${faq.id}`}
                  className="bg-white rounded-lg border py-4 card-shadow border-gray-200 px-6 data-[state=open]:bg-brand"
                >
                  <FaqAccordionTrigger className="text-left text-[#1B1139] hover:no-underline py-4 text-xl font-semibold data-[state=open]:text-white">
                    {faq.question}
                  </FaqAccordionTrigger>
                  <AccordionContent className="text-white font-medium pb-4 data-[state=open]:text-white">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        </div>
      </div>
    </div>
  );
}

export default FaqSection;

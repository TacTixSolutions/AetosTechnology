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
import { client } from "@/lib/sanity";

interface FAQ {
  _id: string;
  questionEn: string;
  questionFr: string;
  answerEn: string;
  answerFr: string;
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

function FaqSection({ lang }: { lang: string }) {
  const [faqs, setFaqs] = React.useState<FAQ[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const query = `*[_type == "faq"] {
          _id,
          questionEn,
          questionFr,
          answerEn,
          answerFr
        }`;
        const data = await client.fetch(query);
        setFaqs(data);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  return (
    <div className="w-8/10 mx-auto py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8">
          <section className="lg:col-span-3">
            <h2 className="text-3xl font-poppins md:text-4xl font-semibold text-center mb-12">
              Frequently Asked Questions
            </h2>
            {loading ? (
              <div className="text-center py-8">
                <p className="text-gray-600">Loading FAQs...</p>
              </div>
            ) : faqs.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-600">
                  No FAQs available at the moment.
                </p>
              </div>
            ) : (
              <Accordion
                type="single"
                collapsible
                className="w-full space-y-4 font-inter"
              >
                {faqs.map((faq) => (
                  <AccordionItem
                    key={faq._id}
                    value={`item-${faq._id}`}
                    className="bg-white rounded-lg border py-4 card-shadow border-gray-200 px-6 data-[state=open]:bg-brand"
                  >
                    <FaqAccordionTrigger className="text-left text-[#1B1139] hover:no-underline py-4 text-xl font-semibold data-[state=open]:text-white">
                      {lang === "fr" ? faq.questionFr : faq.questionEn}
                    </FaqAccordionTrigger>
                    <AccordionContent className="text-white font-medium pb-4 data-[state=open]:text-white">
                      {lang === "fr" ? faq.answerFr : faq.answerEn}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

export default FaqSection;

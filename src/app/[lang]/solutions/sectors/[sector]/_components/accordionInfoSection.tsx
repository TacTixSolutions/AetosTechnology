import AccordionInfoCard from "./accordionInfoCard";

interface AccordionItem {
  title: string;
  description: string;
}

interface AccordionSection {
  title: string;
  description?: string;
  items: AccordionItem[];
  imageSrc: string;
  imageAlt: string;
}

interface AccordionInfoSectionProps {
  sections: AccordionSection[];
}

function AccordionInfoSection({ sections }: AccordionInfoSectionProps) {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <div className="w-full py-16 space-y-24">
      {sections.map((section, index) => (
        <AccordionInfoCard
          key={index}
          title={section.title}
          items={section.items}
          imageSrc={section.imageSrc}
          imageAlt={section.imageAlt}
          layout={index % 2 === 0 ? "text-right" : "text-left"}
        />
      ))}
    </div>
  );
}

export default AccordionInfoSection;

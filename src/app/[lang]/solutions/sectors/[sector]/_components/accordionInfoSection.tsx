import AccordionInfoCard from "./accordionInfoCard";

interface AccordionItem {
  title: string;
  description: string;
}

interface FloatingImages {
  topLeft?: string;
  topRight?: string;
  bottomLeft?: string;
  bottomRight?: string;
}

interface AccordionSection {
  title: string;
  description?: string;
  items: AccordionItem[];
  imageSrc: string;
  imageAlt: string;
  floatingImages?: FloatingImages;
}

interface AccordionInfoSectionProps {
  sections: AccordionSection[];
  sectionTitle?: string;
  sectionTitleHighlight?: string;
}

function AccordionInfoSection({
  sections,
  sectionTitle,
  sectionTitleHighlight,
}: AccordionInfoSectionProps) {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <div className="w-full py-16 space-y-12 lg:space-y-24">
      {(sectionTitle || sectionTitleHighlight) && (
        <p className="text-2xl lg:text-4xl text-center font-semibold font-poppins">
          {sectionTitle}
          <span className="text-brand"> {sectionTitleHighlight}</span>
        </p>
      )}
      {sections.map((section, index) => (
        <AccordionInfoCard
          key={index}
          title={section.title}
          items={section.items}
          imageSrc={section.imageSrc}
          imageAlt={section.imageAlt}
          layout={index % 2 === 0 ? "text-right" : "text-left"}
          floatingImages={section.floatingImages}
        />
      ))}
    </div>
  );
}

export default AccordionInfoSection;

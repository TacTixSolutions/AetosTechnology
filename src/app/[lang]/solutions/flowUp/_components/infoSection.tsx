import { ReactNode } from "react";
import InfoSectionCard from "./infoSectionCard";

interface InfoCardData {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  floatingComponentOne?: ReactNode;
  floatingComponentTwo?: ReactNode;
}

interface InfoSectionProps {
  cards: InfoCardData[];
}

function InfoSection({ cards }: InfoSectionProps) {
  return (
    <div className="w-9/10 mx-auto py-16">
      <div className="space-y-4">
        {cards.map((card, index) => (
          <InfoSectionCard
            key={index}
            title={card.title}
            description={card.description}
            imageSrc={card.imageSrc}
            imageAlt={card.imageAlt}
            layout={index % 2 === 0 ? "text-left" : "text-right"}
            floatingComponentOne={card.floatingComponentOne}
            floatingComponentTwo={card.floatingComponentTwo}
          />
        ))}
      </div>
    </div>
  );
}

export default InfoSection;

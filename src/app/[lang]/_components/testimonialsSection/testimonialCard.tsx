import QuoteIcon from "@/components/icons/quoteIcon";
import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  logo: string;
}
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <CarouselItem className="md:basis-1/2 h-[500px] lg:basis-1/3 pb-4 relative">
      <div className="flex w-95/100 mx-auto flex-col h-[300px] items-center justify-center bg-white rounded-[36px] border border-[#EBEBEB] px-4 pt-8 pb-16  max-w-[500px]">
        <QuoteIcon />
        <p className="font-isotek text-sm mt-6 text-[#575757]">
          {testimonial.content}
        </p>
        <div className="flex items-center mt-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${
                i < testimonial.rating ? "text-[#FF9900]" : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
            </svg>
          ))}
        </div>
      </div>
      <div
        className="h-20 w-full max-w-[500px] relative"
        style={{ zIndex: 1000 }}
      >
        <div className="absolute font-isotek left-1/2 transform -translate-x-1/2 -top-12 w-full h-auto flex items-center justify-start flex-col gap-2">
          <div className="">
            <Image
              src={testimonial.logo}
              alt={`${testimonial.name} logo`}
              width={80}
              height={80}
              className="w-20 h-20 card-shadow shrink-0 rounded-full bg-white object-contain"
            />
          </div>
          <p className="font-semibold">{testimonial.name}</p>
          <p className="w-1/2 mx-auto text-center">
            {testimonial.role} - {testimonial.company}
          </p>
        </div>
      </div>
    </CarouselItem>
  );
}

export default TestimonialCard;

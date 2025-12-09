import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

function CTASection() {
  return (
    <div className="relative w-9/10 h-auto md:h-[420px] bg-[#e6eef0] flex items-center justify-center flex-col md:flex-row gap-8 p-12 mx-auto mb-16 rounded-[50px]">
      <div className="w-full lg:w-45/100 h-full flex items-center justify-center ">
        <Image
          src="/sectors/cta.png"
          alt="CTA Image"
          width={478}
          height={328}
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="w-full md:w-55/100 gap-4 font-inter flex-col h-full flex items-center md:items-start justify-center">
        <p className="font-bold text-2xl md:text-4xl lg:text-[62px]">
          Prêts à passer à l’action ?
        </p>
        <p className=" text-base text-gray-600 md:text-lg">
          Nous concevons des solutions fiables, adaptées à vos besoins métier,
          et vous accompagnons à chaque étape pour un résultat durable.
        </p>
        <Button className="px-20 w-9/10 md:w-80 py-6 font-poppins uppercase shadow-lg bg-[#024e63] hover:bg-brand">
          Contactez-nous
          <ArrowRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
}

export default CTASection;

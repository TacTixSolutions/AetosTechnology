"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ClientForm from "./ClientForm";
import PartnerForm from "./PartnerForm";
import JoinUsForm from "./JoinUsForm";
import { CheckIcon } from "lucide-react";

export default function ContactContent() {
  const [activeTab, setActiveTab] = useState<"client" | "partner" | "join">(
    "client"
  );

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <Image
          src="/contactPageBg.webp"
          alt="Contact background"
          fill
          className="object-cover rounded-l-xl"
          priority
        />
        <div className="absolute top-8 h-16 w-full">
          <Image
            src="/logoWithTextWhite.png"
            alt="Contact background"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="absolute bottom-8 left-8 text-white space-y-2  font-poppins">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center p-1 bg-brand rounded-md">
              <CheckIcon className="w-5 h-5" strokeWidth={3} />
            </div>
            <span>Demo built around your needs.</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center p-1 bg-brand rounded-md">
              <CheckIcon className="w-5 h-5" strokeWidth={3} />
            </div>
            <span>Instant access to tools you can start using now</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center p-1 bg-brand rounded-md">
              <CheckIcon className="w-5 h-5" strokeWidth={3} />
            </div>
            <span>Straight answers to your questions, without buzzwords</span>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-lg space-y-6">
          <Tabs
            value={activeTab}
            onValueChange={(value) =>
              setActiveTab(value as "client" | "partner" | "join")
            }
            className="w-full"
          >
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              <h1 className="text-xl font-poppins font-medium mb-4">
                Tell us who you are
              </h1>

              <TabsList className="flex-1 w-full grid grid-cols-3 mb-6 bg-white gap-2">
                <TabsTrigger
                  value="client"
                  className="font-inter data-[state=active]:bg-[#024E63] data-[state=active]:text-white data-[state=inactive]:bg-gray-200 data-[state=inactive]:text-gray-700 rounded-md"
                >
                  Client
                </TabsTrigger>
                <TabsTrigger
                  value="partner"
                  className="font-inter data-[state=active]:bg-[#024E63] data-[state=active]:text-white data-[state=inactive]:bg-gray-200 data-[state=inactive]:text-gray-700 rounded-md"
                >
                  Partner
                </TabsTrigger>
                <TabsTrigger
                  value="join"
                  className="font-inter data-[state=active]:bg-[#024E63] data-[state=active]:text-white data-[state=inactive]:bg-gray-200 data-[state=inactive]:text-gray-700 rounded-md"
                >
                  Join us
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="client">
              <ClientForm />
            </TabsContent>

            <TabsContent value="partner">
              <PartnerForm />
            </TabsContent>

            <TabsContent value="join">
              <JoinUsForm />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

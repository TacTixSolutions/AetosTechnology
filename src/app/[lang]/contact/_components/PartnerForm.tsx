"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import { sendContactEmail } from "@/app/actions/sendContactEmail";
import { PhoneInput } from "@/components/phone-input";

interface PartnerFormProps {
  dict: {
    intro: string;
    lastName: string;
    firstName: string;
    company: string;
    country: string;
    phoneNumber: string;
    email: string;
    website: string;
    sector: string;
    hasClients: string;
    yes: string;
    no: string;
    submit: string;
    submitting: string;
  };
}

export default function PartnerForm({ dict }: PartnerFormProps) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [hasClients, setHasClients] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    // Add hasClients value to data
    data.hasClients = hasClients;

    const result = await sendContactEmail({
      type: "partner",
      data,
    });

    setLoading(false);
    setMessage(result.message);

    if (result.success) {
      (e.target as HTMLFormElement).reset();
      setHasClients("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 font-inter">
      <p className="font-medium font-poppins mb-4">{dict.intro}</p>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium mb-1 block">
            {dict.firstName}
          </label>
          <Input name="firstName" required placeholder={dict.firstName} />
        </div>
        <div>
          <label className="text-sm font-medium mb-1 block">
            {dict.lastName}
          </label>
          <Input name="lastName" required placeholder={dict.lastName} />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">{dict.company}</label>
        <Input name="company" required placeholder={dict.company} />
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">{dict.country}</label>
        <Input name="country" required placeholder={dict.country} />
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">
          {dict.phoneNumber}
        </label>
        <PhoneInput
          name="phone"
          defaultCountry="TN"
          required
          placeholder="Value"
        />
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">{dict.email}</label>
        <Input name="email" type="email" required placeholder={dict.email} />
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">{dict.website}</label>
        <Input name="website" type="url" placeholder={dict.website} />
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">{dict.sector}</label>
        <Input name="sector" required placeholder={dict.sector} />
      </div>

      <div className="flex flex-row items-center justify-between">
        <p className="text-sm font-medium mb-1 block">{dict.hasClients}</p>
        <ToggleGroup
          type="single"
          value={hasClients}
          onValueChange={(value) => {
            if (value) setHasClients(value);
          }}
          className="justify-start p-2 bg-white"
        >
          <ToggleGroupItem
            value={dict.yes}
            aria-label={dict.yes}
            className="data-[state=on]:bg-[#024E63] data-[state=on]:text-white rounded-lg px-6"
          >
            {dict.yes}
          </ToggleGroupItem>
          <ToggleGroupItem
            value={dict.no}
            aria-label={dict.no}
            className="data-[state=on]:bg-[#024E63] data-[state=on]:text-white rounded-lg px-6"
          >
            {dict.no}
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-[#024E63] hover:bg-[#024E63]/90"
      >
        {loading ? dict.submitting : dict.submit}
      </Button>

      {message && (
        <p
          className={`text-sm text-center ${
            message.includes("success") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}

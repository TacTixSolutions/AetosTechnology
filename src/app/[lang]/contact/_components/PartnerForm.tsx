"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};

    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    const result = await sendContactEmail({
      type: "partner",
      data,
    });

    setLoading(false);
    setMessage(result.message);

    if (result.success) {
      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 font-inter">
      <p className="font-medium font-poppins mb-4">{dict.intro}</p>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium mb-1 block">
            {dict.lastName}
          </label>
          <Input name="nom" required placeholder="Value" />
        </div>
        <div>
          <label className="text-sm font-medium mb-1 block">
            {dict.firstName}
          </label>
          <Input name="prenom" required placeholder="Value" />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">{dict.company}</label>
        <Input name="entreprise" required placeholder="Value" />
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">{dict.country}</label>
        <Input name="pays" required placeholder="Value" />
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
        <Input name="email" type="email" required placeholder="Value" />
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">{dict.website}</label>
        <Input name="website" type="url" placeholder="Value" />
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">{dict.sector}</label>
        <Input name="secteur" required placeholder="Value" />
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">
          {dict.hasClients}
        </label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input type="radio" name="hasClients" value={dict.yes} />
            <span>{dict.yes}</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="hasClients" value={dict.no} />
            <span>{dict.no}</span>
          </label>
        </div>
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

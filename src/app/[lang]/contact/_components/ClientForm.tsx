"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { sendContactEmail } from "@/app/actions/sendContactEmail";
import { PhoneInput } from "@/components/phone-input";

interface ClientFormProps {
  dict: {
    intro: string;
    firstName: string;
    lastName: string;
    jobTitle?: string;
    businessEmail: string;
    phoneNumber: string;
    company: string;
    locations: string;
    employees: string;
    placeholder: string;
    footer: string;
    footerLink: string;
    submit: string;
    submitting: string;
  };
}

export default function ClientForm({ dict }: ClientFormProps) {
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
      type: "client",
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
            {dict.firstName}
          </label>
          <Input name="firstName" required placeholder="Value" />
        </div>
        <div>
          <label className="text-sm font-medium mb-1 block">
            {dict.lastName}
          </label>
          <Input name="lastName" required placeholder="Value" />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">
          {dict.jobTitle || "Job title"}
        </label>
        <Input name="jobTitle" required placeholder="Value" />
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">
          {dict.businessEmail}
        </label>
        <Input name="email" type="email" required placeholder="Value" />
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
        <label className="text-sm font-medium mb-1 block">{dict.company}</label>
        <Input name="company" required placeholder="Value" />
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">
          {dict.locations}
        </label>
        <Input name="locations" type="number" required placeholder="Value" />
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">
          {dict.employees}
        </label>
        <Input name="employees" type="number" required placeholder="Value" />
      </div>

      <p className="text-xs text-gray-600">
        <span className="font-bold">{dict.footer}</span> {dict.footerLink}
      </p>

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

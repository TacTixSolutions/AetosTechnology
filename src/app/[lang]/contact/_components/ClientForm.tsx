"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sendContactEmail } from "@/app/actions/sendContactEmail";

export default function ClientForm() {
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
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-sm font-poppins mb-4">
        Give us a short intro to your business
      </p>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium mb-1 block">First name</label>
          <Input name="firstName" required placeholder="Value" />
        </div>
        <div>
          <label className="text-sm font-medium mb-1 block">Last name</label>
          <Input name="lastName" required placeholder="Value" />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">Job title</label>
        <Input name="jobTitle" required placeholder="Value" />
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">Business email</label>
        <Input name="email" type="email" required placeholder="Value" />
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">Phone number</label>
        <div className="grid grid-cols-3 gap-2">
          <Select name="countryCode" defaultValue="+216">
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="+216">+216</SelectItem>
              <SelectItem value="+33">+33</SelectItem>
              <SelectItem value="+1">+1</SelectItem>
            </SelectContent>
          </Select>
          <Input
            name="phone"
            required
            placeholder="+216"
            className="col-span-2"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">Company</label>
        <Input name="company" required placeholder="Value" />
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">
          Number of locations
        </label>
        <Input name="locations" type="number" required placeholder="Value" />
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">
          Number of frontline employees
        </label>
        <Input name="employees" type="number" required placeholder="Value" />
      </div>

      <p className="text-xs text-gray-600">
        Already a AETOS customer? Please reach out to our customer support team
      </p>

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-[#024E63] hover:bg-[#024E63]/90"
      >
        {loading ? "Sending..." : "Send"}
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

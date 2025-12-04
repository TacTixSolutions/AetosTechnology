"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { sendContactEmail } from "@/app/actions/sendContactEmail";
import { PhoneInput } from "@/components/phone-input";

export default function PartnerForm() {
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
      <p className="font-medium font-poppins mb-4">
        Give us a short intro to your business
      </p>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium mb-1 block">Nom</label>
          <Input name="nom" required placeholder="Value" />
        </div>
        <div>
          <label className="text-sm font-medium mb-1 block">Prénom</label>
          <Input name="prenom" required placeholder="Value" />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">
          Nom de l&apos;entreprise
        </label>
        <Input name="entreprise" required placeholder="Value" />
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">Pays</label>
        <Input name="pays" required placeholder="Value" />
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">
          Numéro de téléphone
        </label>
        <PhoneInput
          name="phone"
          defaultCountry="TN"
          required
          placeholder="Value"
        />
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">Adresse e-mail</label>
        <Input name="email" type="email" required placeholder="Value" />
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">
          Site web (optional)
        </label>
        <Input name="website" type="url" placeholder="Value" />
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">
          Secteur d&apos;activité
        </label>
        <Input name="secteur" required placeholder="Value" />
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">
          Avez-vous déjà des clients intéressés?
        </label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input type="radio" name="hasClients" value="Oui" />
            <span>Oui</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="hasClients" value="Non" />
            <span>Non</span>
          </label>
        </div>
      </div>

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

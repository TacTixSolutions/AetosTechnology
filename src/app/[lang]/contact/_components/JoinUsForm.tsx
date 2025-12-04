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
import { UploadCloudIcon, FileIcon, XIcon } from "lucide-react";

export default function JoinUsForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    const fileInput = document.getElementById("cv-upload") as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};

    formData.forEach((value, key) => {
      if (key !== "cv") {
        data[key] = value.toString();
      }
    });

    const cvFile = formData.get("cv") as File;

    const result = await sendContactEmail({
      type: "join",
      data,
      cvFile: cvFile && cvFile.size > 0 ? cvFile : undefined,
    });
    setLoading(false);
    setMessage(result.message);

    if (result.success) {
      (e.target as HTMLFormElement).reset();
      setSelectedFile(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-sm font-poppins mb-4">
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
        <label className="text-sm font-medium mb-1 block">Adresse e-mail</label>
        <Input name="email" type="email" required placeholder="Value" />
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">
          Numéro de téléphone
        </label>
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
        <label className="text-sm font-medium mb-1 block">Poste souhaité</label>
        <Input name="poste" required placeholder="Value" />
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">
          LinkedIn (optionnel)
        </label>
        <Input name="linkedin" type="url" placeholder="Value" />
      </div>

      <div>
        <label className="text-sm font-medium mb-1 block">CV (upload)</label>
        <input
          type="file"
          name="cv"
          accept=".pdf,.doc,.docx"
          className="hidden"
          id="cv-upload"
          onChange={handleFileChange}
        />
        {!selectedFile ? (
          <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-[#024E63] transition-colors">
            <label
              htmlFor="cv-upload"
              className="cursor-pointer flex flex-col items-center"
            >
              <UploadCloudIcon className="w-12 h-12 text-gray-400 mb-2" />
              <span className="text-sm text-gray-600">Click to upload</span>
              <span className="text-xs text-gray-500 mt-1">
                PDF, DOC, DOCX (Max 10MB)
              </span>
            </label>
          </div>
        ) : (
          <div className="border-2 border-[#024E63] bg-[#024E63]/5 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileIcon className="w-8 h-8 text-[#024E63]" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {selectedFile.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {(selectedFile.size / 1024).toFixed(2)} KB
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleRemoveFile}
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}
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

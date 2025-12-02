import type { Metadata } from "next";
import { inter, poppins, isotek } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aetos Technology",
  description: "Aetos Technology Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${inter.variable} ${poppins.variable} ${isotek.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

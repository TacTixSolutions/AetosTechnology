import type { Metadata } from "next";
import { inter, poppins, isotek, spaceGrotesk, roboto } from "@/lib/fonts";
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/lib/i18n-config";
import Navbar from "@/components/navbar";
import "./globals.css";
import Footer from "@/components/footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Aetos Technology",
  description: "Aetos Technology Website",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body
        className={`${inter.variable} ${poppins.variable} ${isotek.variable} ${spaceGrotesk.variable} ${roboto.variable}  antialiased`}
      >
        <Navbar dict={dict.navbar} lang={lang} />
        {children}
        <Footer dict={dict.footer} lang={lang} />
      </body>
      <GoogleAnalytics gaId="G-WK27LXFSX5" />
    </html>
  );
}

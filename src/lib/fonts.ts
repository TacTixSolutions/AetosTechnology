import { Inter, Poppins, Istok_Web } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const isotek = Istok_Web({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-isotek",
  display: "swap",
});

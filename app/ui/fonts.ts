import { Poppins, Lusitana } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "700"],
});

export const lusitana = Lusitana({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lusitana",
  weight: ["400", "700"],
});

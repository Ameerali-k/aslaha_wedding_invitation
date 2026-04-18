import localFont from "next/font/local";
import { Outfit, Cinzel } from "next/font/google";

export const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const cinzelGoogle = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

export const cigra = localFont({
  src: "../../public/cigra/WEB FONT/Cigra Free Demo.woff",
  variable: "--font-cigra",
});

export const cinzelLocal = localFont({
  src: "../../public/cinzel/Cinzel-VariableFont_wght.ttf",
  variable: "--font-cinzel-local",
});

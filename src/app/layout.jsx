import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Nadra Zaki Saputra | Web Developer",
  description: "Portfolio of Nadra Zaki Saputra, a passionate Web Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} font-sans bg-[#0a0a0a] text-white antialiased selection:bg-emerald-500/30`}>
        <header className="flex justify-center">
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import Lenis from "@/components/Lenis";
import TransitionSlider from "@/components/TransitionSlider";
import { Provider } from "jotai";
import TopSection from "@/components/TopSection";

const space = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Varad - Portfolio',
  description: "Welcome to my portfolio, a showcase of my work as a full stack web developer. Here, you'll find a curated collection of my projects, providing insights into my skills and passion for creating exceptional web applications.",
  keywords: ["varad", "prabhu", "vaxad", "varad portfolio", "varad prabhu portfolio"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={space.className + " selection:bg-lime-300 overflow-x-clip relative"}>
        <Cursor />
        <Lenis>
          <Provider>
            <TopSection />
            {children}
            <TransitionSlider />
          </Provider>
        </Lenis>
      </body>
    </html>
  );
}

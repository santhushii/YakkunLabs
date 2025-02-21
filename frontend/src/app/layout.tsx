import React from "react";
import "./globals.css";


export const metadata = {
  title: "YakkunLabs – Crafting the Future of Gaming",
  description: "Explore, Collect, and Dive into the BEANZ Universe!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#1A1A1A] text-white">{children}</body>
    </html>
  );
}

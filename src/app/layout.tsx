import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ayato964.github.io/MyProfile/"),
  title: "Takaaki Nagoshi (Ayato) | AI Researcher & Developer",
  description: "Portfolio of Takaaki Nagoshi (Ayato). AI Researcher specializing in Symbolic Music Generation, Transformers, and Multimodal Agents. Graduate student at Nihon University.",
  keywords: ["AI Researcher", "Music Generation", "Machine Learning", "Transformer", "Takaaki Nagoshi", "Ayato", "Portfolio"],
  authors: [{ name: "Takaaki Nagoshi" }],
  openGraph: {
    title: "Takaaki Nagoshi (Ayato) | AI Researcher & Developer",
    description: "Bridging the gap between music theory and generative AI. Explore my research in symbolic music generation.",
    url: "https://ayato964.github.io/MyProfile/",
    siteName: "Takaaki Nagoshi Portfolio",
    images: [
      {
        url: "https://ayato964.github.io/MyProfile/images/profile.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Takaaki Nagoshi (Ayato) | AI Researcher",
    description: "Specializing in Transformer-based Music Generation & Multimodal Agents.",
    images: ["https://ayato964.github.io/MyProfile/images/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

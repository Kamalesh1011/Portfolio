import type { Metadata } from "next";
import { Orbitron, JetBrains_Mono, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-sharetech",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Kamaleshwaran BM | Software Developer & AI Systems Builder",
  description:
    "Software developer specializing in multi-agent AI systems, BCI pipelines, and autonomous coding runtimes. International award winner at Taipei 2026.",
  keywords: [
    "AI",
    "multi-agent systems",
    "BCI",
    "brain-computer interface",
    "Kamaleshwaran BM",
    "portfolio",
    "machine learning",
    "LangGraph",
    "autonomous agents",
    "software developer",
    "Go",
    "React",
    "FastAPI",
  ],
  openGraph: {
    title: "Kamaleshwaran BM | Software Developer & AI Systems Builder",
    description:
      "Software developer specializing in multi-agent AI systems, BCI pipelines, and autonomous coding runtimes.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${jetbrainsMono.variable} ${shareTechMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}

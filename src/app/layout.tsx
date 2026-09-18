import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import Shell from "@/components/Shell";
import "./globals.css";

const body = DM_Sans({ variable: "--font-body", subsets: ["latin"], display: "swap" });
const heading = Manrope({ variable: "--font-heading", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://donatofaith.vercel.app"),
  title: { default: "Oluwalana Faith — Software Developer", template: "%s | Oluwalana Faith" },
  description: "Oluwalana Faith builds thoughtful, user-centred products across AI, Web3, data and the modern web.",
  authors: [{ name: "Oluwalana Faith" }],
  creator: "Oluwalana Faith",
  alternates: { canonical: "/" },
  openGraph: { title: "Oluwalana Faith — Software Developer", description: "Building digital products with clarity and purpose.", url: "/", type: "website", images: [{ url: "/projects/portrait.png", alt: "Oluwalana Faith" }] },
  twitter: { card: "summary_large_image", images: ["/projects/portrait.png"] },
};

const themeScript = `try{var t=localStorage.getItem('portfolio-theme');document.documentElement.dataset.theme=t==='dark'?'dark':'light'}catch(e){document.documentElement.dataset.theme='light'}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head><body className={`${body.variable} ${heading.variable}`}><Shell>{children}</Shell></body></html>;
}

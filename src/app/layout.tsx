import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ variable: "--font-body", subsets: ["latin"], display: "swap" });
const manrope = Manrope({ variable: "--font-heading", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://donatofaith.vercel.app"),
  title: {
    default: "Oluwalana Faith — Product-Focused Software Developer",
    template: "%s | Oluwalana Faith",
  },
  description: "Portfolio of Oluwalana Faith, a product-focused software developer building intelligent, user-centred products across AI, Web3, data and the modern web.",
  keywords: ["Oluwalana Faith", "Software Developer", "Product Developer", "Frontend Developer", "AI Developer", "Web3 Developer", "Next.js Developer", "React Developer", "Nigeria"],
  authors: [{ name: "Oluwalana Faith" }],
  creator: "Oluwalana Faith",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    locale: "en_NG",
    title: "Oluwalana Faith — Product-Focused Software Developer",
    description: "Building thoughtful digital products across AI, Web3, data and the modern web.",
    siteName: "Oluwalana Faith",
    images: [{ url: "/projects/portrait.png", width: 1200, height: 630, alt: "Oluwalana Faith" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oluwalana Faith — Product-Focused Software Developer",
    description: "Building thoughtful digital products across AI, Web3, data and the modern web.",
    images: ["/projects/portrait.png"],
  },
  robots: { index: true, follow: true },
};

const themeScript = `
  try {
    var savedTheme = localStorage.getItem("portfolio-theme");
    document.documentElement.dataset.theme = savedTheme === "light" ? "light" : "dark";
  } catch {
    document.documentElement.dataset.theme = "dark";
  }
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${dmSans.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Kumbh_Sans } from "next/font/google";
// import { Analytics } from "@vercel/analytics/react";
// import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "./components/header-section/Header";
import localFont from "next/font/local";
import { ViewProvider } from "@/contexts/ViewContext";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });
const recoleta = localFont({
  src: "fonts/Recoleta-Medium.woff2",
  variable: "--font-recoleta",
});

export const metadata: Metadata = {
  title: "Venkata Sai Esampalli — Full Stack Software Engineer",
  description:
    "A Full Stack Software Engineer passionate about crafting next-gen software. I drive growth by crafting user experiences that blend aesthetics with functionality through my design and development skills. I thrive on turning ideas into seamless digital solutions.",
  keywords: [
    "frontend",
    "backend",
    "react",
    "tech",
    "NestJs",
    "full stack engineer",
    "developer portfolio",
    "creative development",
    "India",
    "software engineer",
    "portfolio",
  ],
  icons: [
    {
      rel: 'icon',
      url: '/VenkataSai_Logo_circular.png',
    },
  ],
  openGraph: {
    title: "Venkata Sai Esampalli — Full Stack Software Engineer",
    description:
      "Full Stack Engineer passionate about crafting next-gen software and creative websites. I drive growth by crafting user experiences that blend aesthetics with functionality through my design and development skills. I thrive on turning ideas into seamless digital solutions.",
    url: "https://www.venkatasaiesampalli.me",
    siteName: "venkatasaiesampalli.me",
    images: [
      {
        url: "https://your-actual-image-link.com/profile.png",
        width: 1200,
        height: 630,
        alt: "Venkata Sai Esampalli — Full Stack Software Engineer",
      },
      {
        url: "https://your-actual-image-link.com/profile-small.png",
        width: 800,
        height: 800,
        alt: "Venkata Sai Esampalli — Full Stack Software Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Venkata Sai Esampalli — Software Engineer",
    description:
      "Full Stack Engineer passionate about crafting next-gen software. I drive growth by crafting user experiences that blend aesthetics with functionality through my design and development skills. I thrive on turning ideas into seamless digital solutions.",
    creator: "@YourTwitterHandle",
    images: ["https://your-actual-image-link.com/profile.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      "max-image-preview": "large",
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${kumbhSans.className} max-w-[90%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden`}
      >
        <ViewProvider>
          <Header />
          {children}
        </ViewProvider>
        {/* <Analytics /> */}
        {/* <SpeedInsights /> */}
      </body>
    </html>
  );
}

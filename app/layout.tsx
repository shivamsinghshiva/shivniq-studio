import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: {
    default: "Shivniq Studio | Premium Web & App Development",
    template: "%s | Shivniq Studio",
  },

  description:
    "Shivniq Studio is a premium software agency building modern websites, web applications, mobile apps and AI solutions for startups and businesses.",

  keywords: [
    "Shivniq Studio",
    "web development",
    "app development",
    "software development",
    "UI UX design",
    "AI solutions",
    "Next.js development",
    "React development",
    "mobile app development",
    "web design",
  ],

  authors: [
    {
      name: "Shivniq Studio",
    },
  ],

  creator: "Shivniq Studio",

  metadataBase: new URL("https://shivniq-studio.vercel.app"),

  openGraph: {
    title: "Shivniq Studio | Premium Web & App Development",

    description:
      "We build modern websites, web applications, mobile apps and AI solutions for startups and businesses.",

    url: "https://shivniq-studio.vercel.app",

    siteName: "Shivniq Studio",

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shivniq Studio - Premium Web & App Development",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Shivniq Studio | Premium Web & App Development",

    description:
      "Modern websites, web applications, mobile apps and AI solutions.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
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
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
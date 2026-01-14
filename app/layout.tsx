import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import Navbar from "@/components/navbar";
import Container from "@/components/container";
import Separator from "@/components/ui/separator";

const outfit = Outfit({
  weight: "300",
});

export const metadata: Metadata = {
  icons: {
    icon: "/me.png",
    apple: "/me.png",
  },
  title: "Vaibhav Mishra",
  description:
    "Hi, I'm Vaibhav, a Full-stack developer I care deeply about clean design, and the small details that make an interface feel right, specializing in Next.js, React, TypeScript, and modern web technologies.",
  keywords: [
    "Vaibhav Mishra",
    "Full Stack Developer",
    "Design Engineer",
    "Next.js Developer",
    "React Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Vaibhav Mishra" }],
  creator: "Vaibhav Mishra",

  openGraph: {
    title: "Vaibhav Mishra",
    description:
      "Hi, I'm Vaibhav, Full-stack developer building clean, scalable web applications.",
    url: "https://ivaibhav.me",
    siteName: "Vaibhav Mishra Portfolio",
    images: [
      {
        url: "/ogImage.png",
        width: 1200,
        height: 630,
        alt: "Vaibhav Mishra",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vaibhav Mishra",
    description:
      "Hi, I'm Vaibhav, Full-stack developer building clean, scalable web applications.",
    images: ["/ogImage.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  alternates: {
    canonical: "https://ivaibhav.me",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased ${outfit.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Container>
            <Navbar />
            <Separator />
            {children}
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ByteRoot Labs",
  description: "Professional software development company specializing in web applications, agentic AI solutions, and cloud solutions. Transform your ideas into powerful digital solutions with ByteRoot Labs.",
  keywords: ["software development", "web development", "agentic AI solutions", "cloud solutions", "ByteRoot Labs", "custom software"],
  authors: [{ name: "ByteRoot Labs" }],
  creator: "ByteRoot Labs",
  publisher: "ByteRoot Labs",
  metadataBase: new URL('https://byterootlabs.vercel.app'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://byterootlabs.vercel.app",
    siteName: "ByteRoot Labs",
    title: "ByteRoot Labs — Software Development Company",
    description: "Professional software development company specializing in web applications, agentic AI solutions, and cloud solutions.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "ByteRoot Labs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ByteRoot Labs — Software Development Company",
    description: "Professional software development company specializing in web applications, agentic AI solutions, and cloud solutions.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code-here',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HandGestureDetection from "./components/HandGestureDetection/HandGestureDetection";
import Navbar from "./components/Navbar/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Hand Gesture Navigation - Navigate with AI-Powered Gestures",
    template: "%s | Hand Gesture Navigation"
  },
  description: "Experience the future of web navigation with our AI-powered hand gesture recognition system. Control your browsing experience with simple hand movements using MediaPipe technology - no touch required!",
  keywords: [
    "hand gesture navigation",
    "AI navigation",
    "MediaPipe",
    "gesture recognition",
    "touchless navigation",
    "web accessibility",
    "machine learning",
    "computer vision",
    "Next.js",
    "React",
    "gesture control",
    "hands-free browsing"
  ],
  authors: [
    {
      name: "Hand Gesture Navigation Team",
      url: "https://gesture-nav.com"
    }
  ],
  creator: "Hand Gesture Navigation",
  publisher: "Hand Gesture Navigation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://gesture-nav.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Hand Gesture Navigation - Navigate with AI-Powered Gestures",
    description: "Experience the future of web navigation with our AI-powered hand gesture recognition system. Control your browsing with simple hand movements using MediaPipe technology.",
    url: "https://gesture-nav.com",
    siteName: "Hand Gesture Navigation",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hand Gesture Navigation - AI-Powered Navigation System",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hand Gesture Navigation - Navigate with AI-Powered Gestures",
    description: "Experience the future of web navigation with our AI-powered hand gesture recognition system using MediaPipe technology.",
    images: ["/twitter-image.jpg"],
    creator: "@gesture_nav",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon-aksesibilitas.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-aksesibilitas.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/icon-aksesibilitas.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/icon-aksesibilitas.png",
        color: "#2563eb",
      },
    ],
  },
  manifest: "/manifest.json",
  category: "technology",
  classification: "AI Navigation System",
  referrer: "origin-when-cross-origin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon-aksesibilitas.png" type="image/x-icon" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <HandGestureDetection />
      </body>
    </html>
  );
}

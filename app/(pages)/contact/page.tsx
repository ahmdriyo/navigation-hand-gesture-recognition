import React from "react";
import ContactView from "./ContactView";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact - Hand Gesture Navigation",
  description:
    "Get in touch with the Hand Gesture Navigation team. Ask questions, report issues, or collaborate on gesture recognition technology.",
  keywords: [
    "contact gesture navigation",
    "hand gesture support",
    "MediaPipe help",
    "gesture recognition contact",
    "technical support",
    "collaboration",
    "feedback",
  ],
  openGraph: {
    title: "Contact - Hand Gesture Navigation",
    description:
      "Get in touch with the Hand Gesture Navigation team for support and collaboration.",
    images: [
      {
        url: "/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Hand Gesture Navigation Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact - Hand Gesture Navigation",
    description: "Get in touch with the Hand Gesture Navigation team.",
    images: ["/og-contact.jpg"],
  },
  alternates: {
    canonical: "/contact",
  },
};

const ContactPage = () => {
  return <ContactView />;
};

export default ContactPage;

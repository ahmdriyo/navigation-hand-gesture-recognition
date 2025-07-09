import React from 'react'
import DocumentationViwe from './DocumentationView'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Documentation - Hand Gesture Navigation',
  description: 'Complete technical documentation for hand gesture navigation system. Learn about MediaPipe AI, gesture recognition, implementation guide, and API reference.',
  keywords: [
    'gesture navigation documentation',
    'MediaPipe documentation',
    'hand gesture API',
    'gesture recognition guide',
    'AI navigation docs',
    'technical documentation',
    'implementation guide',
    'gesture recognition tutorial'
  ],
  openGraph: {
    title: 'Documentation - Hand Gesture Navigation',
    description: 'Complete technical documentation for hand gesture navigation system using MediaPipe AI.',
    images: [
      {
        url: '/og-documentation.jpg',
        width: 1200,
        height: 630,
        alt: 'Hand Gesture Navigation Documentation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Documentation - Hand Gesture Navigation',
    description: 'Complete technical documentation for hand gesture navigation system.',
    images: ['/og-documentation.jpg'],
  },
  alternates: {
    canonical: '/documentation',
  },
};
const DocumentationPage = () => {
  return (
  <DocumentationViwe/>
  )
}

export default DocumentationPage
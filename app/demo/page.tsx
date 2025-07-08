import React from 'react';
import Navbar from '../components/Navbar';

const DemoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar 
        logo="GestureNav"
        navItems={[
          { label: 'Home', href: '/' },
          { label: 'Documentation', href: '/documentation' },
          { label: 'Demo', href: '/demo' },
          { label: 'Contact', href: '/contact' },
        ]}
        ctaText="View Docs"
        ctaHref="/documentation"
      />

      <main className="pt-16">
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              🚀 Live Demo
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Coming Soon! Demo interaktif untuk Hand Gesture Navigation akan segera tersedia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/documentation" 
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Read Documentation
              </a>
              <a 
                href="/" 
                className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors duration-200"
              >
                Back to Home
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DemoPage;

import Navbar from '@/app/components/Navbar/Navbar';
import React from 'react';

const HomeView = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navbar */}
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

      {/* Hero Section */}
      <section className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Modern Navbar with
              <span className="text-blue-600"> Hand Gesture</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Experience the future of navigation with our responsive navbar that features 
              smooth animations, blur effects, and modern design principles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/demo" 
                className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Try Demo
              </a>
              <a 
                href="/documentation" 
                className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors duration-200"
              >
                Read Documentation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Content Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Features</h2>
            <p className="text-xl text-gray-600">Scroll to see the navbar blur effect in action</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Responsive Design</h3>
              <p className="text-gray-600">
                Automatically adapts to different screen sizes with a hamburger menu for mobile devices.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Blur Effect</h3>
              <p className="text-gray-600">
                Beautiful backdrop blur effect when scrolling with transparent background.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smooth Animations</h3>
              <p className="text-gray-600">
                Elegant transitions and hover effects using Tailwind CSS animations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More sections to demonstrate scrolling */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">About Section</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              This is a demo section to show how the navbar behaves when you scroll. 
              Notice how the navbar becomes more opaque and gets a blur effect as you scroll down.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Services Section</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keep scrolling to see more of the sticky navbar effect. The navigation stays 
              at the top and adapts its appearance based on the scroll position.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Contact Section</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to implement this navbar in your project? The component is fully 
              customizable and easy to integrate with any Next.js application.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
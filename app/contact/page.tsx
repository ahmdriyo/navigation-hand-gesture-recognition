import React from 'react';
import Navbar from '../components/Navbar';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100">
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
              📧 Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Hubungi kami untuk pertanyaan, kolaborasi, atau bantuan teknis terkait Hand Gesture Navigation.
            </p>
            <div className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="p-6 bg-white rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">📧 Email</h3>
                  <p className="text-gray-600">contact@gesturenav.com</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">🌐 GitHub</h3>
                  <p className="text-gray-600">github.com/gesturenav</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <a 
                href="/documentation" 
                className="px-8 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Read Documentation First
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;

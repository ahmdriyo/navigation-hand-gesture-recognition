import React from 'react';

const HomeView = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-600/10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6 animate-bounce">
              🚀 Powered by MediaPipe AI
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Navigate with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Hand Gestures</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Experience the future of web navigation with our revolutionary gesture recognition system. 
              Control your browsing experience with simple hand movements - no touch required!
            </p>
            
            {/* Gesture Demo Icons */}
            <div className="flex justify-center items-center gap-8 mb-12">
              <div className="text-center group">
                <div className="text-6xl mb-2 group-hover:scale-125 transition-transform duration-300">✋</div>
                <p className="text-sm text-gray-500">Open Palm</p>
              </div>
              <div className="text-center group">
                <div className="text-6xl mb-2 group-hover:scale-125 transition-transform duration-300">✌️</div>
                <p className="text-sm text-gray-500">Victory</p>
              </div>
              <div className="text-center group">
                <div className="text-6xl mb-2 group-hover:scale-125 transition-transform duration-300">☝️</div>
                <p className="text-sm text-gray-500">Pointing Up</p>
              </div>
              <div className="text-center group">
                <div className="text-6xl mb-2 group-hover:scale-125 transition-transform duration-300">👍</div>
                <p className="text-sm text-gray-500">Thumbs Up</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/demo" 
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>🎯 Try Live Demo</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a 
                href="/documentation" 
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>📚 Documentation</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
              ⚡ Key Features
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Gesture Navigation?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionary technology that transforms how you interact with web applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:from-blue-100 hover:to-blue-200 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🤖</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Recognition</h3>
              <p className="text-gray-600">
                Menggunakan MediaPipe AI untuk mengenali gesture dengan akurasi tinggi dan latensi rendah.
              </p>
            </div>
            
            <div className="group p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl hover:from-purple-100 hover:to-purple-200 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">⚡</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Processing</h3>
              <p className="text-gray-600">
                Deteksi gesture secara real-time dengan response time kurang dari 100ms untuk pengalaman yang smooth.
              </p>
            </div>
            
            <div className="group p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl hover:from-green-100 hover:to-green-200 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🔒</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Privacy First</h3>
              <p className="text-gray-600">
                Semua processing dilakukan secara lokal di browser, tidak ada data yang dikirim ke server.
              </p>
            </div>
            
            <div className="group p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl hover:from-orange-100 hover:to-orange-200 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cross-Platform</h3>
              <p className="text-gray-600">
                Berjalan sempurna di semua browser modern dan perangkat, tanpa perlu instalasi tambahan.
              </p>
            </div>
            
            <div className="group p-8 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl hover:from-pink-100 hover:to-pink-200 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Integration</h3>
              <p className="text-gray-600">
                Mudah diintegrasikan ke dalam proyek Next.js dengan komponen yang sudah siap pakai.
              </p>
            </div>
            
            <div className="group p-8 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl hover:from-teal-100 hover:to-teal-200 transition-all duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">♿</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Accessibility</h3>
              <p className="text-gray-600">
                Memberikan alternatif navigasi untuk pengguna dengan keterbatasan fisik atau preferensi khusus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              🔧 How It Works
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple Steps, Powerful Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Teknologi gesture navigation bekerja dalam 4 langkah sederhana namun canggih
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="relative">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  1
                </div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-200 rounded-full opacity-50 animate-ping"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Camera Access</h3>
              <p className="text-gray-600">
                Mengakses kamera perangkat untuk menangkap gerakan tangan real-time
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  2
                </div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-purple-200 rounded-full opacity-50 animate-ping delay-200"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Recognition</h3>
              <p className="text-gray-600">
                MediaPipe AI menganalisis dan mengenali gesture tangan dengan akurasi tinggi
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  3
                </div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-green-200 rounded-full opacity-50 animate-ping delay-400"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Command Mapping</h3>
              <p className="text-gray-600">
                Gesture diubah menjadi perintah navigasi yang spesifik untuk setiap halaman
              </p>
            </div>
            
            <div className="text-center group">
              <div className="relative">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  4
                </div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-orange-200 rounded-full opacity-50 animate-ping delay-600"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Navigation</h3>
              <p className="text-gray-600">
                Sistem mengeksekusi navigasi ke halaman tujuan dengan smooth transition
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gesture Guide Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
              🖐️ Gesture Guide
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Master the Gestures</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pelajari gesture yang tersedia dan halaman tujuan masing-masing
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:from-blue-100 hover:to-blue-200 transition-all duration-300 transform hover:scale-105 border-2 border-blue-200">
              <div className="text-center">
                <div className="text-6xl mb-4 group-hover:scale-125 transition-transform">✌️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Victory</h3>
                <p className="text-gray-600 mb-4">Peace sign gesture</p>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-200 text-blue-700 text-sm font-medium">
                  → Home Page
                </div>
              </div>
            </div>
            
            <div className="group p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl hover:from-green-100 hover:to-green-200 transition-all duration-300 transform hover:scale-105 border-2 border-green-200">
              <div className="text-center">
                <div className="text-6xl mb-4 group-hover:scale-125 transition-transform">✋</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Open Palm</h3>
                <p className="text-gray-600 mb-4">Open hand gesture</p>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-200 text-green-700 text-sm font-medium">
                  → Documentation
                </div>
              </div>
            </div>
            
            <div className="group p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl hover:from-purple-100 hover:to-purple-200 transition-all duration-300 transform hover:scale-105 border-2 border-purple-200">
              <div className="text-center">
                <div className="text-6xl mb-4 group-hover:scale-125 transition-transform">☝️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Pointing Up</h3>
                <p className="text-gray-600 mb-4">Index finger up</p>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-200 text-purple-700 text-sm font-medium">
                  → Demo Page
                </div>
              </div>
            </div>
            
            <div className="group p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl hover:from-orange-100 hover:to-orange-200 transition-all duration-300 transform hover:scale-105 border-2 border-orange-200">
              <div className="text-center">
                <div className="text-6xl mb-4 group-hover:scale-125 transition-transform">👍</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Thumbs Up</h3>
                <p className="text-gray-600 mb-4">Thumb Up gesture</p>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-200 text-orange-700 text-sm font-medium">
                  → Contact Page
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 text-sm font-medium">
              💡 <span className="ml-2">Tip: Hold gesture for 1 second to trigger navigation</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
              🎯 Ready to Get Started?
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Transform Your Web Experience
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Join the revolution of touchless navigation and create web applications that respond to your every gesture. 
              The future of interaction is here, and it&apos;s in your hands.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="/demo" 
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-3"
              >
                <span>🚀 Start Demo Now</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">95%</div>
                  <div className="text-sm text-gray-400">Accuracy</div>
                </div>
                <div className="w-px h-12 bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">&lt;100ms</div>
                  <div className="text-sm text-gray-400">Response Time</div>
                </div>
                <div className="w-px h-12 bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">0</div>
                  <div className="text-sm text-gray-400">Server Requests</div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-3xl mb-3">🔒</div>
                <h3 className="font-semibold mb-2">Privacy First</h3>
                <p className="text-sm text-gray-400">All processing happens locally in your browser</p>
              </div>
              
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-semibold mb-2">Lightning Fast</h3>
                <p className="text-sm text-gray-400">Real-time gesture recognition with minimal latency</p>
              </div>
              
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-3xl mb-3">🌐</div>
                <h3 className="font-semibold mb-2">Universal</h3>
                <p className="text-sm text-gray-400">Works on all modern browsers and devices</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
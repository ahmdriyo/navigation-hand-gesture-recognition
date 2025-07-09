import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

interface GestureExample {
  gesture: string;
  description: string;
  action: string;
}

interface TechFeature {
  name: string;
  description: string;
}

interface WorkflowStep {
  step: number;
  title: string;
  description: string;
}

const DocumentationViwe = () => {
  const gestureExamples: GestureExample[] = [
    { gesture: '✋', description: 'Open Hand', action: 'Stop/Pause' },
    { gesture: '✌️', description: 'Peace Sign', action: 'Navigate to About' },
    { gesture: '✊', description: 'Closed Fist', action: 'Navigate to Home' },
    { gesture: '👍', description: 'Thumbs Up', action: 'Confirm Action' },
  ];

  const mainFeatures: string[] = [
    'Deteksi gesture real-time',
    'Navigasi antar halaman menggunakan tangan',
    'Tidak memerlukan sentuhan',
    'Responsif dan mendukung berbagai ukuran layar',
    'Menggunakan MediaPipe HandLandmarker'
  ];

  const mediapipeModules: TechFeature[] = [
    { name: 'Face Detection', description: 'Mendeteksi dan melacak wajah dalam real-time' },
    { name: 'Hand Tracking', description: 'Melacak 21 titik landmark pada tangan' },
    { name: 'Pose Estimation', description: 'Deteksi pose dan gerakan tubuh' },
    { name: 'Objectron', description: 'Deteksi dan pelacakan objek 3D' },
  ];

  const workflowSteps: WorkflowStep[] = [
    {
      step: 1,
      title: 'Aktivasi Kamera',
      description: 'Kamera aktif dan menangkap citra tangan pengguna secara real-time'
    },
    {
      step: 2,
      title: 'Deteksi Gesture',
      description: 'MediaPipe mendeteksi posisi dan gesture tangan menggunakan 21 landmark points'
    },
    {
      step: 3,
      title: 'Interpretasi Perintah',
      description: 'Gesture diubah menjadi perintah navigasi (contoh: 🖐️ = Documentation, ✌️ = Home)'
    },
    {
      step: 4,
      title: 'Eksekusi Navigasi',
      description: 'Sistem mengeksekusi navigasi berdasarkan gesture yang terdeteksi'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar 
        logo="GestureNav"
        navItems={[
          { label: 'Home', href: '/' },
          { label: 'Documentation', href: '/documentation' },
          { label: 'Demo', href: '/demo' },
          { label: 'Contact', href: '/contact' },
        ]}
        ctaText="Try Demo"
        ctaHref="/demo"
      />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              📚 Documentation: Hand Gesture Navigation
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Dokumentasi teknis dan konsep sistem navigasi gesture tangan untuk web. 
              Pelajari cara kerja teknologi yang memungkinkan navigasi tanpa sentuhan menggunakan gerakan tangan.
            </p>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-12 px-4 bg-white/50 backdrop-blur-sm">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">📑 Daftar Isi</h2>
            <nav className="grid md:grid-cols-2 gap-4">
              <a href="#overview" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
                <span className="font-medium text-blue-600">🔍 Apa itu Gesture Navigation?</span>
              </a>
              <a href="#features" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
                <span className="font-medium text-blue-600">⚙️ Fitur Utama</span>
              </a>
              <a href="#mediapipe" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
                <span className="font-medium text-blue-600">🤖 Teknologi MediaPipe</span>
              </a>
              <a href="#workflow" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
                <span className="font-medium text-blue-600">📈 Cara Kerja Sistem</span>
              </a>
            </nav>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">🔍 Apa itu Gesture Navigation?</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Gesture Navigation adalah teknologi revolusioner yang memungkinkan pengguna untuk berpindah antar halaman 
                website hanya dengan menggunakan gerakan tangan, tanpa perlu menyentuh mouse, keyboard, atau layar sentuh.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-8">
                Teknologi ini sangat berguna untuk situasi di mana interaksi tanpa sentuhan diperlukan, seperti dalam 
                presentasi, lingkungan steril, atau untuk aksesibilitas pengguna dengan keterbatasan fisik.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contoh Gesture yang Didukung:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {gestureExamples.map((gesture, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
                    <span className="text-2xl">{gesture.gesture}</span>
                    <div>
                      <p className="font-medium text-gray-900">{gesture.description}</p>
                      <p className="text-sm text-gray-600">{gesture.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">⚙️ Fitur Utama</h2>
            
            <div className="space-y-4">
              {mainFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 font-medium">{feature}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-3">🚀 Keunggulan Sistem:</h3>
              <ul className="space-y-2 text-green-700">
                <li>• <strong>Akurasi Tinggi:</strong> Menggunakan AI MediaPipe dengan tingkat deteksi 95%+</li>
                <li>• <strong>Latensi Rendah:</strong> Response time kurang dari 100ms</li>
                <li>• <strong>Cross-Platform:</strong> Berjalan di semua browser modern</li>
                <li>• <strong>Privacy-First:</strong> Semua processing dilakukan secara lokal</li>
              </ul>
            </div>
          </div>
        </section>

        {/* MediaPipe Section */}
        <section id="mediapipe" className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">🤖 Apa itu MediaPipe?</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                MediaPipe adalah framework open-source yang dikembangkan oleh Google untuk membangun pipeline 
                machine learning multimodal. Framework ini dirancang untuk real-time processing berbagai jenis 
                data seperti video, audio, dan sensor data.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-8">
                Dalam konteks Hand Gesture Navigation, kami menggunakan modul <strong>MediaPipe HandLandmarker</strong> 
                yang mampu mendeteksi 21 titik landmark pada tangan dengan akurasi tinggi dalam real-time.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-6">Modul MediaPipe Populer:</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {mediapipeModules.map((module, index) => (
                <div key={index} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <h4 className="font-semibold text-gray-900 mb-3">{module.name}</h4>
                  <p className="text-gray-600 text-sm">{module.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-3">🖐️ MediaPipe Hand Landmarks</h4>
              <p className="text-gray-700 mb-4">
                HandLandmarker mendeteksi 21 titik koordinat 3D pada setiap tangan, meliputi:
              </p>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                <li>• Wrist (pergelangan tangan)</li>
                <li>• Thumb (4 titik jempol)</li>
                <li>• Index finger (4 titik telunjuk)</li>
                <li>• Middle finger (4 titik jari tengah)</li>
                <li>• Ring finger (4 titik jari manis)</li>
                <li>• Pinky (4 titik kelingking)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section id="workflow" className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">📈 Cara Kerja Gesture Navigation</h2>
            
            <p className="text-gray-700 leading-relaxed mb-12">
              Sistem Hand Gesture Navigation bekerja melalui pipeline yang terdiri dari 4 langkah utama:
            </p>

            <ol className="space-y-8">
              {workflowSteps.map((step, index) => (
                <li key={index} className="relative">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  {index < workflowSteps.length - 1 && (
                    <div className="absolute left-6 top-12 w-0.5 h-8 bg-gray-300"></div>
                  )}
                </li>
              ))}
            </ol>

            <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">🔧 Detail Teknis:</h3>
              <ul className="space-y-2 text-blue-700 text-sm">
                <li>• <strong>Frame Rate:</strong> 30 FPS untuk deteksi real-time</li>
                <li>• <strong>Input Resolution:</strong> Mendukung 480p hingga 1080p</li>
                <li>• <strong>Confidence Threshold:</strong> Minimum 70% untuk gesture recognition</li>
                <li>• <strong>Processing:</strong> Client-side dengan WebAssembly (WASM)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">📚 Sumber Daya Tambahan</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">📖 Dokumentasi Resmi</h3>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="https://developers.google.com/mediapipe/solutions/vision/hand_landmarker" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
                    >
                      MediaPipe HandLandmarker Documentation
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://mediapipe.dev/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
                    >
                      MediaPipe Official Website
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://github.com/google/mediapipe" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
                    >
                      MediaPipe GitHub Repository
                    </a>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🔗 Quick Navigation</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#overview" className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">
                      Kembali ke Overview
                    </a>
                  </li>
                  <li>
                    <a href="#features" className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">
                      Lihat Fitur Utama
                    </a>
                  </li>
                  <li>
                    <a href="#mediapipe" className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">
                      Pelajari MediaPipe
                    </a>
                  </li>
                  <li>
                    <a href="#workflow" className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">
                      Cara Kerja Sistem
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">💡 Tips untuk Developer:</h3>
              <ul className="space-y-2 text-yellow-700 text-sm">
                <li>• Pastikan browser mendukung WebRTC dan MediaDevices API</li>
                <li>• Gunakan HTTPS untuk akses kamera di production</li>
                <li>• Implementasikan fallback untuk browser yang tidak support</li>
                <li>• Optimasi performa dengan debouncing gesture detection</li>
                <li>• Tambahkan visual feedback untuk user experience yang lebih baik</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 bg-gray-900 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4">Ready to implement Gesture Navigation?</h3>
            <p className="text-gray-300 mb-6">
              Mulai eksplorasi teknologi gesture navigation dan ciptakan pengalaman user yang revolusioner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/demo" 
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Try Live Demo
              </a>
              <a 
                href="/" 
                className="px-6 py-3 border border-gray-600 text-gray-300 font-medium rounded-lg hover:border-gray-500 hover:text-white transition-colors duration-200"
              >
                Back to Home
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default DocumentationViwe;

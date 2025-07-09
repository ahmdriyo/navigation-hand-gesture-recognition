import React from 'react';
interface GestureExample {
  gesture: string;
  description: string;
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

const DocumentationView = () => {
  const gestureExamples: GestureExample[] = [
    { gesture: '✋', description: 'Open Hand' },
    { gesture: '✌️', description: 'Peace Victory' },
    { gesture: '☝️', description: 'Pointing Up' },
    { gesture: '👍', description: 'Thumbs Up' },
    { gesture: '👎', description: 'Thumbs Down' },
    { gesture: '✊', description: 'Closed_Fist' },
    { gesture: '🤟', description: 'ILoveYou' },
  ];

  const mainFeatures: string[] = [
    'Deteksi gesture real-time',
    'Navigasi antar halaman menggunakan tangan',
    'Tidak memerlukan sentuhan',
    'Responsif dan mendukung berbagai ukuran layar',
    'Menggunakan MediaPipe GestureRecognizer untuk pengenalan gesture real-time'
  ];

  const mediapipeModules: TechFeature[] = [
    { name: 'Gesture Recognition', description: 'Mengenali gesture tangan seperti Victory, Open Palm, dan Thumbs Up' },
    { name: 'Hand Tracking', description: 'Melacak posisi tangan untuk analisis gesture' },
    { name: 'Face Detection', description: 'Mendeteksi dan melacak wajah dalam real-time' },
    { name: 'Pose Estimation', description: 'Deteksi pose dan gerakan tubuh' },
  ];

  const workflowSteps: WorkflowStep[] = [
    {
      step: 1,
      title: 'Aktivasi Kamera',
      description: 'Kamera aktif dan menangkap citra tangan pengguna secara real-time'
    },
    {
      step: 2,
      title: 'Gesture Recognition',
      description: 'MediaPipe GestureRecognizer menganalisis frame video dan mengidentifikasi gesture tangan yang telah dilatih sebelumnya'
    },
    {
      step: 3,
      title: 'Interpretasi Perintah',
      description: 'Gesture yang dikenali diubah menjadi perintah navigasi (contoh: Victory = Home, Open_Palm = Documentation)'
    },
    {
      step: 4,
      title: 'Eksekusi Navigasi',
      description: 'Sistem mengeksekusi navigasi berdasarkan gesture yang terdeteksi'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
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
        <section className="py-8 sm:py-12 px-4 bg-white/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  📦 Instalasi MediaPipe
                </h3>
                <p className="text-blue-100 text-sm mt-1">
                  Panduan lengkap untuk menginstall dan menggunakan MediaPipe
                </p>
              </div>
              
              <div className="p-6">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Installation Steps */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2 text-lg">
                        🚀 Langkah Instalasi
                      </h4>
                      <p className="text-gray-700 text-sm mb-5">
                        Untuk memulai menggunakan MediaPipe dalam proyek:
                      </p>
                      
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-semibold text-gray-800 mb-2">1. Install package:</p>
                          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <code className="text-green-400 text-sm font-mono whitespace-nowrap">
                              npm install @mediapipe/tasks-vision
                            </code>
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm font-semibold text-gray-800 mb-2">2. Import ke dalam project:</p>
                          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <code className="text-blue-400 text-sm font-mono block">
                              {`import { GestureRecognizer, FilesetResolver } from '@mediapipe/tasks-vision';`}
                            </code>
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm font-semibold text-gray-800 mb-2">3. Alternative dengan yarn:</p>
                          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                            <code className="text-yellow-400 text-sm font-mono whitespace-nowrap">
                              yarn add @mediapipe/tasks-vision
                            </code>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Requirements & Info */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2 text-lg">
                        ⚙️ System Requirements
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="bg-green-50 border-l-4 border-green-400 rounded-lg p-4">
                          <p className="text-sm font-semibold text-green-800 mb-2">✅ Browser Support</p>
                          <ul className="text-sm text-green-700 space-y-1">
                            <li>• Chrome 88+ (Recommended)</li>
                            <li>• Firefox 78+</li>
                            <li>• Safari 14+</li>
                            <li>• Edge 88+</li>
                          </ul>
                        </div>
                        
                        <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-4">
                          <p className="text-sm font-semibold text-blue-800 mb-2">📋 Dependencies</p>
                          <ul className="text-sm text-blue-700 space-y-1">
                            <li>• WebAssembly (WASM) support</li>
                            <li>• WebRTC & MediaDevices API</li>
                            <li>• HTTPS (untuk akses kamera)</li>
                          </ul>
                        </div>
                        
                        <div className="bg-purple-50 border-l-4 border-purple-400 rounded-lg p-4">
                          <p className="text-sm font-semibold text-purple-800 mb-2">🔧 Technical Info</p>
                          <ul className="text-sm text-purple-700 space-y-1">
                            <li>• Version: 0.10.3+ (Recommended)</li>
                            <li>• Bundle size: ~15MB (gzipped)</li>
                            <li>• GPU acceleration support</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Quick Start Code Example */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2 text-lg">
                    💻 Quick Start Example
                  </h4>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm font-mono text-gray-300 whitespace-pre-wrap">
{`import { GestureRecognizer, FilesetResolver } from '@mediapipe/tasks-vision';
const loadGestureRecognizer = async () => {
  const vision = await FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm"
  );
  const gestureRecognizer = await GestureRecognizer.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath: "https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task",
      delegate: "GPU",
    },
    runningMode: "VIDEO",
  });
  return gestureRecognizer;
};`}
                    </pre>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://developers.google.com/mediapipe/solutions/vision/hand_landmarker"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-semibold text-center flex items-center justify-center gap-2 shadow-md"
                  >
                    📖 Baca Dokumentasi Lengkap
                  </a>
                  <a
                    href="https://github.com/google/mediapipe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200 text-sm font-semibold text-center flex items-center justify-center gap-2 shadow-md"
                  >
                    🔗 GitHub Repository Mediapipe
                  </a>
                  <a
                    href="https://github.com/ahmdriyo/navigation-hand-gesture-recognition"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-gray-300 bg-red-500 text-gray-100 rounded-lg hover:border-gray-50 hover:bg-red-600 transition-colors duration-200 text-sm font-semibold text-center flex items-center justify-center gap-2 shadow-md"
                  >
                    🔥 My GitHub Repository
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Table of Contents */}
        <section className="py-12 px-4 bg-white/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">📑 Daftar Isi</h2>
            <nav className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
              <a href="#core-functions" className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
                <span className="font-medium text-blue-600">🧩 Core Functions</span>
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
                <li>• <strong>Akurasi Tinggi:</strong> Menggunakan AI MediaPipe GestureRecognizer dengan tingkat akurasi 95%+</li>
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
                Dalam konteks Hand Gesture Navigation, kami menggunakan modul <strong>MediaPipe GestureRecognizer</strong> 
                yang mampu mengenali berbagai gesture tangan seperti Victory, Open Palm, Pointing Up, dan Thumbs Down 
                dengan akurasi tinggi dalam real-time.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-6">Modul MediaPipe untuk Computer Vision:</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {mediapipeModules.map((module, index) => (
                <div key={index} className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                  <h4 className="font-semibold text-gray-900 mb-3">{module.name}</h4>
                  <p className="text-gray-600 text-sm">{module.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-3">🤖 MediaPipe Gesture Recognition</h4>
              <p className="text-gray-700 mb-4">
                GestureRecognizer dapat mengenali berbagai gesture tangan yang telah dilatih sebelumnya, termasuk:
              </p>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                <li>• <strong>Victory:</strong> Gesture peace (✌️)</li>
                <li>• <strong>Open Palm:</strong> Telapak tangan terbuka (✋)</li>
                <li>• <strong>Pointing Up:</strong> Jari telunjuk menunjuk ke atas (☝️)</li>
                <li>• <strong>Thumbs Up:</strong> Jempol ke atas (👍)</li>
                <li>• <strong>Thumbs Down:</strong> Jempol ke bawah (👎)</li>
                <li>• <strong>Closed Fist:</strong> Kepalan tangan (✊)</li>
                <li>• <strong>ILoveYou:</strong> Gesture I Love You (🤟)</li>
              </ul>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700">
                  <strong>Catatan:</strong> Model gesture recognizer menggunakan machine learning yang telah 
                  dilatih untuk mengenali gesture-gesture umum dengan tingkat akurasi tinggi.
                </p>
              </div>
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
              <h3 className="text-lg font-semibold text-blue-800 mb-3">🔧 Detail Teknis Gesture Recognition:</h3>
              <ul className="space-y-2 text-blue-700 text-sm">
                <li>• <strong>Frame Rate:</strong> 30 FPS untuk deteksi gesture real-time</li>
                <li>• <strong>Input Resolution:</strong> Mendukung 480p hingga 1080p</li>
                <li>• <strong>Confidence Threshold:</strong> Minimum 70% untuk gesture recognition</li>
                <li>• <strong>Processing:</strong> Client-side dengan WebAssembly (WASM)</li>
                <li>• <strong>Model Size:</strong> ~15MB untuk gesture recognition model</li>
                <li>• <strong>Supported Gestures:</strong> 7+ gesture categories pre-trained</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Core Functions Section */}
        <section id="core-functions" className="py-16 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">🧩 Core Functions: HandGestureDetection</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed">
                Komponen <code className="bg-gray-100 px-2 py-1 rounded text-sm">HandGestureDetection</code> adalah 
                inti dari sistem gesture navigation. Berikut adalah penjelasan mendalam tentang fungsi-fungsi utamanya:
              </p>
            </div>

            <div className="space-y-8">
              {/* Function 1 - Gesture Recognition Setup */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    ⚡ Gesture Recognition Setup
                  </h3>
                </div>
                <div className="p-6">
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">📝 Penjelasan Fungsi:</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• <strong>Inisialisasi MediaPipe:</strong> Memuat model gesture recognition</li>
                        <li>• <strong>GPU Acceleration:</strong> Menggunakan delegate GPU untuk performa optimal</li>
                        <li>• <strong>Model Loading:</strong> Memuat model pre-trained dari Google</li>
                        <li>• <strong>Running Mode:</strong> Dikonfigurasi untuk video real-time</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">💻 Core Code:</h4>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-xs font-mono text-gray-300">
{`const loadRecognizer = async () => {
  const vision = await (
    await import("@mediapipe/tasks-vision")
  ).FilesetResolver.forVisionTasks(
    "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.3/wasm"
  );

  const recognizer = await (
    await import("@mediapipe/tasks-vision")
  ).GestureRecognizer.createFromOptions(vision, {
    baseOptions: {
      modelAssetPath: "https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task",
      delegate: "GPU",
    },
    runningMode: "VIDEO",
  });
  setGestureRecognizer(recognizer);
};`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Function 2 - Camera & Video Stream */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    📹 Camera & Video Stream Management
                  </h3>
                </div>
                <div className="p-6">
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">📝 Penjelasan Fungsi:</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• <strong>Camera Access:</strong> Mengakses kamera menggunakan getUserMedia</li>
                        <li>• <strong>Stream Management:</strong> Mengelola video stream secara efisien</li>
                        <li>• <strong>Auto-play:</strong> Otomatis memutar video ketika siap</li>
                        <li>• <strong>Cleanup:</strong> Membersihkan resources saat komponen unmount</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">💻 Core Code:</h4>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-xs font-mono text-gray-300">
{`const enableCam = async () => {
  const mediaStream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });
  setStream(mediaStream);
  if (videoRef.current) {
    videoRef.current.srcObject = mediaStream;
    videoRef.current.play();
    videoRef.current.addEventListener("loadeddata", predictWebcam);
  }
};

// Cleanup function
return () => {
  if (stream) {
    stream.getTracks().forEach((track) => track.stop());
    setStream(null);
  }
};`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Function 3 - Real-time Gesture Detection */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-6 py-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    🤖 Real-time Gesture Detection
                  </h3>
                </div>
                <div className="p-6">
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">📝 Penjelasan Fungsi:</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• <strong>Gesture Recognition:</strong> Mengidentifikasi gesture dari video frame menggunakan model AI</li>
                        <li>• <strong>Category Detection:</strong> Mengembalikan kategori gesture yang terdeteksi dengan confidence score</li>
                        <li>• <strong>Throttling:</strong> Membatasi update gesture setiap 1 detik untuk stabilitas</li>
                        <li>• <strong>Performance:</strong> Menggunakan requestAnimationFrame untuk smooth performance</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">💻 Core Code:</h4>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-xs font-mono text-gray-300">
{`const predictWebcam = async () => {
  if (!gestureRecognizer || !videoRef.current || !canvasRef.current) return;

  const nowInMs = Date.now();
  if (videoRef.current.currentTime !== lastVideoTime) {
    lastVideoTime = videoRef.current.currentTime;
    const results = await gestureRecognizer.recognizeForVideo(
      videoRef.current,
      nowInMs
    );

    // Throttle gesture updates to 1 second
    if (nowInMs - lastGestureUpdate >= 1000) {
      const detected = results.gestures.length > 0;
      const newOutput = detected
        ? \`Gesture: \${results.gestures[0][0].categoryName}\`
        : "No gesture detected.";
      setGestureOutput(newOutput);
      lastGestureUpdate = nowInMs;
    }
  }
  animationFrameId.current = window.requestAnimationFrame(predictWebcam);
};`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Function 4 - Navigation Logic */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    🧭 Navigation Logic
                  </h3>
                </div>
                <div className="p-6">
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">📝 Penjelasan Fungsi:</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• <strong>Gesture Mapping:</strong> Memetakan gesture ke halaman tertentu</li>
                        <li>• <strong>Router Integration:</strong> Menggunakan Next.js router untuk navigasi</li>
                        <li>• <strong>Switch Control:</strong> Hanya aktif ketika switch diaktifkan</li>
                        <li>• <strong>Extensible:</strong> Mudah menambahkan gesture baru</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">💻 Core Code:</h4>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-xs font-mono text-gray-300">
{`useEffect(() => {
  if (!gestureOutput) return;
  switch (gestureOutput) {
    case "Gesture: Victory":
      router.push("/");
      break;
    case "Gesture: Open_Palm":
      router.push("/documentation");
      break;
    case "Gesture: Pointing_Up":
      router.push("/demo");
      break;
    case "Gesture: Thumb_Down":
      router.push("/contact");
      break;
  }
}, [gestureOutput, router]);`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Function 5 - Hand Landmarks Drawing */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-teal-500 to-teal-600 px-6 py-4">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    👁️ Gesture Recognition Visualization
                  </h3>
                </div>
                <div className="p-6">
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">📝 Penjelasan Fungsi:</h4>
                      <ul className="space-y-2 text-gray-700 text-sm">
                        <li>• <strong>Canvas Drawing:</strong> Menggambar landmark tangan di canvas untuk visualisasi</li>
                        <li>• <strong>Hand Connections:</strong> Menghubungkan titik-titik landmark untuk menunjukkan struktur tangan</li>
                        <li>• <strong>Visual Feedback:</strong> Memberikan feedback visual kepada user tentang deteksi tangan</li>
                        <li>• <strong>Real-time Update:</strong> Update visualization setiap frame untuk pengalaman yang smooth</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">💻 Core Code:</h4>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-xs font-mono text-gray-300">
{`// Visualisasi hasil gesture recognition
const canvasCtx = canvasRef.current.getContext("2d");
canvasCtx?.save();
canvasCtx?.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

const DrawingUtils = (await import("@mediapipe/tasks-vision")).DrawingUtils;
const drawingUtils = new DrawingUtils(canvasCtx!);

// Menggambar landmark tangan jika terdeteksi
if (results.landmarks) {
  for (const landmarks of results.landmarks) {
    drawingUtils.drawConnectors(
      landmarks,
      GestureRecognizer.HAND_CONNECTIONS,
      { color: "#ecc25e", lineWidth: 2 }
    );
    drawingUtils.drawLandmarks(landmarks, {
      color: "#0e1df5",
      lineWidth: 0.1,
    });
  }
}
canvasCtx?.restore();`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Tips */}
            <div className="mt-8 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
              <h3 className="text-lg font-semibold text-amber-800 mb-4">🚀 Performance Tips untuk Gesture Recognition:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-amber-800 mb-2">Optimasi Memory:</h4>
                  <ul className="space-y-1 text-amber-700 text-sm">
                    <li>• Cleanup streams dan recognizer saat komponen unmount</li>
                    <li>• Cancel animation frames yang tidak diperlukan</li>
                    <li>• Throttle gesture detection untuk mengurangi CPU load</li>
                    <li>• Reuse recognizer instance untuk multiple detections</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-amber-800 mb-2">Optimasi Gesture Detection:</h4>
                  <ul className="space-y-1 text-amber-700 text-sm">
                    <li>• Set confidence threshold sesuai kebutuhan</li>
                    <li>• Gunakan GPU delegate untuk performa terbaik</li>
                    <li>• Batch process multiple frames jika memungkinkan</li>
                    <li>• Implement debouncing untuk gesture changes</li>
                  </ul>
                </div>
              </div>
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
                      href="https://developers.google.com/mediapipe/solutions/vision/gesture_recognizer" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
                    >
                      MediaPipe GestureRecognizer Documentation
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
                  <li>
                    <a href="#core-functions" className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200">
                      Core Functions
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">💡 Tips untuk Developer Gesture Recognition:</h3>
              <ul className="space-y-2 text-yellow-700 text-sm">
                <li>• Pastikan browser mendukung WebRTC dan MediaDevices API</li>
                <li>• Gunakan HTTPS untuk akses kamera di production</li>
                <li>• Implementasikan fallback untuk browser yang tidak support</li>
                <li>• Set confidence threshold yang tepat untuk menghindari false positives</li>
                <li>• Test gesture recognition dengan berbagai kondisi pencahayaan</li>
                <li>• Tambahkan visual feedback untuk user experience yang lebih baik</li>
                <li>• Implement gesture debouncing untuk menghindari gesture spam</li>
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

export default DocumentationView;

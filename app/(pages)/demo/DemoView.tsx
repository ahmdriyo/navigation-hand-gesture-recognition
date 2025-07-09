"use client";
import { useGlobalStore } from "../../store/globalState";

const DemoView = () => {
  const { isSwitchOn, toggleSwitch } = useGlobalStore();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="pt-16">
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              🚀 Live Demo
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-8">
              Demo interaktif untuk Hand Gesture Navigation. Aktifkan switch
              untuk menggunakan gesture navigation.
            </p>
            {/* Gesture Navigation Switch */}
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8 max-w-md mx-auto">
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-gray-700">
                  Gesture Navigation
                </span>
                <button
                  onClick={toggleSwitch}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    isSwitchOn ? "bg-blue-600" : "bg-gray-300"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                      isSwitchOn ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>

              <div className="text-center mb-4">
                <div
                  className={`text-2xl mb-2 ${
                    isSwitchOn ? "text-green-600" : "text-gray-400"
                  }`}
                >
                  {isSwitchOn ? "✅" : "⭕"}
                </div>
                <p
                  className={`text-sm ${
                    isSwitchOn ? "text-green-600" : "text-gray-500"
                  }`}
                >
                  {isSwitchOn
                    ? "Gesture Navigation Aktif"
                    : "Gesture Navigation Nonaktif"}
                </p>
              </div>
              {/* Manual Control Buttons */}
              <div className="flex gap-2 justify-center">
                <button
                  onChange={toggleSwitch}
                  onClick={() => toggleSwitch()}
                  disabled={isSwitchOn}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isSwitchOn
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-green-600 text-white hover:bg-green-700"
                  }`}
                >
                  Turn ON
                </button>
                <button
                  onChange={toggleSwitch}
                  onClick={() => toggleSwitch()}
                  disabled={!isSwitchOn}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    !isSwitchOn
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-red-600 text-white hover:bg-red-700"
                  }`}
                >
                  Turn OFF
                </button>
              </div>
            </div>

            {/* Status Information */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Status Sistem
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="text-left">
                  <div className="flex items-center mb-2">
                    <div
                      className={`w-3 h-3 rounded-full mr-2 ${
                        isSwitchOn ? "bg-green-500" : "bg-red-500"
                      }`}
                    ></div>
                    <span className="text-sm font-medium text-gray-700">
                      Mode Gesture
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 ml-5">
                    {isSwitchOn
                      ? "Siap mendeteksi gesture"
                      : "Mode manual aktif"}
                  </p>
                </div>

                <div className="text-left">
                  <div className="flex items-center mb-2">
                    <div
                      className={`w-3 h-3 rounded-full mr-2 ${
                        isSwitchOn ? "bg-blue-500" : "bg-gray-400"
                      }`}
                    ></div>
                    <span className="text-sm font-medium text-gray-700">
                      Kamera Access
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 ml-5">
                    {isSwitchOn
                      ? "Meminta akses kamera"
                      : "Kamera tidak diperlukan"}
                  </p>
                </div>
              </div>
            </div>

            {/* Instructions */}
            {isSwitchOn && (
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 max-w-2xl mx-auto border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">
                  Gesture yang Didukung
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="text-left">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">✋</span>
                      <div>
                        <p className="font-medium text-blue-900">Open Hand</p>
                        <p className="text-sm text-blue-600">
                          Navigate to Documentation
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-left">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">✌️</span>
                      <div>
                        <p className="font-medium text-blue-900">
                          Peace Victory
                        </p>
                        <p className="text-sm text-blue-600">
                          Navigate to Home
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-left">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">☝️</span>
                      <div>
                        <p className="font-medium text-blue-900">Pointing Up</p>
                        <p className="text-sm text-blue-600">
                          Navigate to Demo
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-left">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">👍</span>
                      <div>
                        <p className="font-medium text-blue-900">Thumbs Up</p>
                        <p className="text-sm text-blue-600">
                          Navigate to Contact
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">👎</span>
                      <div>
                        <p className="font-medium text-blue-900">Thumbs Down</p>
                        <p className="text-sm text-blue-600">
                          -
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">✊</span>
                      <div>
                        <p className="font-medium text-blue-900">Closed_Fist</p>
                        <p className="text-sm text-blue-600">
                          -
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">🤟</span>
                      <div>
                        <p className="font-medium text-blue-900">ILoveYou</p>
                        <p className="text-sm text-blue-600">
                          -
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

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

export default DemoView;

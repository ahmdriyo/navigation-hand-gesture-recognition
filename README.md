# Navigation Hand Gesture Recognition

Sebuah aplikasi web modern yang menggunakan Next.js 14 dan Tailwind CSS untuk mendemonstrasikan sistem navigasi berbasis gesture tangan menggunakan teknologi MediaPipe.

## 🚀 Fitur Utama

- **Navbar Modern & Responsif**: Navbar dengan efek blur dan animasi smooth
- **Dokumentasi Lengkap**: Halaman dokumentasi yang menjelaskan teknologi dan cara kerja sistem
- **TypeScript**: Fully typed tanpa penggunaan `any`
- **Responsive Design**: Mendukung semua ukuran layar
- **Hand Gesture Navigation**: Konsep navigasi menggunakan gerakan tangan (dalam pengembangan)

## 📁 Struktur Proyek

```
navigation-hand-gesture-recognition/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx          # Komponen navbar modern
│   │   └── types.ts            # Type definitions
│   ├── documentation/
│   │   └── page.tsx            # Halaman dokumentasi
│   ├── demo/
│   │   └── page.tsx            # Halaman demo (placeholder)
│   ├── contact/
│   │   └── page.tsx            # Halaman kontak (placeholder)
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Halaman utama
│   └── globals.css             # Global styles
├── public/                     # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🛠️ Teknologi yang Digunakan

- **Next.js 14** (App Router)
- **TypeScript** (Strict mode, no any types)
- **Tailwind CSS** (Styling dan animasi)
- **Lucide React** (Icons untuk navbar)
- **MediaPipe** (Planned untuk gesture recognition)

## 📚 Halaman yang Tersedia

### 1. Home (`/`)
- Hero section dengan pengenalan aplikasi
- Demo sections untuk menunjukkan scroll effect navbar
- Modern gradient design

### 2. Documentation (`/documentation`)
- Penjelasan lengkap tentang Hand Gesture Navigation
- Informasi teknis MediaPipe dan cara kerja sistem
- Contoh gesture dan workflow yang didukung
- Link ke dokumentasi resmi MediaPipe

### 3. Demo (`/demo`)
- Placeholder untuk live demo (dalam pengembangan)

### 4. Contact (`/contact`)
- Informasi kontak dan placeholder untuk form

## 🎨 Komponen Navbar

Navbar yang telah dibuat memiliki fitur:

- **Sticky positioning** dengan efek blur saat scroll
- **Responsive design** dengan hamburger menu untuk mobile
- **Smooth animations** menggunakan Tailwind CSS
- **TypeScript typed** tanpa penggunaan `any`
- **Customizable props** untuk logo, menu items, dan CTA button

### Props Navbar:
```typescript
interface NavbarProps {
  logo?: string;           // Text logo
  navItems?: NavItem[];    // Array menu items
  ctaText?: string;        // CTA button text
  ctaHref?: string;        // CTA button link
  className?: string;      // Additional CSS classes
}
```

## 🚀 Cara Menjalankan

1. Install dependencies:
```bash
npm install
```

2. Jalankan development server:
```bash
npm run dev
```

3. Buka browser dan akses: `http://localhost:3000`

## 📖 Dokumentasi MediaPipe

Untuk informasi lengkap tentang teknologi MediaPipe yang digunakan, kunjungi:
- [MediaPipe HandLandmarker Documentation](https://developers.google.com/mediapipe/solutions/vision/hand_landmarker)
- [MediaPipe Official Website](https://mediapipe.dev/)

## 🔮 Roadmap

- [ ] Implementasi MediaPipe HandLandmarker
- [ ] Live camera feed dan gesture detection
- [ ] Real-time navigation menggunakan gesture
- [ ] Training custom gesture models
- [ ] Performance optimization
- [ ] Mobile app version

## 📄 License

MIT License - silakan gunakan untuk pembelajaran dan pengembangan.

---

Dibuat dengan ❤️ menggunakan Next.js 14 dan Tailwind CSS

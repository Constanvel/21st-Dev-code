# 21st-Dev-code

Tempat latihan integrasi komponen dari [21st.dev](https://21st.dev) — tiap komponen dipasang ke project React beneran, bukan cuma copy-paste ke sandbox.

## Stack

React 19 · TypeScript · Vite · Tailwind CSS v4 · shadcn/ui

## Menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:5173

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Dev server + hot reload |
| `npm run build` | Build production ke `dist/` |
| `npm run preview` | Cek hasil build secara lokal |
| `npm run lint` | Jalankan linter |

## Komponen

Navbar di atas halaman dipakai untuk berpindah antar komponen.

### Carousel Stacked — `src/components/ui/carousel-07.tsx`
Carousel kartu bertumpuk yang digeser (drag). Kartu ikut berputar, miring, dan mengecil sesuai jaraknya dari tengah. Punya tiga tingkat sensitivitas drag: mobile, tablet, desktop.
Dependensi: `motion`, `class-variance-authority` (lewat `Badge`).

### Vintage Keyboard — `src/components/ui/vintage-keyboard.tsx`
Keyboard mekanik bergaya retro. Bisa diklik atau ditekan lewat keyboard fisik, lengkap dengan suara *thock* via Web Audio API. Tekstur kayu dan noise keycap dibuat dari SVG `feTurbulence`, jadi tidak ada satu pun file gambar.
Dependensi: tidak ada — React murni.

## Struktur

```
src/
├── App.tsx                    # navbar pemilih komponen
├── index.css                  # Tailwind + token shadcn
├── lib/utils.ts               # helper cn()
└── components/ui/             # semua komponen masuk sini
    ├── badge.tsx
    ├── carousel-07.tsx
    └── vintage-keyboard.tsx
```

Alias `@/` menunjuk ke `src/`, diatur di `vite.config.ts` dan `tsconfig.json`.

## Menambah komponen baru

1. Simpan file komponen di `src/components/ui/`
2. Install dependensi yang dibutuhkan
3. Daftarkan di array `PROJECTS` dalam `src/App.tsx`

Untuk komponen shadcn resmi, pakai CLI-nya:

```bash
npx shadcn@latest add <nama-komponen>
```

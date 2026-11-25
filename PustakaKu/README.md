# PustakaKu

PustakaKu adalah aplikasi web sederhana untuk mencatat dan melihat koleksi buku perpustakaan SMA. Aplikasi dibuat dengan Next.js App Router, TypeScript, Tailwind CSS, Prisma, dan SQLite lokal.

## Fitur

- Halaman beranda yang menjelaskan aplikasi.
- Daftar buku dengan pencarian berdasarkan judul atau penulis.
- Halaman detail buku, termasuk informasi stok tersedia dan total stok.
- Form untuk menambahkan buku dengan validasi di server.
- Indikator stok habis pada daftar buku.

## Teknologi

- Next.js 16 dan React 19
- TypeScript
- Tailwind CSS 4
- Prisma ORM 6
- SQLite

## Persyaratan

- Node.js 24.x (disarankan; seed menggunakan dukungan TypeScript bawaan Node.js)
- npm

## Instalasi dan konfigurasi

Jalankan perintah dari folder proyek `PustakaKu`:

```bash
npm install
```

Buat file `.env` di folder proyek, sejajar dengan `package.json`, lalu isi:

```env
DATABASE_URL="file:./dev.db"
```

URL tersebut digunakan oleh Prisma untuk membuat database SQLite lokal di `prisma/dev.db`. File `.env` dan database lokal sudah dikecualikan dari Git.

## Migrasi dan data awal

Terapkan migrasi yang tersedia untuk membuat tabel:

```bash
npx prisma migrate dev
```

Generate Prisma Client, lalu isi database dengan tiga contoh buku:

```bash
npx prisma generate
npx prisma db seed
```

**Perhatian:** perintah seed menjalankan `deleteMany()` pada tabel `Buku` sebelum memasukkan data contoh. Menjalankannya kembali akan menghapus semua buku yang tersimpan lalu menggantinya dengan data awal.

## Menjalankan aplikasi

Jalankan server pengembangan:

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

Untuk menjalankan versi produksi secara lokal:

```bash
npm run build
npm start
```

## Halaman aplikasi

| URL | Keterangan |
| --- | --- |
| `/` | Beranda PustakaKu |
| `/buku` | Daftar buku dan pencarian |
| `/buku?cari=kata` | Daftar buku yang cocok dengan kata pencarian |
| `/buku/[id]` | Detail buku berdasarkan ID |
| `/buku/baru` | Form tambah buku |

## Perintah pemeriksaan

```bash
npm run lint
npx tsc --noEmit
```

## Struktur utama

```text
app/                  Halaman App Router dan Server Action
components/           Navbar, daftar buku, dan form
lib/prisma.ts         Singleton Prisma Client
prisma/schema.prisma  Skema database
prisma/seed.ts        Data awal buku
prisma/migrations/    Riwayat migrasi database
prisma.config.ts      Konfigurasi Prisma dan perintah seed
```

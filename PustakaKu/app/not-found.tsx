import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-5 py-20 text-center sm:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-800">
        404 · Halaman tidak ditemukan
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
        Halaman yang kamu cari tidak tersedia.
      </h1>
      <p className="mt-5 max-w-xl leading-7 text-stone-600">
        Alamat mungkin sudah berubah atau tidak pernah ada. Kamu bisa kembali ke
        beranda atau menjelajahi koleksi buku.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-full border border-stone-300 bg-white px-6 py-3 font-semibold text-stone-700 transition hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
        >
          Ke beranda
        </Link>
        <Link
          href="/buku"
          className="rounded-full bg-emerald-800 px-6 py-3 font-semibold text-white transition hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
        >
          Jelajahi buku
        </Link>
      </div>
    </main>
  );
}

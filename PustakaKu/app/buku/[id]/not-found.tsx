import Link from "next/link";

export default function BukuNotFound() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-5 py-20 text-center sm:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-800">
        Buku tidak ditemukan
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
        Sepertinya buku ini tidak ada di katalog.
      </h1>
      <p className="mt-5 max-w-xl leading-7 text-stone-600">
        ID yang diminta tidak cocok dengan buku yang tersimpan. Kembali ke
        koleksi untuk memilih buku lain.
      </p>
      <Link
        href="/buku"
        className="mt-8 rounded-full bg-emerald-800 px-6 py-3 font-semibold text-white transition hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
      >
        Kembali ke koleksi
      </Link>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import DaftarBuku from "@/components/DaftarBuku";

export const metadata: Metadata = {
  title: "Koleksi Buku",
  description: "Cari dan jelajahi koleksi buku perpustakaan sekolah.",
};

type BukuSearchParams = {
  cari?: string | string[];
  [key: string]: string | string[] | undefined;
};

type HasilBukuProps = {
  searchParams: Promise<BukuSearchParams>;
};

async function HasilBuku({ searchParams }: HasilBukuProps) {
  const params = await searchParams;
  const cari = typeof params.cari === "string" ? params.cari.trim() : "";

  return (
    <>
      <form
        action="/buku"
        method="get"
        role="search"
        className="mb-6 flex flex-col gap-3 sm:flex-row"
      >
        <label htmlFor="cari-buku" className="sr-only">
          Cari berdasarkan judul, penulis, atau kategori
        </label>
        <input
          id="cari-buku"
          type="search"
          name="cari"
          defaultValue={cari}
          placeholder="Cari judul, penulis, atau kategori..."
          className="min-h-12 flex-1 rounded-xl border border-stone-300 bg-white px-4 text-stone-900 outline-none placeholder:text-stone-400 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/15"
        />
        <button
          type="submit"
          className="min-h-12 rounded-xl bg-emerald-800 px-6 font-semibold text-white transition hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
        >
          Cari buku
        </button>
        {cari && (
          <Link
            href="/buku"
            className="inline-flex min-h-12 items-center justify-center rounded-xl px-4 font-medium text-stone-600 transition hover:bg-stone-100 hover:text-stone-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
          >
            Hapus pencarian
          </Link>
        )}
      </form>
      <DaftarBuku cari={cari} />
    </>
  );
}

function HasilBukuLoading() {
  return (
    <div aria-label="Memuat koleksi buku" className="space-y-4">
      <div className="h-12 animate-pulse rounded-xl bg-stone-200" />
      <div className="h-72 animate-pulse rounded-2xl bg-stone-200" />
    </div>
  );
}

export default function BukuPage({
  searchParams,
}: {
  searchParams: Promise<BukuSearchParams>;
}) {
  return (
    <main className="mx-auto w-full max-w-7xl flex-1 px-5 py-12 sm:px-8 sm:py-16">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-800">
            Perpustakaan PustakaKu
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            Koleksi Buku
          </h1>
          <p className="mt-3 max-w-xl leading-7 text-stone-600">
            Jelajahi koleksi bacaan sekolah dan periksa ketersediaan stoknya.
          </p>
        </div>
        <Link
          href="/buku/baru"
          className="inline-flex items-center gap-2 rounded-full bg-emerald-800 px-5 py-3 font-semibold text-white transition hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
        >
          <span aria-hidden="true" className="text-lg leading-none">
            +
          </span>
          Tambah buku
        </Link>
      </div>

      <Suspense fallback={<HasilBukuLoading />}>
        <HasilBuku searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
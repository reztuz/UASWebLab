import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import DaftarBuku from "@/components/DaftarBuku";

export const metadata: Metadata = {
  title: "Daftar Buku",
  description: "Cari dan jelajahi buku-buku di perpustakaan PustakaKu.",
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
        className="mb-2 mt-3 flex items-center justify-between gap-3"
      >
        <label htmlFor="cari-buku" className="sr-only">
          Cari judul atau penulis
        </label>
        <input
          id="cari-buku"
          type="search"
          name="cari"
          defaultValue={cari}
          placeholder="Cari judul atau penulis"
          className="h-8 w-full max-w-[300px] rounded-md border border-neutral-300 bg-white px-2.5 text-[11px] text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-neutral-500"
        />
        <button
          type="submit"
          className="h-8 rounded-md bg-neutral-900 px-3 text-[11px] font-semibold text-white hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-700"
        >
          Cari
        </button>
      </form>
      {cari && (
        <p className="mb-2 text-[10px] text-neutral-500">
          Hasil pencarian untuk “{cari}”
        </p>
      )}
      <DaftarBuku cari={cari} />
    </>
  );
}

function HasilBukuLoading() {
  return (
    <div aria-label="Memuat daftar buku" className="mt-4 animate-pulse">
      <div className="mb-2 h-8 rounded bg-neutral-100" />
      <div className="h-28 rounded bg-neutral-100" />
    </div>
  );
}

export default function BukuPage({
  searchParams,
}: {
  searchParams: Promise<BukuSearchParams>;
}) {
  return (
    <main className="mx-auto w-full max-w-xl flex-1 px-4 py-8 sm:px-6">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-sm font-semibold text-neutral-900">Daftar buku</h1>
        <Link
          href="/buku/baru"
          className="inline-flex h-8 items-center rounded-md bg-neutral-900 px-3 text-[11px] font-semibold text-white hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-700"
        >
          + Tambah buku
        </Link>
      </div>

      <Suspense fallback={<HasilBukuLoading />}>
        <HasilBuku searchParams={searchParams} />
      </Suspense>
    </main>
  );
}

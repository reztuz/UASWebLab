import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
  title: "Detail Buku",
};

export default async function DetailBukuPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: idParam } = await params;

  if (!/^[1-9]\d*$/.test(idParam)) {
    notFound();
  }

  const id = Number(idParam);

  if (!Number.isSafeInteger(id)) {
    notFound();
  }

  const buku = await prisma.buku.findUnique({
    where: { id },
  });

  if (!buku) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-5 py-12 sm:px-8 sm:py-16">
      <Link
        href="/buku"
        className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 transition hover:text-emerald-950 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
      >
        <span aria-hidden="true">←</span>
        Kembali ke koleksi
      </Link>

      <article className="mt-8 overflow-hidden rounded-3xl border border-stone-200 bg-white">
        <div className="border-b border-stone-200 bg-[#f4f3ed] px-6 py-8 sm:px-10 sm:py-12">
          <p className="inline-flex rounded-full border border-emerald-900/15 bg-white/70 px-3 py-1 text-sm font-medium text-emerald-900">
            {buku.kategori}
          </p>
          <h1 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
            {buku.judul}
          </h1>
          <p className="mt-3 text-lg text-stone-600">oleh {buku.penulis}</p>
        </div>

        <div className="grid gap-8 px-6 py-8 sm:grid-cols-[1fr_260px] sm:px-10 sm:py-10">
          <section aria-labelledby="deskripsi-buku">
            <h2
              id="deskripsi-buku"
              className="text-sm font-semibold uppercase tracking-[0.14em] text-stone-500"
            >
              Tentang buku
            </h2>
            <p className="mt-4 whitespace-pre-line leading-8 text-stone-700">
              {buku.deskripsi}
            </p>
          </section>

          <aside className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
            <h2 className="font-semibold text-stone-900">Informasi buku</h2>
            <dl className="mt-4 divide-y divide-stone-200">
              <div className="flex items-center justify-between gap-4 py-3">
                <dt className="text-sm text-stone-500">Tahun terbit</dt>
                <dd className="text-sm font-medium text-stone-800">
                  {buku.tahunTerbit}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-3">
                <dt className="text-sm text-stone-500">Stok total</dt>
                <dd className="text-sm font-medium text-stone-800">
                  {buku.stokTotal} buku
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-3">
                <dt className="text-sm text-stone-500">Tersedia</dt>
                <dd
                  className={
                    buku.stokTersedia === 0
                      ? "text-sm font-semibold text-red-700"
                      : "text-sm font-semibold text-emerald-800"
                  }
                >
                  {buku.stokTersedia === 0
                    ? "Stok habis"
                    : `${buku.stokTersedia} buku`}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </article>
    </main>
  );
}

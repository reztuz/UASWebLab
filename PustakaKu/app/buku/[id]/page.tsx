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
    <main className="mx-auto w-full max-w-xl flex-1 px-4 py-8 sm:px-6">
      <Link
        href="/buku"
        className="inline-flex items-center gap-1 text-[11px] text-neutral-600 hover:text-neutral-950 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-700"
      >
        <span aria-hidden="true">‹</span>
        Kembali ke daftar
      </Link>

      <article className="mt-2 flex max-w-xl items-start gap-3 border border-neutral-200 px-3 py-3">
        <div
          aria-label="Sampul buku tidak tersedia"
          className="flex h-[92px] w-[84px] shrink-0 items-center justify-center bg-neutral-100 text-[10px] text-neutral-400"
        >
          Sampul
        </div>
        <div className="min-w-0 pt-1 text-[11px] leading-5 text-neutral-700">
          <h1 className="text-[13px] font-semibold leading-5 text-neutral-900">
            {buku.judul}
          </h1>
          <p>Penulis: {buku.penulis}</p>
          <p>
            Kategori: {buku.kategori} · Tahun: {buku.tahunTerbit}
          </p>
          <p>
            Stok:{" "}
            <span
              className={
                buku.stokTersedia === 0
                  ? "font-semibold text-red-700"
                  : "font-semibold text-emerald-700"
              }
            >
              {buku.stokTersedia} dari {buku.stokTotal} tersedia
            </span>
          </p>
          <p className="mt-1 text-neutral-500">
            {buku.deskripsi || "Deskripsi singkat buku tampil di sini."}
          </p>
        </div>
      </article>
    </main>
  );
}

import Link from "next/link";
import { prisma } from "@/lib/prisma";

type DaftarBukuProps = {
  cari: string;
};

export default async function DaftarBuku({ cari }: DaftarBukuProps) {
  const where = cari
    ? {
        OR: [
          { judul: { contains: cari } },
          { penulis: { contains: cari } },
          { kategori: { contains: cari } },
        ],
      }
    : undefined;

  const buku = await prisma.buku.findMany({
    where,
    orderBy: { judul: "asc" },
  });

  if (buku.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-stone-300 bg-white px-6 py-14 text-center">
        <h2 className="text-lg font-semibold text-stone-900">
          {cari ? "Buku tidak ditemukan" : "Koleksi masih kosong"}
        </h2>
        <p className="mx-auto mt-2 max-w-md leading-7 text-stone-600">
          {cari
            ? `Tidak ada buku yang cocok dengan pencarian "${cari}". Coba kata kunci lain.`
            : "Tambahkan buku pertama untuk mulai membangun katalog perpustakaan."}
        </p>
        {!cari && (
          <Link
            href="/buku/baru"
            className="mt-5 inline-flex rounded-full bg-emerald-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
          >
            Tambah buku
          </Link>
        )}
      </div>
    );
  }

  return (
    <section
      aria-labelledby="hasil-koleksi"
      className="overflow-hidden rounded-2xl border border-stone-200 bg-white"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 px-5 py-4 sm:px-6">
        <div>
          <h2 id="hasil-koleksi" className="font-semibold text-stone-900">
            Koleksi buku
          </h2>
          <p className="mt-1 text-sm text-stone-500">
            {buku.length} buku ditemukan
          </p>
        </div>
        <span className="rounded-full bg-stone-100 px-3 py-1 text-sm font-medium text-stone-600">
          Stok tersedia
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <caption className="sr-only">
            Daftar koleksi buku beserta penulis, kategori, tahun terbit, dan
            ketersediaan stok
          </caption>
          <thead className="bg-stone-50 text-xs font-semibold uppercase tracking-wide text-stone-500">
            <tr>
              <th scope="col" className="px-5 py-3.5 sm:px-6">
                Buku
              </th>
              <th scope="col" className="px-5 py-3.5">
                Kategori
              </th>
              <th scope="col" className="px-5 py-3.5">
                Tahun
              </th>
              <th scope="col" className="px-5 py-3.5">
                Ketersediaan
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-100">
            {buku.map((item) => (
              <tr key={item.id} className="transition hover:bg-stone-50/70">
                <td className="px-5 py-4 sm:px-6">
                  <Link
                    href={`/buku/${item.id}`}
                    className="font-semibold text-stone-900 hover:text-emerald-800 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
                  >
                    {item.judul}
                  </Link>
                  <p className="mt-1 text-sm text-stone-500">{item.penulis}</p>
                </td>
                <td className="px-5 py-4 text-sm text-stone-600">
                  {item.kategori}
                </td>
                <td className="px-5 py-4 text-sm text-stone-600">
                  {item.tahunTerbit}
                </td>
                <td className="px-5 py-4">
                  {item.stokTersedia === 0 ? (
                    <span className="inline-flex rounded-full bg-red-50 px-3 py-1 text-sm font-semibold text-red-700">
                      Habis · {item.stokTersedia}/{item.stokTotal}
                    </span>
                  ) : (
                    <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-800">
                      {item.stokTersedia}/{item.stokTotal} tersedia
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

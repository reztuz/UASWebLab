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
        ],
      }
    : undefined;

  const buku = await prisma.buku.findMany({
    where,
    orderBy: { id: "asc" },
  });

  if (buku.length === 0) {
    return (
      <p className="border-y border-neutral-200 py-5 text-xs text-neutral-500">
        {cari ? "Buku tidak ditemukan." : "Belum ada buku di dalam daftar."}
      </p>
    );
  }

  return (
    <div className="overflow-x-auto border-y border-neutral-200">
      <table className="w-full min-w-[520px] border-collapse text-left text-[11px]">
        <caption className="sr-only">
          Daftar buku, penulis, kategori, stok, dan tautan ke detail buku
        </caption>
        <thead className="bg-neutral-100 text-[10px] font-semibold text-neutral-700">
          <tr>
            <th scope="col" className="w-9 px-2 py-1.5">
              No
            </th>
            <th scope="col" className="px-2 py-1.5">
              Judul
            </th>
            <th scope="col" className="px-2 py-1.5">
              Penulis
            </th>
            <th scope="col" className="px-2 py-1.5">
              Kategori
            </th>
            <th scope="col" className="w-14 px-2 py-1.5 text-center">
              Stok
            </th>
            <th scope="col" className="w-16 px-2 py-1.5 text-center">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {buku.map((item, index) => (
            <tr
              key={item.id}
              className="border-t border-neutral-200 text-neutral-800"
            >
              <td className="px-2 py-1.5">{index + 1}</td>
              <td className="max-w-40 truncate px-2 py-1.5 font-medium">
                {item.judul}
              </td>
              <td className="max-w-36 truncate px-2 py-1.5">{item.penulis}</td>
              <td className="px-2 py-1.5">{item.kategori}</td>
              <td className="px-2 py-1.5 text-center">
                <span
                  className={
                    item.stokTersedia === 0
                      ? "rounded bg-red-100 px-1.5 py-0.5 text-red-800"
                      : ""
                  }
                >
                  {item.stokTersedia}/{item.stokTotal}
                </span>
              </td>
              <td className="px-2 py-1.5 text-center">
                <Link
                  href={`/buku/${item.id}`}
                  className="inline-flex min-w-10 justify-center rounded border border-neutral-300 bg-white px-2 py-1 text-[10px] leading-4 text-neutral-800 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-700"
                >
                  Detail
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

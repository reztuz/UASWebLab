import type { Metadata } from "next";
import FormTambahBuku from "@/components/FormTambahBuku";

export const metadata: Metadata = {
  title: "Tambah Buku",
  description: "Tambahkan buku baru ke koleksi perpustakaan sekolah.",
};

export default function BukuBaruPage() {
  return (
    <main className="mx-auto w-full max-w-xl flex-1 px-4 py-8 sm:px-6">
      <FormTambahBuku />
    </main>
  );
}

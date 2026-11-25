"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export type TambahBukuState = {
  fieldErrors: Partial<
    Record<
      "judul" | "penulis" | "kategori" | "tahunTerbit" | "jumlahStok" | "deskripsi",
      string
    >
  >;
};

const kategoriBuku = new Set([
  "Novel",
  "Sastra",
  "Sains",
  "Sejarah",
  "Pelajaran",
  "Lainnya",
]);

function getStringField(formData: FormData, name: string) {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function getIntegerField(formData: FormData, name: string) {
  const value = formData.get(name);

  if (typeof value !== "string" || !/^\d+$/.test(value.trim())) {
    return null;
  }

  const number = Number(value);
  return Number.isSafeInteger(number) ? number : null;
}

export async function tambahBuku(
  _previousState: TambahBukuState,
  formData: FormData,
): Promise<TambahBukuState> {
  const judul = getStringField(formData, "judul");
  const penulis = getStringField(formData, "penulis");
  const kategori = getStringField(formData, "kategori");
  const deskripsi = getStringField(formData, "deskripsi");
  const tahunTerbit = getIntegerField(formData, "tahunTerbit");
  const jumlahStok = getIntegerField(formData, "jumlahStok");

  if (!judul) {
    return { fieldErrors: { judul: "Judul wajib diisi" } };
  }

  if (judul.length > 200) {
    return { fieldErrors: { judul: "Judul maksimal 200 karakter" } };
  }

  if (!penulis) {
    return { fieldErrors: { penulis: "Penulis wajib diisi" } };
  }

  if (penulis.length > 160) {
    return { fieldErrors: { penulis: "Penulis maksimal 160 karakter" } };
  }

  if (!kategori || !kategoriBuku.has(kategori)) {
    return { fieldErrors: { kategori: "Pilih kategori buku" } };
  }

  if (kategori.length > 80) {
    return { fieldErrors: { kategori: "Kategori maksimal 80 karakter" } };
  }

  if (tahunTerbit === null || tahunTerbit < 1 || tahunTerbit > 9999) {
    return {
      fieldErrors: {
        tahunTerbit: "Tahun terbit harus berupa bilangan bulat 1–9999",
      },
    };
  }

  if (jumlahStok === null || jumlahStok < 1) {
    return {
      fieldErrors: { jumlahStok: "Jumlah stok harus berupa bilangan bulat" },
    };
  }

  if (deskripsi.length > 2000) {
    return {
      fieldErrors: { deskripsi: "Deskripsi maksimal 2000 karakter" },
    };
  }

  await prisma.buku.create({
    data: {
      judul,
      penulis,
      kategori,
      tahunTerbit,
      stokTersedia: jumlahStok,
      stokTotal: jumlahStok,
      deskripsi,
    },
  });

  revalidatePath("/buku");
  redirect("/buku");
}

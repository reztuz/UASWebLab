import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.buku.deleteMany();
  await prisma.buku.createMany({
    data: [
      {
        judul: "Laskar Pelangi",
        penulis: "Andrea Hirata",
        kategori: "Novel",
        tahunTerbit: 2005,
        stokTersedia: 3,
        stokTotal: 5,
        deskripsi:
          "Kisah perjuangan sepuluh anak di Belitung untuk memperoleh pendidikan.",
      },
      {
        judul: "Bumi Manusia",
        penulis: "Pramoedya Ananta Toer",
        kategori: "Sastra",
        tahunTerbit: 1980,
        stokTersedia: 0,
        stokTotal: 2,
        deskripsi:
          "Kisah Minke dalam menghadapi kehidupan dan ketidakadilan pada masa kolonial.",
      },
      {
        judul: "Fisika Dasar",
        penulis: "Halliday, Resnick, dan Walker",
        kategori: "Pelajaran",
        tahunTerbit: 2014,
        stokTersedia: 2,
        stokTotal: 2,
        deskripsi:
          "Buku pengantar konsep-konsep dasar fisika untuk pelajar dan mahasiswa.",
      },
    ],
  });
}

main()
  .catch((error: unknown) => {
    console.error("Gagal mengisi data awal buku:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

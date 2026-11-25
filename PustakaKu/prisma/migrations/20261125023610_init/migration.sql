-- CreateTable
CREATE TABLE "Buku" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "judul" TEXT NOT NULL,
    "penulis" TEXT NOT NULL,
    "kategori" TEXT NOT NULL,
    "tahunTerbit" INTEGER NOT NULL,
    "stokTersedia" INTEGER NOT NULL DEFAULT 0,
    "stokTotal" INTEGER NOT NULL,
    "deskripsi" TEXT NOT NULL
);

import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Koleksi terorganisir",
    description:
      "Simpan informasi penting setiap buku dalam satu katalog yang mudah ditelusuri.",
  },
  {
    number: "02",
    title: "Stok lebih terpantau",
    description:
      "Lihat jumlah buku yang tersedia agar siswa tahu bacaan mana yang bisa dipinjam.",
  },
  {
    number: "03",
    title: "Peminjaman lebih praktis",
    description:
      "Dukung pencatatan aktivitas perpustakaan dengan data koleksi yang selalu jelas.",
  },
];

export default function Home() {
  return (
    <main className="flex-1">
      <section className="overflow-hidden border-b border-stone-200 bg-[#f4f3ed]">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <div className="relative z-10">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-900/15 bg-white/70 px-4 py-2 text-sm font-medium text-emerald-900">
              <span className="size-2 rounded-full bg-emerald-700" />
              Ruang baca, tertata lebih baik
            </p>
            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.08] tracking-tight text-stone-900 sm:text-6xl lg:text-7xl">
              Semua cerita,
              <br />
              <span className="font-serif font-normal italic text-emerald-800">
                satu perpustakaan.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-stone-600">
              PustakaKu membantu perpustakaan SMA mengelola koleksi buku,
              memantau ketersediaan, dan membuat pencatatan peminjaman terasa
              lebih mudah.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/buku"
                className="inline-flex items-center gap-3 rounded-full bg-emerald-800 px-6 py-3.5 font-semibold text-white shadow-sm transition hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
              >
                Lihat koleksi buku
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/buku/baru"
                className="rounded-full px-5 py-3.5 font-semibold text-stone-700 transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
              >
                Tambahkan buku
              </Link>
            </div>
            <p className="mt-8 text-sm text-stone-500">
              Dirancang untuk membantu pustakawan dan warga sekolah.
            </p>
          </div>

          <div
            aria-hidden="true"
            className="relative mx-auto flex h-[330px] w-full max-w-[470px] items-center justify-center sm:h-[390px]"
          >
            <div className="absolute size-[290px] rounded-full border border-emerald-900/10 sm:size-[350px]" />
            <div className="absolute size-[230px] rounded-full border border-emerald-900/10 sm:size-[280px]" />
            <div className="absolute bottom-8 h-5 w-[82%] rounded-[50%] bg-emerald-950/10 blur-md" />
            <div className="relative flex h-56 items-end gap-2 sm:h-64">
              <div className="h-40 w-14 rounded-t-md border border-white/30 bg-[#c8734e] shadow-xl sm:h-48 sm:w-16" />
              <div className="h-48 w-16 rounded-t-md border border-white/30 bg-[#e6bd77] shadow-xl sm:h-56 sm:w-[4.5rem]" />
              <div className="h-44 w-[4.5rem] rounded-t-md border border-white/30 bg-emerald-800 shadow-xl sm:h-52 sm:w-20" />
              <div className="h-52 w-16 rounded-t-md border border-white/30 bg-[#637b69] shadow-xl sm:h-60 sm:w-[4.5rem]" />
              <div className="h-36 w-14 rounded-t-md border border-white/30 bg-[#b86352] shadow-xl sm:h-44 sm:w-16" />
            </div>
            <div className="absolute right-2 top-8 rounded-2xl border border-stone-200 bg-white p-4 shadow-lg sm:right-0 sm:top-10">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-800">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="size-5"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 5.75A2.75 2.75 0 0 1 7.75 3H19v15H7.75A2.75 2.75 0 0 0 5 20.75V5.75Z"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.7"
                    />
                    <path
                      d="M5 18a2.75 2.75 0 0 1 2.75-2.75H19"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.7"
                    />
                  </svg>
                </span>
                <span>
                  <span className="block text-sm font-semibold text-stone-900">
                    Koleksi sekolah
                  </span>
                  <span className="mt-0.5 block text-xs text-stone-500">
                    Tersusun dan mudah dicari
                  </span>
                </span>
              </div>
            </div>
            <div className="absolute bottom-5 left-0 rounded-2xl border border-stone-200 bg-white p-4 shadow-lg sm:bottom-8 sm:left-2">
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-stone-500">
                Temukan bacaan
              </p>
              <p className="mt-1 text-lg font-semibold text-emerald-900">
                untuk ide berikutnya
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-800">
            PustakaKu untuk sekolah
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            Pengelolaan buku yang lebih sederhana.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="rounded-2xl border border-stone-200 bg-white p-7"
            >
              <p className="text-sm font-semibold text-emerald-800">
                {feature.number}
              </p>
              <h3 className="mt-5 text-xl font-semibold text-stone-900">
                {feature.title}
              </h3>
              <p className="mt-3 leading-7 text-stone-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

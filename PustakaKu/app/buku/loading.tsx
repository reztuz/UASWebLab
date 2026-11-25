export default function LoadingBuku() {
  return (
    <main
      aria-label="Memuat halaman koleksi buku"
      className="mx-auto w-full max-w-7xl flex-1 px-5 py-12 sm:px-8 sm:py-16"
    >
      <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
        <div className="space-y-3">
          <div className="h-4 w-44 animate-pulse rounded bg-stone-200" />
          <div className="h-10 w-64 animate-pulse rounded bg-stone-200" />
          <div className="h-5 w-80 max-w-full animate-pulse rounded bg-stone-200" />
        </div>
        <div className="h-12 w-36 animate-pulse rounded-full bg-stone-200" />
      </div>
      <div className="space-y-4">
        <div className="h-12 animate-pulse rounded-xl bg-stone-200" />
        <div className="h-72 animate-pulse rounded-2xl bg-stone-200" />
      </div>
    </main>
  );
}
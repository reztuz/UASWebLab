import Link from "next/link";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/buku", label: "Koleksi Buku" },
];

export default function Navbar() {
  return (
    <header className="border-b border-stone-200 bg-white">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8"
      >
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
          aria-label="Pustaku, beranda"
        >
          <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-800 text-white">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="size-6"
            >
              <path
                d="M4.75 5.75A2.75 2.75 0 0 1 7.5 3h12v15h-12a2.75 2.75 0 0 0-2.75 2.75V5.75Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.7"
              />
              <path
                d="M4.75 18A2.75 2.75 0 0 1 7.5 15.25h12M9 7h6M9 10h6"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.7"
              />
            </svg>
          </span>
          <span className="text-xl font-bold tracking-tight text-stone-900">
            Pustaku
          </span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-600 transition hover:text-emerald-800 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/buku/baru"
            className="rounded-full bg-emerald-800 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
          >
            <span className="sm:hidden">Tambah</span>
            <span className="hidden sm:inline">Tambah Buku</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
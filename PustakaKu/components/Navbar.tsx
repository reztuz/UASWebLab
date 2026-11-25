import Link from "next/link";

const links = [
  { href: "/", label: "Beranda" },
  { href: "/buku", label: "Daftar Buku" },
];

export default function Navbar() {
  return (
    <header className="border-b border-neutral-200 bg-white">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex w-full max-w-6xl items-center justify-between gap-2 px-3 py-2 sm:gap-4 sm:px-6"
      >
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-700"
          aria-label="PustakaKu, beranda"
        >
          <span className="flex size-7 items-center justify-center rounded bg-neutral-900 text-white">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              className="size-4"
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
          <span className="text-sm font-bold tracking-tight text-neutral-900">
            PustakaKu
          </span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-5">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-[11px] text-neutral-700 transition hover:text-neutral-950 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-700"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/buku/baru"
            className="inline-flex h-7 shrink-0 items-center whitespace-nowrap rounded-md bg-neutral-900 px-2 text-[10px] font-semibold text-white transition hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-700 sm:px-3 sm:text-[11px]"
          >
            + Tambah buku
          </Link>
        </div>
      </nav>
    </header>
  );
}
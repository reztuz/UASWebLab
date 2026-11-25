import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "PustakaKu | Perpustakaan Sekolah",
    template: "%s | PustakaKu",
  },
  description:
    "PustakaKu membantu perpustakaan SMA mengelola koleksi buku dan memantau ketersediaan stok.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-stone-50 font-sans text-stone-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

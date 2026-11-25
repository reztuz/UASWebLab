"use client";

import Link from "next/link";
import { useActionState, useState, type ChangeEvent } from "react";
import { tambahBuku, type TambahBukuState } from "@/app/actions";

const initialState: TambahBukuState = {
  fieldErrors: {},
};

type FormValues = {
  judul: string;
  penulis: string;
  kategori: string;
  tahunTerbit: string;
  jumlahStok: string;
  deskripsi: string;
};

const initialFormValues: FormValues = {
  judul: "",
  penulis: "",
  kategori: "",
  tahunTerbit: "",
  jumlahStok: "",
  deskripsi: "",
};

const inputClassName =
  "mt-1 w-full rounded-md border border-neutral-300 bg-white px-2 text-[11px] text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-neutral-500";

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return (
    <p role="alert" className="mt-0.5 text-[10px] leading-4 text-red-600">
      {message}
    </p>
  );
}

export default function FormTambahBuku() {
  const [state, formAction, pending] = useActionState(
    tambahBuku,
    initialState,
  );
  const [values, setValues] = useState(initialFormValues);

  function handleChange(field: keyof FormValues) {
    return (
      event: ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) => {
      const value = event.currentTarget.value;
      setValues((current) => ({ ...current, [field]: value }));
    };
  }

  return (
    <form
      action={formAction}
      noValidate
      className="max-w-sm border border-neutral-200 px-3 pb-3 pt-2"
    >
      <h1 className="mb-1.5 text-[12px] font-semibold text-neutral-900">
        Tambah buku baru
      </h1>

      <div className="space-y-1.5">
        <div>
          <label
            htmlFor="judul"
            className="block text-[10px] leading-4 text-neutral-700"
          >
            Judul <span className="text-red-600">*</span>
          </label>
          <input
            id="judul"
            name="judul"
            type="text"
            required
            maxLength={200}
            autoComplete="off"
            placeholder="Judul buku"
            value={values.judul}
            onChange={handleChange("judul")}
            aria-invalid={Boolean(state.fieldErrors.judul)}
            aria-describedby={
              state.fieldErrors.judul ? "judul-error" : undefined
            }
            className={`${inputClassName} h-6 ${
              state.fieldErrors.judul ? "border-red-500" : ""
            }`}
          />
          {state.fieldErrors.judul && (
            <p
              id="judul-error"
              role="alert"
              className="mt-0.5 text-[10px] leading-4 text-red-600"
            >
              {state.fieldErrors.judul}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="penulis"
            className="block text-[10px] leading-4 text-neutral-700"
          >
            Penulis <span className="text-red-600">*</span>
          </label>
          <input
            id="penulis"
            name="penulis"
            type="text"
            required
            maxLength={160}
            autoComplete="off"
            placeholder="Nama penulis"
            value={values.penulis}
            onChange={handleChange("penulis")}
            aria-invalid={Boolean(state.fieldErrors.penulis)}
            className={`${inputClassName} h-6 ${
              state.fieldErrors.penulis ? "border-red-500" : ""
            }`}
          />
          <FieldError message={state.fieldErrors.penulis} />
        </div>

        <div>
          <label
            htmlFor="kategori"
            className="block text-[10px] leading-4 text-neutral-700"
          >
            Kategori <span className="text-red-600">*</span>
          </label>
          <select
            id="kategori"
            name="kategori"
            required
            value={values.kategori}
            onChange={handleChange("kategori")}
            aria-invalid={Boolean(state.fieldErrors.kategori)}
            className={`${inputClassName} h-6 ${
              values.kategori ? "text-neutral-900" : "text-neutral-400"
            } ${state.fieldErrors.kategori ? "border-red-500" : ""}`}
          >
            <option value="">Pilih kategori</option>
            <option value="Novel">Novel</option>
            <option value="Sastra">Sastra</option>
            <option value="Sains">Sains</option>
            <option value="Sejarah">Sejarah</option>
            <option value="Pelajaran">Pelajaran</option>
            <option value="Lainnya">Lainnya</option>
          </select>
          <FieldError message={state.fieldErrors.kategori} />
        </div>

        <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 sm:gap-2">
          <div>
            <label
              htmlFor="tahunTerbit"
              className="block text-[10px] leading-4 text-neutral-700"
            >
              Tahun terbit
            </label>
            <input
              id="tahunTerbit"
              name="tahunTerbit"
              type="number"
              required
              min={1}
              max={9999}
              step={1}
              inputMode="numeric"
              placeholder="2005"
              value={values.tahunTerbit}
              onChange={handleChange("tahunTerbit")}
              aria-invalid={Boolean(state.fieldErrors.tahunTerbit)}
              className={`${inputClassName} h-6 ${
                state.fieldErrors.tahunTerbit ? "border-red-500" : ""
              }`}
            />
            <FieldError message={state.fieldErrors.tahunTerbit} />
          </div>

          <div>
            <label
              htmlFor="jumlahStok"
              className="block text-[10px] leading-4 text-neutral-700"
            >
              Jumlah stok <span className="text-red-600">*</span>
            </label>
            <input
              id="jumlahStok"
              name="jumlahStok"
              type="number"
              required
              min={1}
              step={1}
              inputMode="numeric"
              placeholder="5"
              value={values.jumlahStok}
              onChange={handleChange("jumlahStok")}
              aria-invalid={Boolean(state.fieldErrors.jumlahStok)}
              className={`${inputClassName} h-6 ${
                state.fieldErrors.jumlahStok ? "border-red-500" : ""
              }`}
            />
            <FieldError message={state.fieldErrors.jumlahStok} />
          </div>
        </div>

        <div>
          <label
            htmlFor="deskripsi"
            className="block text-[10px] leading-4 text-neutral-700"
          >
            Deskripsi
          </label>
          <textarea
            id="deskripsi"
            name="deskripsi"
            rows={2}
            maxLength={2000}
            placeholder="Deskripsi buku"
            value={values.deskripsi}
            onChange={handleChange("deskripsi")}
            aria-invalid={Boolean(state.fieldErrors.deskripsi)}
            className={`${inputClassName} h-10 min-h-10 resize-y py-1.5 ${
              state.fieldErrors.deskripsi ? "border-red-500" : ""
            }`}
          />
          <FieldError message={state.fieldErrors.deskripsi} />
        </div>
      </div>

      <div className="mt-1.5 flex items-center justify-between">
        <Link
          href="/buku"
          className="inline-flex h-6 items-center rounded-md border border-neutral-300 bg-white px-2 text-[10px] text-neutral-800 hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-700"
        >
          Batal
        </Link>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex h-6 items-center rounded-md bg-neutral-900 px-3 text-[10px] font-semibold text-white hover:bg-neutral-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "Menyimpan..." : "Simpan"}
        </button>
      </div>
    </form>
  );
}

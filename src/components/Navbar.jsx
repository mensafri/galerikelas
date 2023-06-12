import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className="sticky pt-5 pb-5 top-0 w-full z-10 bg-slate-500">
        <div className="flex flex-row justify-center gap-96">
          <h1 className="hover:bg-white">
            <Link to="/">Galeri Kelas</Link>
          </h1>
          <h1 className="hover:bg-white">
            <Link to="/inputPersons">Masukkan Mahasiswa</Link>
          </h1>
        </div>
      </header>
      <Outlet />
    </>
  );
}

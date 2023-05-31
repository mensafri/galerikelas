import React from "react";
import CardList from "../components/CardList";

export default function Home() {
  return (
    <div className="text-center bg-gradient-to-r from-indigo-500 min-h-screen">
      <h1 className="pt-16 pb-5">Galeri Kelas</h1>
      <CardList />
    </div>
  );
}

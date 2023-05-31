import React from "react";

export default function Card({ persons }) {
  return (
    <div className="flex flex-col mb-7 mt-0 bg-slate-600 border border-solid rounded-md p-6 cursor-pointer transition transform hover:-translate-y-1">
      <img src={persons.imgUrl} alt="foto profil" className="h-96 object-cover"/>
      <h2>{persons.nama}</h2>
      <p>@{persons.ig}</p>
    </div>
  );
}

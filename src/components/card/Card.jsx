import React from "react";

export default function Card({persons}) {
  return (
    <div className="flex flex-col bg-slate-600 border border-solid rounded-md p-6 cursor-pointer transition transform hover:-translate-y-1">
      <img
        src="../../FDfTj88UcAEK61p-transformed-removebg-preview.png"
        alt="foto profil"
      />
      <h2>{persons.name}</h2>
      <p>{persons.ig}</p>
    </div>
  );
}

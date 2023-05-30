import React from "react";

export default function SearchBox() {
  return (
    <div>
      <input
        type="search"
        placeholder="Cari Siapa?"
        onChange={() => {}}
        className="border-none outline-none p-2.5 w-40 leading-8 mb-8"
      />
    </div>
  );
}

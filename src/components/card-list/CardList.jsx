import React from "react";
import Card from "../card/Card";

export default function CardList() {
  const persons = [
    {
      id: 2,
      name: "Amin",
      ig: "@mamin",
      pap: "../../FDfTj88UcAEK61p-transformed-removebg-preview.png",
    },
  ];

  return (
    <div className="w-4/5 mx-0 my-auto grid grid-cols-4 gap-5">
      {persons.map((persons) => {
        return <Card persons={persons} />;
      })}
    </div>
  );
}

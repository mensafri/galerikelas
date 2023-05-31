import React, { useContext } from "react";
import Card from "../card/Card";
import { PersonContext } from "../../contexts/PersonContexts";

export default function CardList() {
  const { persons } = useContext(PersonContext);

  return (
    <div className="mx-7 my-auto grid grid-cols-4 gap-5">
      {persons.map((persons) => {
        return <Card persons={persons} key={persons.nama} />;
      })}
    </div>
  );
}

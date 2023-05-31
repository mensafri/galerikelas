import React, { useContext, useEffect, useState } from "react";
import Card from "../card/Card";
import { PersonContext } from "../../contexts/PersonContexts";
import { findPersons } from "../../firebase";

export default function CardList() {
  // const {persons} = useContext(PersonContext)
  // console.log(persons);

  // const persons = [
  //   {
  //     id: 2,
  //     name: "Amin",
  //     ig: "@mamin",
  //     pap: "../../assets/profil.png",
  //   },
  // ];
  const [persons, setPersons] = useState([])

  const getPersons = async () => {
    const response = await findPersons();
    setPersons(response);
  };

  useEffect(() => {
    getPersons();
  }, [])

  return (
    <div className="mx-7 my-auto grid grid-cols-4 gap-5">
      {persons.map((persons) => {
        return <Card persons={persons} key={persons.nama}/>;
      })}
    </div>
  );
}

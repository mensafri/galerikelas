import React, { useContext, useEffect, useState } from "react";
import { PersonContext } from "../../contexts/PersonContexts";

export default function SearchBox() {
  const { persons, setPersons } = useContext(PersonContext);
  const [searchField, setSearchField] = useState("");
  const [personFiltered, setPersonFiltered] = useState(persons);

  useEffect(() => {
    setPersonFiltered(
      persons.filter((person) => {
        return person.nama.toLowerCase().includes(searchField.toLowerCase());
      })
    );
  }, []);

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Cari Siapa?"
        onChange={handleChange}
        className="border-none outline-none p-2.5 w-40 leading-8 mb-8"
      />
    </div>
  );
}

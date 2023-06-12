import React, { Fragment, useContext, useEffect, useState } from "react";
import { PersonContext } from "../contexts/PersonContexts";

export default function CardList() {
  const [searchField, setSearchField] = useState("");
  const { persons } = useContext(PersonContext);
  const [personFiltered, setPersonFiltered] = useState(persons);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    const newPersonsFiltered = persons.filter((person) =>
      person.nama.toLowerCase().includes(searchField.toLowerCase())
    );
    setPersonFiltered(newPersonsFiltered);
  }, [persons, searchField]);

  onchange = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <Fragment>
      <div>
        <input
          type="search"
          placeholder="Cari Siapa?"
          onChange={onchange}
          className="border-none mt-7 outline-none p-2.5 w-40 leading-8 mb-8"
        />
      </div>
      <div className="mx-7 my-auto grid grid-cols-4 gap-5">
        {loading ? (
          <div className="h-screen flex flex-col items-center content-center">
            <h1>Loading Cok!</h1>
          </div>
        ) : (
          personFiltered.map((persons) => {
            return (
              <div
                key={persons.id}
                className="flex flex-col mb-7 mt-0 bg-slate-600 border border-solid rounded-md p-6 cursor-pointer transition transform hover:-translate-y-1"
              >
                <img
                  src={persons.imgUrl}
                  alt="foto profil"
                  className="h-96 object-cover"
                />
                <h2>{persons.nama}</h2>
                <p>@{persons.ig}</p>
              </div>
            );
          })
        )}
      </div>
    </Fragment>
  );
}

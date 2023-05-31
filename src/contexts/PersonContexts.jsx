import { createContext, useEffect, useState } from "react";
import { findPersons } from "../firebase";

export const PersonContext = createContext({
  persons: [],
  addPerson: () => {},
  updatePerson: () => {},
  deletePerson: () => {},
});

export const PersonProvider = ({ children }) => {
  const [persons, setPersons] = useState([]);

  const addPerson = async () => {
    const response = await findPersons();
    setPersons(response);
    console.log(response);
  };

  useEffect(() => {
    addPerson();
  }, []);

  const value = { persons };
  return (
    <PersonContext.Provider value={value}>{children}</PersonContext.Provider>
  );
};

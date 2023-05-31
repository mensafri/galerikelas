import { createContext, useState } from "react";
import { inputPersons } from "../firebase";

export const PersonContext = createContext({
  persons: [],
  addPerson: () => {},
  updatePerson: () => {},
  deletePerson: () => {},
});

export const PersonProvider = ({ children }) => {
  const [persons, setPersons] = useState([]);

  const addPerson = (nama, ig, imgUrl) => {
    inputPersons(nama, ig, imgUrl)
  };

  const value = {addPerson};
  return (
    <PersonContext.Provider value={value}>{children}</PersonContext.Provider>
  );
};

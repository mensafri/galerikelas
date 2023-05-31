import { createContext, useEffect, useState } from "react";
import { findPersons } from "../firebase";

export const PersonContext = createContext({
  persons: [],
  getPersons: () => {},
  setPersons: () => {},
});

export const PersonProvider = ({ children }) => {
  const [persons, setPersons] = useState([]);

  const getPersons = async () => {
    const response = await findPersons();
    setPersons(response);
  };

  useEffect(() => {
    getPersons();
  }, []);

  const value = { persons, setPersons };
  return (
    <PersonContext.Provider value={value}>{children}</PersonContext.Provider>
  );
};

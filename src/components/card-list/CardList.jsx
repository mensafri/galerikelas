import React from "react";
import Card from "../card/Card";

export default function CardList() {
  const persons = [
    {
      id: 2,
      name: "Amin",
      ig: "@mamin",
      pap: "../../assets/profil.png",
    },
  ];

  return (
    <div className="mx-7 my-auto grid grid-cols-4 gap-5">
      {persons.map((persons) => {
        return <Card persons={persons} />;
      })}
      {persons.map((persons) => {
        return <Card persons={persons} />;
      })}
      {persons.map((persons) => {
        return <Card persons={persons} />;
      })}
      {persons.map((persons) => {
        return <Card persons={persons} />;
      })}
      {persons.map((persons) => {
        return <Card persons={persons} />;
      })}
      {persons.map((persons) => {
        return <Card persons={persons} />;
      })}
      {persons.map((persons) => {
        return <Card persons={persons} />;
      })}
      {persons.map((persons) => {
        return <Card persons={persons} />;
      })}
      {persons.map((persons) => {
        return <Card persons={persons} />;
      })}
      {persons.map((persons) => {
        return <Card persons={persons} />;
      })}
      {persons.map((persons) => {
        return <Card persons={persons} />;
      })}
      {persons.map((persons) => {
        return <Card persons={persons} />;
      })}
      {persons.map((persons) => {
        return <Card persons={persons} />;
      })}
      {persons.map((persons) => {
        return <Card persons={persons} />;
      })}
      {persons.map((persons) => {
        return <Card persons={persons} />;
      })}
    </div>
  );
}

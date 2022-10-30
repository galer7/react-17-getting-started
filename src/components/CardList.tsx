import React from "react";
import Card, { UserData } from "./Card";

function CardList({ data }: { data: UserData[] }) {
  return (
    <div>
      {data.map((user) => (
        <Card {...user} />
      ))}
    </div>
  );
}

export default CardList;

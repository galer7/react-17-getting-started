import React, { useState } from "react";
import { UserData } from "../components/Card";
import CardList from "../components/CardList";
import Form from "../components/Form";

function GitHub() {
  const [data, setData] = useState<UserData[]>([]);
  return (
    <div>
      <Form onSubmit={(newUser: UserData) => setData([...data, newUser])} />
      <CardList data={data} />
    </div>
  );
}

export default GitHub;

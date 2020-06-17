import React, { useState, useEffect } from "react";
import axios from 'axios'

const SwapiGetter = () => {
  const [person, setPerson] = useState();

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/1/")
      .then(res => {
        setPerson(res.data);
      });
  }, []);

  if (!person) return <h1>...Loading</h1>;

  return (
    <div>
      <h1>{person.name}</h1>
    </div>
  );
}

export default SwapiGetter
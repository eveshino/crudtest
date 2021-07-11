import React, { useState } from "react";
import Axios from "axios";

import styles from "./AddCompany.module.css";

export function AddCompany() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [postcode, setPostcode] = useState(0);
  const [prefecture, setPrefecture] = useState("");
  const [city, setCity] = useState("");
  const [local, setLocal] = useState("");

  const submitCompany = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      email: email,
      postcode: postcode,
      prefecture: prefecture,
      city: city,
      local: local,
    })
      .then(() => {
        console.log("Success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.App}>
      <h1>Grune Backend Test</h1>
      <form className={styles.form} method="POST">
        <label>Company Name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>PostCode</label>
        <input
          type="number"
          name="postcode"
          onChange={(e) => {
            setPostcode(e.target.value);
          }}
        />
        <label>Prefecture</label>
        <input
          type="text"
          name="prefecture"
          onChange={(e) => {
            setPrefecture(e.target.value);
          }}
        />
        <label>City</label>
        <input
          type="text"
          name="city"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <label>Local</label>
        <input
          type="text"
          name="local"
          onChange={(e) => {
            setLocal(e.target.value);
          }}
        />
      </form>

      <button onClick={submitCompany} className="submit">
        Submit
      </button>
    </div>
  );
}

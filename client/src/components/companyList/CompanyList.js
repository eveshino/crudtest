import { useEffect, useState } from "react";
import Axios from "axios";

import styles from "./CompanyList.module.css";

export function CompanyList() {
  const [companyList, setCompanyList] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [postcode, setPostcode] = useState(0);
  const [prefecture, setPrefecture] = useState("");
  const [city, setCity] = useState("");
  const [local, setLocal] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/companies")
      .then((response) => {
        setCompanyList(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteCompany = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`)
      .then(() => {
        setCompanyList(
          companyList.filter((val) => {
            return val.id !== id;
          })
        );
      })
      .catch((err) => console.log(err));
  };

  const updateCompany = (id) => {
    Axios.put("http://localhost:3001/update", {
      name: name,
      email: email,
      postcode: postcode,
      prefecture: prefecture,
      city: city,
      local: local,
      id: id,
    })
      //react page automatic to the update
      .then(() => {
        setCompanyList(
          companyList.map((val) => {
            return val.id === id
              ? {
                  id: val.id,
                  name: name,
                  email: email,
                  postcode: postcode,
                  prefecture: prefecture,
                  city: city,
                  local: local,
                }
              : val;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.get}>
      {companyList.map((val, key) => {
        return (
          <div className={styles.companies} key={key}>
            <div className={styles.content}>
              <h5>Name: {val.name}</h5>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className={styles.content}>
              <h5>Email: {val.email}</h5>
              <input
                type="email"
                placeholder="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className={styles.content}>
              <h5>Postcode: {val.postcode}</h5>
              <input
                type="number"
                placeholder="Postcode"
                onChange={(e) => {
                  setPostcode(e.target.value);
                }}
              />
            </div>
            <div className={styles.content}>
              <h5>Prefecture: {val.prefecture}</h5>
              <input
                type="text"
                placeholder="Prefecture"
                onChange={(e) => {
                  setPrefecture(e.target.value);
                }}
              />
            </div>
            <div className={styles.content}>
              <h5>City: {val.city}</h5>
              <input
                type="text"
                placeholder="City"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
            </div>
            <div className={styles.content}>
              <h5>Local: {val.local}</h5>
              <input
                type="text"
                placeholder="Local"
                onChange={(e) => {
                  setLocal(e.target.value);
                }}
              />
            </div>

            <div className={styles.buttons}>
              <button
                onClick={() => {
                  deleteCompany(val.id);
                }}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  updateCompany(val.id);
                }}
              >
                Update
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

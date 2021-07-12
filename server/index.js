const express = require("express");
const cors = require("cors");
const db = require("./config/db.config");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//CREATE
app.post("/create", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const postcode = req.body.postcode;
  const prefecture = req.body.prefecture;
  const city = req.body.city;
  const local = req.body.local;

  const sqlInsert =
    "INSERT INTO `gruneasia_test`.`companies` (`name`, `email`, `postcode`, `prefecture`, `city`, `local`) VALUES (?,?,?,?,?,?)";
  db.query(
    sqlInsert,
    [name, email, postcode, prefecture, city, local],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("VALUE INSERTED");
      }
    }
  );
});
//READ
app.get("/companies", (req, res) => {
  db.query("SELECT * FROM companies", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//UPDATE
app.put("/update", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const email = req.body.email;
  const postcode = req.body.postcode;
  const prefecture = req.body.prefecture;
  const city = req.body.city;
  const local = req.body.local;
  db.query(
    "UPDATE companies SET name = ?,email = ?, postcode = ?, prefecture = ?, city = ?, local = ?  WHERE id = ?",
    [name, email, postcode, prefecture, city, local, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
//DELETE
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM companies WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});

//

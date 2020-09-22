var express = require("express");
var app = express();
var mysql = require("mysql");
var cors = require("cors");
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hola!!!");
});
app.listen(4000, () => {
  console.log("Buon Giorno, il server è connesso correttamente");
});
app.get("/customers", (req, res) => {
  var con = mysql.createConnection({
    host: "217.61.130.155",
    user: "admin_test",
    password: "facilfacil",
    database: "admin_test",
  });
  con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM customers", function (err, result, fields) {
      if (err) throw err;
      //res.send(JSON.stringify(result));
      res.header("Content-Type", "application/json");
      res.json(result);
      con.end();
    });
  });
});
app.get("/customer", (req, res) => {
  var con = mysql.createConnection({
    host: "217.61.130.155",
    user: "admin_test",
    password: "facilfacil",
    database: "admin_test",
  });
  con.connect(function (err) {
    if (err) throw err;
    con.query(
      "SELECT * FROM customers WHERE CustomerID='" + req.query.id + "'",
      function (err, result, fields) {
        if (err) throw err;
        //res.send(JSON.stringify(result));
        res.header("Content-Type", "application/json");
        //res.json(result[0]);
        if (result.length > 0) {
          res.json(result[0]);
        } else {
          res.json({});
        }
        con.end();
      }
    );
  });
});

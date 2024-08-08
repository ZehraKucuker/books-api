const express = require("express");
const cors = require("cors");
const router = require("./routers");
const {r} = require("./database");
const bodyParser = require("body-parser");
const literatureJSON = require("./data/literature.json");
const philosophyJSON = require("./data/philosophy.json");
const cultureJSON = require("./data/culture.json");
const psychologyJSON = require("./data/psychology.json");
const historyJSON = require("./data/history.json");

const app = express();
app.use(cors());
app.use(bodyParser.json());
// Database yoksa ->
const dbName = "test";
r.dbList()
    .contains(dbName)
    .do(function(dbExists) {
      return r.branch(
        dbExists,
        { created: 0 },
        r.dbCreate(dbName)
      );
    })
.run();
// Table yoksa ->
const createTables = async (tableName) => {
    r.db(dbName).tableList()
        .contains(tableName)
        .do(function(tableExists) {
        return r.branch(
            tableExists,
            { created: 0 },
            r.tableCreate(tableName)
        );
        })
    .run();
}
createTables("literature");
createTables("philosophy");
createTables("culture");
createTables("psychology");
createTables("history");
// Table boşsa data ekleme işlemi ->
const inData = async (tableName, e) => {
    const newData = e.data;
    r.db(dbName).table(tableName).insert(newData).run();
}
const controlData = async (tableName, data) => {
    const tables = r.db("test").table(tableName).isEmpty();
    if (tables) {
        inData(tableName, data);
    }
}
controlData("literature", literatureJSON);
controlData("philosophy", philosophyJSON);
controlData("culture", cultureJSON);
controlData("psychology", psychologyJSON);
controlData("history", historyJSON);

app.use("/", router);

app.listen(3001, () => console.log("3001 portu dinleniyor."));

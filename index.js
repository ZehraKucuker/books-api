const express = require("express");
const cors = require("cors");
const router = require("./routers");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", router);

app.listen(3001, () => console.log("3001 portu dinleniyor."));

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const configureRoutes = require("./routes");

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

configureRoutes(app);

app.listen(8000, error => {
    if (error) throw error;
    console.log("Server running on port " + 8000);
});
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const jwt = require("./src/configs/jwt");
const { login, register } = require("./src/controllers/account.controller");

dotenv.config();

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || "development";

const app = express();

if (env !== "staging" && env !== "production") {
  const swaggerUi = require("swagger-ui-express");
  const swaggerDocument = require("./src/configs/swagger");
  app.use("/swagger-ui", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

const corsOptions = {
  origin: [
    "*",
    "http://localhost",
    "http://localhost:3000",
    "http://example.com",
    "http://localhost:8080",
    "https://www.w3schools.com",
  ],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.use("/image", express.static("./images"));

app.use(express.json());
app.use("/account/register", register);
app.use("/account/login", login);
app.use(jwt.verifyToken);
app.use(require("./src/routes/routes"));

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
  console.log(`ENV on: ${env}`);
  console.log("Press Ctrl + C to quit.");
});

const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", routes);

const PORT = 8080;

function start() {
  app.listen(PORT, () => {
    console.log(`Server has been started on port: ${PORT}`);
  });
}
start();

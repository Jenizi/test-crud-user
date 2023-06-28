import express from "express";
import "express-async-errors";
require("dotenv").config();

const port = 5000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/index")(app);

app.listen(port, () => {
  return console.log(`Server running on port ${port}`);
});

require("dotenv").config();
const express = require("express");
const connectToDB = require("./database/db");

const app = express();
const PORT = process.env.PORT || 3004;

connectToDB();

//middleware -> express.json()
app.use(express.json());

//routes here
app.use("/api/books",require("./routes/routes"));

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
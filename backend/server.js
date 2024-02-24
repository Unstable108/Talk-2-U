const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connctDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errormiddleware");

const app = express();
dotenv.config();
connctDB();

//since we are taking value form frontend
//we need to tell the server to accept the json data

app.use(express.json()); //to accept JSON data

app.get("/", (req, res) => {
  res.send("API is Running Succesfully");
});

app.use("/api/user", userRoutes);

//error handling function or middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Started on PORT ${PORT}`.yellow.bold));

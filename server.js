const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./config/.env" }); 
const connectToDB = require("./config/Database");

const app = express();
PORT = process.env.port || 6000;

app.use(cors());

// multer to upload images
// app.use("/uploads", express.static(__dirname + "/uploads"));

app.use(express.json());
connectToDB();

app.use("/user", require("./routes/userRoutes"));

app.listen(PORT, (e) => e ? console.log(e.message) : console.log(`Server is running on port ${PORT}`)
);

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";
import UserRoute from "./routes/userRoutes.js";
import errorHandling from "./middlewares/errorhandler.js";
import createUserTable from "./data/createUserTable.js";

dotenv.config();

const app = express();

const port = process.env.PORT;

//middware
app.use(express.json());
app.use(cors());
app.use("/api", UserRoute);

//routes

//Error handling middleware
app.use(errorHandling);
//createtable
createUserTable();
// testing
app.get("/", async (req, res) => {
  const result = await pool.query("SELECT current_database()");
  res.send(`data connected, ${result.rows[0].current_database}`);
});

//server runnning
app.listen(port, () => {
  console.log(`server runing from port ${port}`);
});

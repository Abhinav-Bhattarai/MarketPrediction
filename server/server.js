import express from "express";
import mongoose from "mongoose";
import https from "https";
import fs from "fs";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

const app = express();
const config = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};
const PORT = 8080;
const server = https.createServer(config, app);

// middleware
app.use(
  express.json({
    limit: "50mb",
  })
);
app.use(
  cors({
    credentials: true,
    origin: ["https://localhost:3000", "https://192.168.0.104:3000"],
  })
);

// db connection
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch(() => {
    console.log("did not connect to mongoDB");
  });

// listener
server.listen(PORT, () => {
  console.log(`Connected to localhost:${PORT}`);
});

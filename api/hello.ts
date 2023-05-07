import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from the Express api");
});

app.listen(port, () => {
  console.log(`App listening on port:  ${port}`);
});

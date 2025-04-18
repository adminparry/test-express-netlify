import express from "express";
import serverlessHttp from "serverless-http";
import { PrismaClient } from "@prisma/client";
const app = express();
const client = new PrismaClient();

app.use((req, res) => {
  client.user.findMany().then((users) => {
    res.json(users);
  })
});

export const handler = serverlessHttp(app);



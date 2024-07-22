import { PrismaClient } from "@prisma/client";
import "dotenv/config";
import Fastify from "fastify";
import { App } from "./app";

const fastify = Fastify({
  logger: true,
});

const port = Number.parseInt(process.env.PORT || "8080");

const prisma = new PrismaClient();

const app = new App(prisma, fastify, port);

app.start();

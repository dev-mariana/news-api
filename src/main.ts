import { PrismaClient } from "@prisma/client";
import "dotenv/config";
import Fastify from "fastify";

const fastify = Fastify({
  logger: true,
});

fastify.get("/api", (request, reply) => {
  reply.send({ hello: "world" });
});

const port = process.env.PORT || 8080;

const prisma = new PrismaClient();

fastify.listen({ port: Number.parseInt(port.toString()) }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }

  prisma.$connect().then(() => {
    fastify.log.info("Prisma connected");
  });

  fastify.log.info(`Server listening on ${address}`);
});

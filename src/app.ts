import type { PrismaClient } from "@prisma/client";
import "dotenv/config";
import type { FastifyInstance } from "fastify";

export class App {
  private prisma: PrismaClient;
  private fastify: FastifyInstance;
  private port: number;

  constructor(prisma: PrismaClient, fastify: FastifyInstance, port: number) {
    this.prisma = prisma;
    this.fastify = fastify;
    this.port = port;
  }

  public async start() {
    this.fastify.get("/api", (request, reply) => {
      reply.send({ hello: "world" });
    });

    try {
      await this.prisma.$connect();
      this.fastify.log.info("Prisma connected");
    } catch (error) {
      this.fastify.log.error("Error connecting to Prisma", error);
      process.exit(1);
    }

    this.fastify.listen({ port: this.port }, (err, address) => {
      if (err) {
        this.fastify.log.error(err);
        process.exit(1);
      }
      this.fastify.log.info(`Server listening on ${address}`);
    });
  }
}

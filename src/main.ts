import "dotenv/config";
import fastify from "fastify";
import { NewsController } from "./application/news/controllers/news.controller";
import { NewsService } from "./domain/news/services/news.service";
import { prisma } from "./infra/database/prisma";
import { NewsRepository } from "./infra/database/repositories/news.repository";

const app = fastify({
  logger: true,
});

const port = process.env.PORT || 8080;
const newsRepository = new NewsRepository(prisma);
const newsService = new NewsService(newsRepository);
const newsController = new NewsController(newsService);

newsController.create(app);

try {
  app.listen({ port: Number(port) }).then(() => {
    app.log.info("Server is running...");
  });
} catch (error) {
  app.log.error(error);
}

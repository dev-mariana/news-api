import "dotenv/config";
import fastify from "fastify";
import { NewsController } from "./application/news/controllers/news.controller";
import { NewsService } from "./domain/news/services/news.service";
import { prisma } from "./infra/database/prisma";
import { NewsRepository } from "./infra/database/repositories/news.repository";

export const app = fastify({
  logger: true,
});

const newsRepository = new NewsRepository(prisma);
const newsService = new NewsService(newsRepository);
const newsController = new NewsController(newsService);

newsController.create(app);
newsController.getNews(app);
newsController.getById(app);
newsController.update(app);
newsController.delete(app);

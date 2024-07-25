import type { FastifyInstance } from "fastify";
import type { NewsService } from "../../../domain/news/services/news.service";
import { createNewSchema } from "../dto/create-new.dto";

export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  async create(app: FastifyInstance) {
    app.post("/api/news", async (request, reply) => {
      const { title, description, content, created_by } = createNewSchema.parse(
        request.body
      );

      const data = await this.newsService.create({
        title,
        description,
        content,
        created_by,
      });

      return reply.status(201).send(data);
    });
  }

  async getNews(app: FastifyInstance) {
    app.get("/api/news", async (request, reply) => {
      const news = await this.newsService.getNews();

      return reply.status(200).send(news);
    });
  }
}

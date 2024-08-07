import type { FastifyInstance } from "fastify";
import type { NewsService } from "../../../domain/news/services/news.service";
import { createNewSchema } from "../dto/create-new.dto";
import { deleteNewSchema } from "../dto/delete-new.dto";
import { getNewByIdSchema } from "../dto/get-new-by-id.dto";
import { updateNewSchema } from "../dto/update-new.dto";

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

  async getById(app: FastifyInstance) {
    app.get("/api/news/:id", async (request, reply) => {
      const { id } = getNewByIdSchema.parse(request.params);

      const news = await this.newsService.getById(id);

      return reply.status(200).send(news);
    });
  }

  async update(app: FastifyInstance) {
    app.patch("/api/news/:id", async (request, reply) => {
      const { id } = updateNewSchema.parse(request.params);
      const { title, description, content, created_by } = createNewSchema.parse(
        request.body
      );

      const data = await this.newsService.update(id, {
        title,
        description,
        content,
        created_by,
      });

      return reply.status(200).send(data);
    });
  }

  async delete(app: FastifyInstance) {
    app.delete("/api/news/:id", async (request, reply) => {
      const { id } = deleteNewSchema.parse(request.params);

      await this.newsService.delete(id);

      return reply.status(200).send({ message: "New deleted." });
    });
  }
}

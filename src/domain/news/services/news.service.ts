import type { NewsRepository } from "../../../infra/database/repositories/prisma/news.repository";
import type { New } from "../entities/new";
import type { INewsService } from "./interfaces/news.service";

export class NewsService implements INewsService {
  constructor(private readonly newsRepository: NewsRepository) {}

  async create(data: Partial<New>): Promise<New> {
    return await this.newsRepository.create(data);
  }

  async getNews(): Promise<New[]> {
    return await this.newsRepository.getNews();
  }

  async getById(id: string): Promise<New> {
    return await this.newsRepository.getById(id);
  }

  async update(id: string, data: Partial<New>): Promise<New> {
    const newExists = await this.newsRepository.getById(id);

    if (!newExists) {
      throw new Error("New not found.");
    }

    return await this.newsRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    const newExists = await this.newsRepository.getById(id);

    if (!newExists) {
      throw new Error("New not found.");
    }

    await this.newsRepository.delete(id);
  }
}

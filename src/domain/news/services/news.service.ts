import type { NewsRepository } from "../../../infra/database/repositories/news.repository";
import type { New } from "../entities/new";
import type { INewsService } from "./interfaces/news.service";
import type { CreateNewInput } from "./ports/input/create-new.input";

export class NewsService implements INewsService {
  constructor(private readonly newsRepository: NewsRepository) {}

  async create(data: CreateNewInput): Promise<New> {
    return await this.newsRepository.create(data);
  }

  async getNews(): Promise<New[]> {
    return await this.newsRepository.getNews();
  }

  async getById(id: string): Promise<New> {
    return await this.newsRepository.getById(id);
  }

  async update(id: string, data: New): Promise<New> {
    const newExists = await this.newsRepository.getById(id);

    if (!newExists) {
      throw new Error("New not found.");
    }

    return await this.newsRepository.update(id, data);
  }
}

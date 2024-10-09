import { New } from "@/domain/news/entities/new";
import { INewsRepository } from "@/domain/news/repositories/news.repository";
import { randomUUID } from "crypto";

export class InMemoryNewsRepository implements INewsRepository {
  public data: New[] = [];

  async create(data: Partial<New>): Promise<New> {
    const news = {
      id: randomUUID(),
      title: data.title,
      description: data.description,
      content: data.content,
      created_by: data.created_by,
      created_at: new Date(),
      updated_at: new Date() || null,
    };

    this.data.push(news);

    return news;
  }

  async getNews(): Promise<New[]> {
    return this.data.map((news) => news);
  }

  async getById(id: string): Promise<New | null> {
    return this.data.find((news) => news.id === id);
  }

  async update(id: string, data: Partial<New>): Promise<New> {
    const index = this.data.findIndex((item) => item.id === id);

    this.data[index] = {
      ...this.data[index],
      ...data,
    };

    return this.data[index];
  }

  async delete(id: string): Promise<void> {
    const index = this.data.findIndex((item) => item.id === id);
    this.data.splice(index, 1);
  }
}

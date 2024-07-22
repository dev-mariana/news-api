import type { PrismaClient } from "@prisma/client";
import type { New } from "../../../domain/news/entities/new";
import type { INewsRepository } from "../../../domain/news/repositories/news.repository";

export class NewsRepository implements INewsRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: New): Promise<New> {
    return await this.prisma.new.create({
      data: {
        title: data.title,
        description: data.description,
        content: data.content,
        created_by: data.created_by,
        created_at: new Date(),
      },
    });
  }
}

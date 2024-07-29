import type { PrismaClient } from "@prisma/client";
import type { New } from "../../../domain/news/entities/new";
import type { INewsRepository } from "../../../domain/news/repositories/news.repository";

export class NewsRepository implements INewsRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: Partial<New>): Promise<New> {
    return await this.prisma.new.create({
      data: {
        title: data.title,
        description: data.description,
        content: data.content,
        created_by: data.created_by,
        created_at: new Date(),
        updated_at: null,
      },
    });
  }

  async getNews(): Promise<New[]> {
    return await this.prisma.new.findMany();
  }

  async getById(id: string): Promise<New> {
    const data = await this.prisma.new.findUnique({ where: { id } });

    if (!data) {
      throw new Error("New not found.");
    }

    return data;
  }

  async update(id: string, data: New): Promise<New> {
    return await this.prisma.new.update({
      where: { id },
      data: {
        title: data.title,
        description: data.description,
        content: data.content,
        created_by: data.created_by,
        updated_at: new Date(),
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.new.delete({ where: { id } });
  }
}

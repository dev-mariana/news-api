import { PrismaClient } from "@prisma/client";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { NewsRepository } from "../news.repository";

const prisma = new PrismaClient();
const newsRepository = new NewsRepository(prisma);

describe("NewsRepository", () => {
  beforeAll(async () => {
    await prisma.new.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("should create a new", async () => {
    const news = await newsRepository.create({
      title: "Test",
      description: "Testing..",
      content: "Test Content",
      created_by: "Mari",
    });

    expect(news).toEqual({
      id: expect.any(String),
      title: "Test",
      description: "Testing..",
      content: "Test Content",
      created_by: "Mari",
      created_at: expect.any(Date),
      updated_at: null,
    });
  });
});

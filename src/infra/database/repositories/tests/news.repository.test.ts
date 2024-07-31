import { PrismaClient } from "@prisma/client";
import {
  afterAll,
  afterEach,
  beforeAll,
  describe,
  expect,
  it,
  vi,
} from "vitest";
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

  afterEach(() => {
    vi.restoreAllMocks();
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

  it("should get all news", async () => {
    const news = await newsRepository.getNews();

    expect(news).toEqual([
      {
        id: expect.any(String),
        title: "Test",
        description: "Testing..",
        content: "Test Content",
        created_by: "Mari",
        created_at: expect.any(Date),
        updated_at: null,
      },
    ]);
  });

  it("should get a new by id", async () => {
    const id = "0042f3d6-6f52-42f4-87d5-fb51124615f4";
    const mockNews = {
      id: "0042f3d6-6f52-42f4-87d5-fb51124615f4",
      title: "Test",
      description: "Testing..",
      content: "Test Content",
      created_by: "Mari",
      created_at: expect.any(Date),
    };

    vi.spyOn(newsRepository, "getById").mockResolvedValue(mockNews);

    const news = await newsRepository.getById(id);

    expect(news).toEqual(mockNews);
  });
});

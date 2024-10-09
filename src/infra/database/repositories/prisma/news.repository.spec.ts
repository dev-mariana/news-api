import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { InMemoryNewsRepository } from "../in-memory/in-memory-news.repository";

let inMemoryNewsRepository: InMemoryNewsRepository;

describe("NewsRepository", () => {
  beforeEach(async () => {
    inMemoryNewsRepository = new InMemoryNewsRepository();

    const result = await inMemoryNewsRepository.create({
      title: "Test",
      description: "Testing..",
      content: "Test Content",
      created_by: "Mari",
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should be able to create a new", async () => {
    const news = await inMemoryNewsRepository.create({
      title: "Test",
      description: "Testing..",
      content: "Test Content",
      created_by: "Mari",
    });

    expect(news.id).toEqual(expect.any(String));
  });

  it("should be able to get all news", async () => {
    const news = await inMemoryNewsRepository.getNews();

    expect(news).toHaveLength(1);
    expect(news).toEqual([expect.objectContaining({ title: "Test" })]);
  });

  it("should be able to get a new by id", async () => {
    const createdNew = await inMemoryNewsRepository.create({
      title: "Test",
      description: "Testing..",
      content: "Test Content",
      created_by: "Mari",
    });

    const news = await inMemoryNewsRepository.getById(createdNew.id);

    expect(news.id).toEqual(createdNew.id);
  });

  it("should not to be able return a new by id if not exists", async () => {
    const id = "bb3bc032-e865-4477-9414-9b918e442428";

    vi.spyOn(inMemoryNewsRepository, "getById").mockRejectedValue(
      new Error("New not found.")
    );

    await expect(inMemoryNewsRepository.getById(id)).rejects.toThrow(
      new Error("New not found.")
    );
  });

  it("should be able to update a new", async () => {
    const createdNew = await inMemoryNewsRepository.create({
      title: "Test",
      description: "Testing..",
      content: "Test Content",
      created_by: "Mari",
    });

    const news = await inMemoryNewsRepository.update(createdNew.id, {
      title: "Test 2",
      description: "Testing..",
      content: "Test Content",
      created_by: "Mari",
    });

    expect(news.title).toEqual("Test 2");
  });

  it("should be able to delete a new", async () => {
    const createdNew = await inMemoryNewsRepository.create({
      title: "Test",
      description: "Testing..",
      content: "Test Content",
      created_by: "Mari",
    });

    await inMemoryNewsRepository.delete(createdNew.id);

    expect(inMemoryNewsRepository.data).toHaveLength(1);
  });
});

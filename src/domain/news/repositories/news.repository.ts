import type { New } from "../entities/new";

export interface INewsRepository {
  create(data: New): Promise<New>;
  getNews(): Promise<New[]>;
  getById(id: string): Promise<New>;
}

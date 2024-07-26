import type { New } from "../entities/new";

export interface INewsRepository {
  create(data: New): Promise<New>;
  getNews(): Promise<New[]>;
  getById(id: string): Promise<New>;
  update(id: string, data: New): Promise<New>;
  delete(id: string): Promise<void>;
}

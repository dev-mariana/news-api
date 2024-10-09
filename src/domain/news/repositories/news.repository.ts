import type { New } from "../entities/new";

export interface INewsRepository {
  create(data: Partial<New>): Promise<New>;
  getNews(): Promise<New[]>;
  getById(id: string): Promise<New | null>;
  update(id: string, data: Partial<New>): Promise<New>;
  delete(id: string): Promise<void>;
}

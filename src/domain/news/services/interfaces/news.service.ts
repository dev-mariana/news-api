import type { New } from "../../entities/new";

export interface INewsService {
  create(data: Partial<New>): Promise<New>;
  getNews(): Promise<New[]>;
  getById(id: string): Promise<New>;
  update(id: string, data: Partial<New>): Promise<New>;
  delete(id: string): Promise<void>;
}

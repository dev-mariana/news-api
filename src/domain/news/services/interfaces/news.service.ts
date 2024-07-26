import type { New } from "../../entities/new";
import type { CreateNewInput } from "../ports/input/create-new.input";

export interface INewsService {
  create(data: CreateNewInput): Promise<New>;
  getNews(): Promise<New[]>;
  getById(id: string): Promise<New>;
  update(id: string, data: New): Promise<New>;
}

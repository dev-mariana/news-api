import z from "zod";
import { CreateNewInput } from "../../../domain/news/services/ports/input/create-new.input";

export const createNewSchema = z.object({
  title: z.string(),
  description: z.string(),
  content: z.string(),
  created_by: z.string(),
});

export type CreateNewDto = z.infer<typeof createNewSchema>;

export function toDomain(data: CreateNewDto): CreateNewInput {
  return new CreateNewInput(data);
}

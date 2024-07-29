import z from "zod";

export const createNewSchema = z.object({
  title: z.string(),
  description: z.string(),
  content: z.string(),
  created_by: z.string(),
});

export type CreateNewDto = z.infer<typeof createNewSchema>;

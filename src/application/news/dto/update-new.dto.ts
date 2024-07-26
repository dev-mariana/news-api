import z from "zod";

export const updateNewSchema = z.object({
  id: z.string(),
});

export type UpdateNewDto = z.infer<typeof updateNewSchema>;

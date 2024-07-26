import z from "zod";

export const deleteNewSchema = z.object({
  id: z.string(),
});

export type DeleteNewDto = z.infer<typeof deleteNewSchema>;

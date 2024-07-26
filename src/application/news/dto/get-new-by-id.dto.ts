import z from "zod";

export const getNewByIdSchema = z.object({
  id: z.string(),
});

export type GetNewByIdDto = z.infer<typeof getNewByIdSchema>;

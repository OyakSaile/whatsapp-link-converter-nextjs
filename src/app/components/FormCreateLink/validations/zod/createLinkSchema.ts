import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const createLinkSchema = z.object({
  phone: z.string().min(10).max(11),
  textMessage: z.string().optional(),
});


export type CreateLinkSchemaType = z.infer<typeof createLinkSchema>;

export const createLinkSchemaResolver = zodResolver(createLinkSchema);

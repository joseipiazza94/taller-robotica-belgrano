import { defineCollection, z } from "astro:content";

const bitacora = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    mes: z.string(),
    fecha: z.date(), // Zod espera un objeto Date real
    image: z.string(),
    description: z.string(),
  }),
});

export const collections = { bitacora };

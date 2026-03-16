import { file, glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";
import { productSchema } from "./schemas/product";


const services = defineCollection({
    loader: file("./data/services.json"),
    schema: z.object({
        id: z.string().max(10),
        name: z.string().trim(),
        description: z.string().trim(),
        price: z.number(),
        title: z.string(),
        summary: z.string(),
        active: z.boolean(),
        image: z.string(),
    }),
});

const team = defineCollection({
    loader: glob({
        base: "./src/content/team",
        pattern: "**/*.mdx",
    }),
    schema: z.object({
        name: z.string().trim(),
        role: z.string().trim(),
        // bio: z.string().trim(),
        image: z.string(),
    }),
});

const product = defineCollection({
    loader: file("./data/products.json"),
    schema: z.object({
        name: z.string().trim(),
        description: z.string().trim(),
        price: z.number(),
        image: z.string(),
    }),
});

const products = defineCollection({
    loader: async () => {
        const response = await fetch("https://dummyjson.com/products?limit=80&skip=30'");
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        return data;
    },
    schema: productSchema.transform((data) => ({
        ...data,
        date: new Date(data.dateAvailable),
    })
    ),
});


export const collections = {
    services,
    team,
    product,
};

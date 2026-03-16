import { z } from "astro:content";

export const productSchema = z.object({
    title: "Product",
    properties: {
        name: z.string().trim().max(100),
        description: z.string().trim(),
        price: z.number().positive(),
        inStock: z.boolean(),
        images: {
            type: "array",
            items: { type: "string", format: "uri" },
        },
        category: { type: "string" },
        brand: { type: "string" },
        rating: { type: "number" },
        numReviews: { type: "number" },
        countInStock: { type: "number" },
    },
    required: ["name", "price", "description"],
}); 
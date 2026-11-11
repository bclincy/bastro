// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import icon from "astro-icon";

import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({

    integrations: [
        sitemap({ filter: (page) => page !== 'https://brianclincy.com/dashboard/' }),
        icon()
    ],
    site: 'https://brianclincy.com',
    adapter: node({
        mode: 'standalone',
    }),

    vite: {
        plugins: [tailwindcss()],
    },
});
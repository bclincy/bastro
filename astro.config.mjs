// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    integrations: [
        icon(),
        sitemap({ filter: (page) => page !== 'https://brianclincy.com/dashboard/' })
    ],
    site: 'https://brianclincy.com',
    adapter: node({
        mode: 'standalone',
    }),

    vite: {
        plugins: [tailwindcss()],
    },
});
// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
    integrations: [icon()],
    adapter: node({
        mode: 'standalone',
    }),

    vite: {
        plugins: [tailwindcss()],
    },
});
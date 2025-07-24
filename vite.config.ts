import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import htmlMinifier from "vite-plugin-html-minifier";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),
    htmlMinifier({
      minify: true,
    }),
    ViteImageOptimizer({}),
  ],
  build: {
    minify: "terser",
    cssMinify: "esbuild",
    sourcemap: "hidden",
  },
})

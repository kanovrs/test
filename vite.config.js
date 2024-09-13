import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx", // Убедитесь, что добавлена эта строка
    include: /src\/.*\.jsx?$/, // Обрабатывайте все файлы с расширением .js и .jsx
  },
  server: {
    proxy: {
      "/api": {
        target: "http://185.237.219.114:3000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});

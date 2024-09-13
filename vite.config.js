import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx", // Убедитесь, что добавлена эта строка
    include: /src\/.*\.jsx?$/, // Обрабатывайте все файлы с расширением .js и .jsx
  },
  base: '/test/',
  server: {
    
  },
});

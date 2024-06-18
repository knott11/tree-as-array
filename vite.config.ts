// vite.config.ts  
import { defineConfig } from 'vite';  
import path from 'path';  
  
export default defineConfig({  
  build: {  
    lib: {  
      entry: path.resolve(__dirname, 'src/index.js'), // 指向你的 TypeScript 入口文件  
      name: 'TreeAsArray', // UMD 全局变量名（如果需要的话）  
      formats: ['es', 'cjs'], // 生成 ES 模块和 CommonJS 模块  
    },  
    rollupOptions: {  
      // 这里通常不需要额外的 Rollup 配置，除非你有特殊需求  
      // ...  
    },  
    outDir: 'dist', // 输出目录  
    assetsDir: '', // 不需要额外的资源目录  
    // 其他构建选项...  
  },  
  // 如果你需要 TypeScript 插件（例如 vite-plugin-tsconfig-paths），可以在这里添加  
  // plugins: [/* ... */]  
});
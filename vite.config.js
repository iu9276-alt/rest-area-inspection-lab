import { defineConfig } from 'vite'

// JSX를 React 17+ 자동 런타임으로 변환합니다.
// (각 .jsx 파일에서 `import React`를 하지 않아도 동작하도록)
export default defineConfig({
  esbuild: {
    jsx: 'automatic',
  },
})

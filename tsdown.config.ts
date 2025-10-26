import { defineConfig } from 'tsdown'
import path from 'path'

export default defineConfig({
  entry: {
    index: 'ohos-typescript/lib/typescript.js'
  },
  platform: 'browser',
  alias: {
    'perf_hooks': path.resolve(process.cwd(), 'scripts/perf_hooks-polyfill.js')
  },
})

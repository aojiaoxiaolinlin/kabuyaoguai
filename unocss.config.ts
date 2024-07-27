// uno.config.ts
import { defineConfig, presetUno, presetAttributify } from 'unocss'

export default defineConfig({
  // ...UnoCSS options

  presets: [
    presetUno(),
    presetAttributify(),
  ],
})

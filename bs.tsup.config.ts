import { defineConfig, } from 'tsup';

export default defineConfig({
  bundle: true,
  clean: true,
  dts: true,
  entry: [ 'src/index.ts', ],
  format: [ 'cjs', 'esm', ],
  minify: true,
  minifyIdentifiers: true,
  minifySyntax: true,
  minifyWhitespace: true,
  skipNodeModulesBundle: true,
  outDir: './build',
  platform: 'node',
  target: 'node18',
  tsconfig: './tsconfig.json',
  sourcemap: false,
});

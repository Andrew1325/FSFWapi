import typescript from 'rollup-plugin-typescript2';
import livereload from 'rollup-plugin-livereload';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import rootImport from 'rollup-plugin-root-import';
import serve from 'rollup-plugin-serve';
import path from 'path';

module.exports = {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'iife',
  },
  plugins: [
    resolve({
      customResolveOptions: {
        moduleDirectory: ['node_modules'],
      },
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    rootImport({
      useEntry: 'prepend',
    }),
    typescript(),
    serve({
      contentBase: path.join(__dirname, 'dist'),
      port: 2345,
    }),
    livereload('dist'),
  ],
  watch: {
    clearScreen: false,
  },
};
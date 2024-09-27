import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import svelte from "rollup-plugin-svelte";

export default {
  input: "src/main.js",
  output: {
    file: "dist/bundle.js",
    format: "es",
    name: "Components",
  },
  plugins: [
    svelte({
      compilerOptions: {
        dev: !process.env.PRODUCTION,
      },
    }),
    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),
    commonjs(),
  ],
};

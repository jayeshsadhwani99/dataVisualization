import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "index.js",
  output: {
    file: "bundle.js",
    format: "iife",
    sourcemap: true,
  },
  plugins: [
    nodeResolve({
      extensions: [".js"],
    }),
    babel({
      presets: ["@babel/preset-react"],
    }),
    serve({
      open: true,
      verbose: true,
      contentBase: ["", "public"],
      host: "localhost",
      port: 3000,
    }),
    livereload({ watch: "bundle.js" }),
  ],
};

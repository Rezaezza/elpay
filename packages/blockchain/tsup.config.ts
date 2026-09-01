import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],

  format: ["esm"],

  dts: true,

  clean: true,

  sourcemap: true,

  splitting: false,

  external: [
    "react",
    "react-dom",

    "wagmi",
    "@wagmi/core",

    "viem",

    "@tanstack/react-query",
  ],
});
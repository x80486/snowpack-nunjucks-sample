/** @type { import("snowpack").SnowpackUserConfig } */
export default {
  devOptions: {
    open: "none",
  },
  env: {
    // ...
  },
  exclude: ["**/*.test.js", "**/_*.njk"], // ...not a winner without "**/_*.njk"
  mount: {
    src: "/",
  },
  optimize: {
    bundle: true,
    manifest: true,
    minify: true,
    sourcemap: "inline",
    target: "es2018",
  },
  plugins: ["snowpack-plugin-nunjucks"],
};

//
// https://www.snowpack.dev/guides/optimize-and-bundle#option-1-built-in-optimizations
// https://www.snowpack.dev/reference/configuration

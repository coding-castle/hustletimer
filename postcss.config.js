const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./**/**/*.html", "./**/**/*.svelte"],

  whitelistPatterns: [/svelte-/],

  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");

const production = process.env.NODE_ENV !== "development";
console.log(`production: ${production}`);

module.exports = {
  plugins: [
    require("tailwindcss"),
    ...(production ? [purgecss, cssnano, autoprefixer] : [])
  ]
};

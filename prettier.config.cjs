/** @type {import("prettier").Config} */
const config = {
  plugins: ["@ianvs/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
  printWidth: 100,
  tabWidth: 2,
  trailingComma: "all",
};

module.exports = config;

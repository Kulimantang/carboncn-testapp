import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the current file path and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to extract CSS variables from a file
function extractCSSVariables(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const regex = /--cds-[a-zA-Z0-9-]+/g;
  return [...new Set(content.match(regex))];
}

// Function to extract all keys from the cdsThemeMapping object
function extractKeysFromThemeMapping(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const regex = /"var\((--cds-[a-zA-Z0-9-]+)\)"/g;
  return [...new Set(content.match(regex))].map((match) => match.slice(5, -2));
}

// Paths to the files
const tailwindPath = path.join(__dirname, "src/styles/tailwind.css");
const themeMappingPath = path.join(__dirname, "cdsThemeMapping.ts");

// Extract variables and keys
const tailwindVariables = extractCSSVariables(tailwindPath);
const themeMappingKeys = extractKeysFromThemeMapping(themeMappingPath);

// Find missing variables in theme mapping
const missingInThemeMapping = tailwindVariables.filter(
  (variable) => !themeMappingKeys.includes(variable),
);

// Find variables in theme mapping that are not in CSS
const notInCSS = themeMappingKeys.filter((key) => !tailwindVariables.includes(key));

// Log the results
console.log("Variables in tailwind.css:", tailwindVariables.length);
console.log("Variables referenced in cdsThemeMapping.ts:", themeMappingKeys.length);
console.log("Variables missing in cdsThemeMapping.ts:", missingInThemeMapping.length);
console.log("Variables in cdsThemeMapping.ts but not in CSS:", notInCSS.length);

if (missingInThemeMapping.length > 0) {
  console.log("The following variables are missing in cdsThemeMapping.ts:");
  missingInThemeMapping.forEach((variable) => console.log(variable));
} else {
  console.log("All variables from tailwind.css are referenced in cdsThemeMapping.ts");
}

if (notInCSS.length > 0) {
  console.log("The following variables are in cdsThemeMapping.ts but not in the CSS:");
  notInCSS.forEach((variable) => console.log(variable));
} else {
  console.log("All variables in cdsThemeMapping.ts are present in the CSS");
}

import assert from "assert";
import * as carbonColors from "./carbon.colors.mjs";
import { cdsThemeMapping } from "./cdsThemeMapping.mjs";

function checkColorMappings() {
  const colorNames = [
    "red",
    "blue",
    "orange",
    "yellow",
    "magenta",
    "purple",
    "cyan",
    "teal",
    "green",
    "coolGray",
    "gray",
    "warmGray",
  ];

  colorNames.forEach((colorName) => {
    console.log(`Checking ${colorName} color mapping...`);
    const cdsColor = cdsThemeMapping[colorName];
    const carbonColor = carbonColors[colorName];

    assert(cdsColor, `cdsColor for ${colorName} is undefined`);
    assert(carbonColor, `carbonColor for ${colorName} is undefined`);

    for (let i = 10; i <= 100; i += 10) {
      const shade = i.toString();
      assert.strictEqual(
        cdsColor[shade],
        carbonColor[shade],
        `Mismatch for ${colorName} shade ${shade}`,
      );
    }

    const cdsHoverColor = cdsThemeMapping[colorName].hover;
    const carbonHoverColor = carbonColors[`${colorName}Hover`];

    assert(cdsHoverColor, `cdsHoverColor for ${colorName} is undefined`);
    assert(carbonHoverColor, `carbonHoverColor for ${colorName} is undefined`);

    for (let i = 10; i <= 100; i += 10) {
      const shade = i.toString();
      assert.strictEqual(
        cdsHoverColor[shade],
        carbonHoverColor[shade],
        `Mismatch for ${colorName} hover shade ${shade}`,
      );
    }
  });

  console.log("Checking black color mapping...");
  assert.strictEqual(cdsThemeMapping.black.DEFAULT, carbonColors.black, "Mismatch for black");
  assert.strictEqual(
    cdsThemeMapping.black.hover,
    carbonColors.blackHover,
    "Mismatch for black hover",
  );

  console.log("Checking white color mapping...");
  assert.strictEqual(cdsThemeMapping.white.DEFAULT, carbonColors.white, "Mismatch for white");
  assert.strictEqual(
    cdsThemeMapping.white.hover,
    carbonColors.whiteHover,
    "Mismatch for white hover",
  );

  console.log("All color mappings match!");
}

try {
  checkColorMappings();
} catch (error) {
  console.error("Error:", error.message);
  process.exit(1);
}

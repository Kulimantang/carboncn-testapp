import { type Config } from "tailwindcss";
import { cdsThemeMapping } from "./cdsThemeMapping.mjs";

export default {
  darkMode: ["selector", '[data-mode="g90"]'],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cds: {
          ...cdsThemeMapping,
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  // this needs to be disabled for Carbon Components to work
  // properly with tailwindcss
  corePlugins: {
    preflight: false,
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
      },
    },
  },
  plugins: [],
  extend: {
  keyframes: {
    blob: {
      "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
      "33%": { transform: "translate(30px, -40px) scale(1.1)" },
      "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
    },
  },
  animation: {
    blob: "blob 18s ease-in-out infinite",
  },
},

};

export default config;


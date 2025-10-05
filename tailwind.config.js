export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#00CCFF", // Bleu cyan lumineux qui ressort bien sur fond noir
        primary: "#111111", // Noir presque pur pour le fond
        secondary: "#333333", // Gris foncé pour les éléments d'interface
        "base-100": "#111111", // Fond principal - noir
        "base-200": "#1A1A1A", // Cartes et éléments légèrement plus clairs
        "base-300": "#222222", // Zones de contenu secondaire
        "base-content": "#E0E0E0", // Texte principal - blanc cassé
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#111111",
          secondary: "#333333",
          accent: "#00CCFF",
          neutral: "#191D24",
          "base-100": "#111111",
          "base-200": "#1A1A1A",
          "base-300": "#222222",
          "base-content": "#E0E0E0",
        },
      },
      "dark",
    ],
    darkTheme: "dark",
  }
}

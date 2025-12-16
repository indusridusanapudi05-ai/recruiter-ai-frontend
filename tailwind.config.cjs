/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A89FCD",
        "primary-hover": "#9888BE",
        "primary-dark": "#8A63D2",
        icon: "#8A7AB8",
        "bg-light-1": "#DDD5ED",
        "bg-light-2": "#F5F3FA",
        "bg-light-3": "#E8E3F5",
        disabled: "#D1D5DB",
        "text-dark": "#1F2937",
        "text-medium": "#6B7280",
        "border-light": "#E5E7EB"
      }
    }
  },
  plugins: []
};


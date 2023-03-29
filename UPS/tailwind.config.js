module.exports = {
  content: [
    "./screens//*.{ts,tsx}",
    "./components//*.{ts,tsx}",
    "./app/**/.{ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: require("tailwind-rn/unsupported-core-plugins"),
};

import { defineConfig } from "vite";

// ChainTrace India is a plain HTML/CSS/JavaScript prototype (no framework).
// Vite is used only as a local dev server and static build tool.
export default defineConfig({
  root: ".",
  build: {
    outDir: "dist"
  }
});

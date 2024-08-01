import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      enabled: true,
      include: ["src/**/*.{ts, js}"],
      exclude: ["node_modules", "test-utils/**/*"],
    },
  },
});

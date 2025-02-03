import { vitePlugin as remix } from "@remix-run/dev";
import { installGlobals } from "@remix-run/node";
import { defineConfig } from "vite";
import { vercelPreset } from "@vercel/remix/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import monicon from "@monicon/vite";
import path from "path";

installGlobals();

export default defineConfig({
  plugins: [
    remix({ presets: [vercelPreset()] }),
    monicon({
      icons: [
        "simple-icons:github",
        "simple-icons:instagram",
        "lucide:globe",
        "lucide:house",
        "lucide:pickaxe",
        "lucide:sparkles",
        "lucide:arrow-right",
      ],
      typesFileName: "types",
      generateTypes: true,
      outputFileName: "web",
    }),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./app"),
    },
  },
});

import { defineConfig } from "vite";
import fs from "fs";

export default defineConfig({
    server: {
        https: {
            key: fs.readFileSync("./cert.key"),
            cert: fs.readFileSync("./cert.crt"),
        },
    },
});

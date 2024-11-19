import { defineConfig } from "vite";
import webExtension from "vite-plugin-web-extension";
import {
    copyLicenceFileToDestFolder,
    resolvePath,
    destFolder,
    createWebExtensionZipFile,
    cleanupDestFolder,
} from "./src/build-utils";

const targetBrowser = process.env.TARGET || "chrome";
const isBuild = process.env.NODE_ENV === "production";
const isPublish = process.env.PUBLISH === "1";

export default defineConfig({
    root: "src",
    build: {
        outDir: destFolder,
        emptyOutDir: true,
    },
    test: {
        dir: resolvePath("test"),
    },
    publicDir: "assets",
    plugins: [
        webExtension({
            browser: targetBrowser,
            disableAutoLaunch: true,
            onBundleReady: async () => {
                // dev, build and publish post-actions
                await copyLicenceFileToDestFolder();

                if (!isBuild) return;

                // build and publish post-actions
                await createWebExtensionZipFile(targetBrowser);

                if (!isPublish) return;

                // publish post-actions
                await cleanupDestFolder();
            },
        }),
    ],
});

// SPDX-FileCopyrightText: 2025 msdn-delocalizer contributors <https://github.com/ForNeVeR/msdn-delocalizer>
//
// SPDX-License-Identifier: MIT

import { defineConfig } from "wxt";
import copy from 'rollup-plugin-copy';

export default defineConfig({
    modules: ["@wxt-dev/auto-icons"],
    srcDir: "src",
    outDir: "build",
    imports: false,
    manifest: {
        name: "msdn-delocalizer",
        version: "1.3.0",
        description:
            "Browser extension to force de-localization of Microsoft documentation pages",
        permissions: ["tabs"],
        host_permissions: [
            "https://docs.microsoft.com/*",
            "https://msdn.microsoft.com/*",
            "https://learn.microsoft.com/*",
            "https://azure.microsoft.com/*",
            "https://support.microsoft.com/*",
        ],
        background: {
            service_worker: "background.ts",
        },
    },
    autoIcons: {
        grayscaleOnDevelopment: false,
    },
    vite: () => ({
        plugins: [
            copy({
                targets: [{src: "LICENSE.txt", dest: "src/public" }],
                hook: "buildStart",
            }),
        ],
    }),
});

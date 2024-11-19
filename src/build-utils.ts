import { normalizePath } from "vite";
import * as path from "path";
import * as fs from "fs";
import { zip } from "zip-a-folder";

// normalize path for windows compatibility
export const resolvePath = (...args: string[]) =>
    normalizePath(path.resolve(...args));

// normalize path for windows compatibility
export const joinPath = (...args: string[]) =>
    normalizePath(path.join(...args));

export const destFolder = resolvePath("build", "dest");
const webExtFolder = resolvePath("build", "web-ext");

export const copyLicenceFileToDestFolder = async () => {
    const destFolder = resolvePath("build", "dest");

    await fs.promises.copyFile(
        resolvePath("LICENSE.md"),
        joinPath(destFolder, "LICENSE.md")
    );
};

export const createWebExtensionZipFile = async (targetBrowserName: string) => {
    fs.access(webExtFolder, async (error) => {
        if (!error) return;

        await fs.promises.mkdir(webExtFolder);
    });

    const webExtFilename = `msdn-delocalizer-${targetBrowserName}.zip`;
    const webExtPath = joinPath(webExtFolder, webExtFilename);

    await zip(destFolder, webExtPath);
};

export const cleanupDestFolder = async () => {
    await fs.promises.rm(destFolder, {
        recursive: true,
        force: true,
    });
}
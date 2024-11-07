import { PluginOption, Plugin } from "vite";
import webExtension from "vite-plugin-web-extension";
import type { PluginOptions } from "vite-plugin-web-extension";

type WebExtensionOptions = {
    onParentBuildEnd?: () => Promise<void>;
} & PluginOptions;

const isPlugin = (plugin: PluginOption): plugin is Plugin => {
    return !!plugin && typeof plugin === "object" && "name" in plugin;
};

const overridenWebExtensionPlugin = (
    options: WebExtensionOptions
): PluginOption => {
    const webExtensionPlugin = webExtension(options);

    if (!isPlugin(webExtensionPlugin)) {
        return webExtensionPlugin;
    }

    return {
        ...webExtensionPlugin,
        closeBundle: options.onParentBuildEnd,
    };
};

export { overridenWebExtensionPlugin as webExtension };

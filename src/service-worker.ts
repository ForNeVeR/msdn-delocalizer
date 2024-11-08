import { delocalizeUrl } from "./url-utils";

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
    if (changeInfo.url == null) return;

    const tabUrl = new URL(changeInfo.url);
    const replacementUrl = delocalizeUrl(tabUrl);
    if (!replacementUrl || replacementUrl.toString() == tabUrl.toString())
        return;

    chrome.tabs.update(tabId, {
        url: replacementUrl.toString(),
    });
});

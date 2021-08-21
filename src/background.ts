///<reference path="../node_modules/@types/chrome/index.d.ts"/>

import UrlUtils = require("./url-utils");

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
	if (changeInfo.url == null) return;
	const tabUrl = new URL(changeInfo.url);
	const replacementUrl = UrlUtils.delocalizeUrl(tabUrl);
	if (replacementUrl == null || replacementUrl.toString() == tabUrl.toString()) return;
	chrome.tabs.update(tabId, {
		url: replacementUrl.toString()
	});
});

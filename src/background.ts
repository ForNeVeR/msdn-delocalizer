/// <reference path="../typings/tsd.d.ts"/>

import UrlUtils = require("./url-utils");

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
	if (changeInfo.url == null) return;
	var tabUrl = new URL(changeInfo.url);
	var replacementUrl = UrlUtils.delocalizeUrl(tabUrl);
	if (replacementUrl == null) return;
	chrome.tabs.update(tabId, {
		url: replacementUrl.toString()
	});
});

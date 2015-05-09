/// <reference path="../typings/tsd.d.ts"/>
import UrlUtils = require('url-utils');

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	if (changeInfo.status === 'loading') {
		var query = UrlUtils.githubParamsFromUrl(changeInfo.url);
		if (query == null) {
			return null;
		}
		
		// TODO: Save parameters to storage.
		console.log(query);
	}
});

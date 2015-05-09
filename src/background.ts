/// <reference path="../typings/tsd.d.ts"/>
import urlUtils = require('url-utils');

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	if (changeInfo.status === 'loading') {
		var query = urlUtils.githubParamsFromUrl(changeInfo.url);
		if (query == null) {
			return null;
		}
		
		// TODO: Save parameters to storage.
		console.log(query);
	}
});

/// <reference path="../typings/tsd.d.ts"/>
/// <reference path="data.d.ts"/>

import Storage = require('./storage');
import UrlUtils = require('./url-utils');

function loadUrl(query: GitHubParams): Promise<string> {
	var key = Storage.key(query);
	return Storage.getParams(key).then((params) => {
		if (params == null) {
			return null;
		}	
		
		var url = 'https://github.com/' + params.user + '/' + params.project + '/issues' + params.params;
		return url;
	});
}

function saveQuery(query: GitHubParams): void {
	var key = Storage.key(query);
	Storage.setParams(key, query);
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	var query = UrlUtils.githubParamsFromUrl(changeInfo.url);
	if (query === null) {
		return;
	}
	
	if (query.params === '') {
		loadUrl(query).then((url) => {
			if (url != null) {
				chrome.tabs.update(tabId, {
					url: url
				});
			}
		});
	} else {
		saveQuery(query);
	}
});

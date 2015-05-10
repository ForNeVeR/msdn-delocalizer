/// <reference path="../typings/tsd.d.ts"/>
import UrlUtils = require('./url-utils');

var cache: { [key: string]: UrlUtils.GitHubParams } = {};

function getKey(query: UrlUtils.GitHubParams): string {
	return query.user + '/' + query.project;
}

function loadUrl(query: UrlUtils.GitHubParams): string {
	var key = getKey(query);
	var entry = cache[key];
	if (entry === undefined) {
		return null;
	}
	
	var url = 'https://github.com/' + entry.user + '/' + entry.project + '/issues' + entry.params;
	return url;
}

function saveQuery(query: UrlUtils.GitHubParams): void {
	var key = getKey(query);
	cache[key] = query;
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	var query = UrlUtils.githubParamsFromUrl(changeInfo.url);
	if (query === null) {
		return;
	}
	
	if (query.params === '') {
		var url = loadUrl(query);
		if (url != null) {
			console.log('Resetting to', url);
			chrome.tabs.update(tabId, {
				url: url
			});
		}
	} else {
		saveQuery(query);
	}
});

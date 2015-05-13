/// <reference path="../typings/tsd.d.ts"/>
/// <reference path="data.d.ts"/>

export function key(params: GitHubParams): string {
	return params.user + '/' + params.project;
}

export function getParams(key: string): Promise<GitHubParams> {
	return new Promise((resolve, reject) => {
		chrome.storage.sync.get(key, (item) => {
			resolve(item[key]);
		});
	});
}

export function setParams(key: string, params: GitHubParams): Promise<any> {
	return new Promise((resolve, reject) => {
		var data = {};
		data[key] = params;
		chrome.storage.sync.set(data, resolve);
	});;
}

/// <reference path="data.d.ts"/>

var issueRegex = /^https:\/\/github.com\/.*?\/.*?\/issues\/(\d+|new)$/;
var filterRegex = /^https:\/\/github.com\/(.*?)\/(.*?)\/issues(.*)$/;

export function githubParamsFromUrl(url: string): GitHubParams {
	if (issueRegex.test(url)) {
		return null;
	}
	
	var query = filterRegex.exec(url);
	if (query == null) {
		return null;
	}
	
	var user = query[1];
	var project = query[2];
	var params = query[3];
	
	return {
		user: user,
		project: project,
		params: params
	};
}

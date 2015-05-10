var issueRegex = /^https:\/\/github.com\/.*?\/.*?\/issues\/\d+$/;
var filterRegex = /^https:\/\/github.com\/(.*?)\/(.*?)\/issues(.*)$/;

interface GitHubParams {
	user: string;
	project: string;
	params: string;
}

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
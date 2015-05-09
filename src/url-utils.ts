var regex = /^https:\/\/github.com\/(.*?)\/(.*?)\/issues(.*)$/.compile(); 

interface GitHubParams {
	user: string;
	project: string;
	params: string;
}

export function githubParamsFromUrl(url: string): GitHubParams {
	var query = regex.exec(url);
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
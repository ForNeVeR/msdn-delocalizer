var microsoftDocumentationSites = ['docs.microsoft.com', 'msdn.microsoft.com'];
export function isMicrosoftDocumentationUrl(url: URL): boolean {
	return microsoftDocumentationSites.includes(url.host);
}

var pathNameLanguageRegex = /^\/([a-zA-Z]{2}-[a-zA-Z]{2})\//;
var englishPathName = '/en-us/';
export function delocalizeUrl(url: URL): URL {
	if (!isMicrosoftDocumentationUrl(url)) return null;
	var pathName = url.pathname;
	var newPathName = pathName.replace(pathNameLanguageRegex, englishPathName);
	var result = new URL(url.toString());
	result.pathname = newPathName;
	return result;
}

// SPDX-FileCopyrightText: 2025 msdn-delocalizer contributors <https://github.com/ForNeVeR/msdn-delocalizer>
//
// SPDX-License-Identifier: MIT

const microsoftDocumentationSites = [
    "docs.microsoft.com",
    "msdn.microsoft.com",
    "learn.microsoft.com",
    "azure.microsoft.com",
    "support.microsoft.com",
];

export function isMicrosoftDocumentationUrl(url: URL): boolean {
    return microsoftDocumentationSites.includes(url.host);
}

const pathNameLanguageRegex = /^\/([a-zA-Z]{2}-[a-zA-Z]{2})\//;
const englishPathName = "/en-us/";

export function delocalizeUrl(url: URL): URL | null {
    if (!isMicrosoftDocumentationUrl(url)) return null;

    const pathName = url.pathname;
    const newPathName = pathName.replace(
        pathNameLanguageRegex,
        englishPathName
    );

    const result = new URL(url.toString());
    result.pathname = newPathName;

    return result;
}

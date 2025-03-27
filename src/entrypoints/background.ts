// SPDX-FileCopyrightText: 2025 msdn-delocalizer contributors <https://github.com/ForNeVeR/msdn-delocalizer>
//
// SPDX-License-Identifier: MIT

import { delocalizeUrl } from "@/utils/url-utils";
import { browser } from "wxt/browser";
import { defineBackground } from "wxt/sandbox";

export default defineBackground(() => {
    browser.tabs.onUpdated.addListener((tabId, changeInfo) => {
        if (changeInfo.url == null) return;

        const tabUrl = new URL(changeInfo.url);
        const replacementUrl = delocalizeUrl(tabUrl);
        if (!replacementUrl || replacementUrl.toString() == tabUrl.toString())
            return;

        browser.tabs.update(tabId, {
            url: replacementUrl.toString(),
        });
    });
});

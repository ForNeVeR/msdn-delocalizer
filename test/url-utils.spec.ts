// SPDX-FileCopyrightText: 2025 msdn-delocalizer contributors <https://github.com/ForNeVeR/msdn-delocalizer>
//
// SPDX-License-Identifier: MIT

import { describe, it, expect } from "vitest";
import {
    delocalizeUrl,
    isMicrosoftDocumentationUrl,
} from "../src/utils/url-utils";

describe("UrlUtils", () => {
    describe("isMicrosoftDocumentationUrl", () => {
        it("should return true for msdn.microsoft.com, docs.microsoft.com, learn.microsoft.com, azure.microsoft.com, and support.microsoft.com", () => {
            expect(
                isMicrosoftDocumentationUrl(
                    new URL("https://learn.microsoft.com/abcd")
                )
            ).toBe(true);
            expect(
                isMicrosoftDocumentationUrl(
                    new URL("https://docs.microsoft.com/abcd")
                )
            ).toBe(true);
            expect(
                isMicrosoftDocumentationUrl(
                    new URL("https://msdn.microsoft.com/abcd")
                )
            ).toBe(true);
            expect(
                isMicrosoftDocumentationUrl(
                    new URL("https://azure.microsoft.com/abcd")
                )
            ).toBe(true);
            expect(
                isMicrosoftDocumentationUrl(
                    new URL("https://support.microsoft.com/abcd")
                )
            ).toBe(true);
        });

        it("should return false for other sites", () => {
            expect(
                isMicrosoftDocumentationUrl(
                    new URL("https://example.microsoft.com/")
                )
            ).toBe(false);
        });
    });

    describe("delocalizeUrl", () => {
        it("should return null for non-Microsoft documentation URL", () => {
            expect(delocalizeUrl(new URL("http://example.com"))).toBeNull();
        });

        it("should return the same URL for non-localized input", () => {
            var input = new URL("http://msdn.microsoft.com/no-localization");
            expect(delocalizeUrl(input)?.toString(), input.toString());
        });

        it("should return the English URL for localized input", () => {
            var input = new URL(
                "https://msdn.microsoft.com/ru-ru/library/t0zfk0w1.aspx"
            );
            expect(
                delocalizeUrl(input)?.toString(),
                "https://msdn.microsoft.com/en-us/library/t0zfk0w1.aspx"
            );
        });
    });
});

/// <reference path="../node_modules/@types/mocha/index.d.ts"/>

import assert = require('assert');
import UrlUtils = require('../src/url-utils');

describe('UrlUtils', () => {
	describe('isMicrosoftDocumentationUrl', () => {
		it('should return true for docs.microsoft.com and msdn.microsoft.com', () => {
			assert.equal(UrlUtils.isMicrosoftDocumentationUrl(new URL('https://docs.microsoft.com/abcd')), true);
			assert.equal(UrlUtils.isMicrosoftDocumentationUrl(new URL('https://msdn.microsoft.com/abcd')), true);
		});

		it('should return false for other sites', () => {
			assert.equal(UrlUtils.isMicrosoftDocumentationUrl(new URL('https://example.microsoft.com/')), false);
		});
	});

	describe('delocalizeUrl', () => {
		it('should return null for non-Microsoft documentation URL', () => {
			assert.equal(UrlUtils.delocalizeUrl(new URL('http://example.com')), null);
		});

		it('should return the same URL for non-localized input', () => {
			var input = new URL('http://msdn.microsoft.com/no-localization');
			assert.equal(UrlUtils.delocalizeUrl(input)?.toString(), input.toString());
		});

		it('should return the English URL for localized input', () => {
			var input = new URL('https://msdn.microsoft.com/ru-ru/library/t0zfk0w1.aspx');
			assert.equal(
				UrlUtils.delocalizeUrl(input)?.toString(),
				'https://msdn.microsoft.com/en-us/library/t0zfk0w1.aspx');
		});
	});
});

/// <reference path="../typings/tsd.d.ts"/>
import assert = require('assert');
import UrlUtils = require('../src/url-utils');

describe('UrlUtils', () => {
	describe('githubParamsFromUrl', () => {
		it('should return empty parameters from issues URL', () => {
			var query = UrlUtils.githubParamsFromUrl('https://github.com/ForNeVeR/memhub/issues');
			assert.deepEqual(query, {
				user: 'ForNeVeR',
				project: 'memhub',
				params: '' 
			});
		});
		
		it('should return null for improper URL', () => {
			var query = UrlUtils.githubParamsFromUrl('https://github.com/help');
			assert.deepEqual(query, null);
		});
		
		it('should return params for URL with parameters', () => {
			var query = UrlUtils.githubParamsFromUrl('https://github.com/ForNeVeR/memhub/issues?q=xxx');
			assert.deepEqual(query, {
				user: 'ForNeVeR',
				project: 'memhub',
				params: '?q=xxx' 
			});
		});
	});
});

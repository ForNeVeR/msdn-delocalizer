/// <reference path="../typings/tsd.d.ts"/>

import assert = require('assert');
import Storage = require('../src/storage');
import UrlUtils = require('../src/url-utils');

describe('Storage', () => {
	describe('key', () => {
		it('should describe user and project', () => {
			var params = UrlUtils.githubParamsFromUrl('https://github.com/ForNeVeR/memhub/issues');
			var key = Storage.key(params);
			assert.equal('ForNeVeR/memhub', key);
		});
	});
});

//
// index.js
// @trenskow/identify
//
// Created by Kristian Trenskow on 2026/02/17
// For license see LICENSE.
//

import { expect } from 'chai';

import identify from '../index.js';

describe('@trenskow/identify', () => {

	it('should return an ascii encoded identifier', () => {
		expect(identify('Hello World!')).to.equal('hello-world-');
	});

});

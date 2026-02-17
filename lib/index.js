//
// index.js
// @trenskow/identify
//
// Created by Kristian Trenskow on 2026/02/17
// For license see LICENSE.
//

export default (identifier) => {

	return identifier
		.split('')
		.map((chr) => {
			if (chr >= 'a' && chr <= 'z') return chr;
			if (chr >= 'A' && chr <= 'Z') return chr.toLowerCase();
			if (chr >= '0' && chr <= '9') return chr;
			return '-';
		})
		.join('');

};

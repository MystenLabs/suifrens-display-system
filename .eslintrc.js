// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0
module.exports = {
	env: {
		node: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'prettier', 'plugin:@typescript-eslint/recommended'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['header', '@typescript-eslint', 'eslint-plugin-header'],
	rules: {
		'header/header': [
			2,
			'line',
			[' Copyright (c) Mysten Labs, Inc.', ' SPDX-License-Identifier: Apache-2.0'],
		],
		// todo: fix the any's and @ts-ignore's
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/ban-ts-comment': 'off',
	},
};

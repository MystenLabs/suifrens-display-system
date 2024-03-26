// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

module.exports = {
	printWidth: 100,
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'all',
	useTabs: true,
	overrides: [
		{
			files: 'preview/**/*',
			options: {
				plugins: ['prettier-plugin-tailwindcss'],
				tailwindConfig: './preview/tailwind.config.js',
			},
		},
	],
};

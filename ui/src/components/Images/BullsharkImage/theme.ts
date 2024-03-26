// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { assertUnreachable } from '../../../utils/assertUnreachable';
import { type BullsharkSkin } from '../../../types/bullsharkTypes';

export function getThemeFromSkin(skin: BullsharkSkin, mainColor: string, secondaryColor: string) {
	switch (skin) {
		case 'basic':
		case 'cheetah':
		case 'fox':
		case 'stripes':
		case 'dalmation':
		case 'lizard':
		case 'snake':
			return {
				head: mainColor,
				body: mainColor,
				legs: mainColor,
				hands: mainColor,
				fin: mainColor,
				tail: mainColor,
				patterns: secondaryColor,
			};
		case 'panda':
			return {
				head: secondaryColor,
				body: secondaryColor,
				legs: mainColor,
				hands: mainColor,
				fin: mainColor,
				tail: mainColor,
				patterns: mainColor,
			};
		default:
			assertUnreachable(skin);
	}
}

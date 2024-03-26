// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { colors } from '../constants/colors.js';

export type CapySkin =
	| 'basic'
	| 'cheetah'
	| 'fox'
	| 'panda'
	| 'stripes'
	| 'snake'
	| 'lizard'
	| 'dalmation';

export type CapyEarShape = 'default' | 'quiet' | 'wild' | 'mischievous';

export type CapyExpression =
	| 'angry'
	| 'annoyed'
	| 'bigSmile'
	| 'blush'
	| 'cool'
	| 'crying'
	| 'happy'
	| 'heartEyes'
	| 'kiss'
	| 'laughing'
	| 'mischievous'
	| 'relaxed'
	| 'sad'
	| 'shocked'
	| 'sleepy'
	| 'tongueOut'
	| 'wink'
	| 'dizzyFace'
	| 'goofy'
	| 'grimace';

export type CapyAttributes = {
	mainColor: keyof typeof colors;
	secondaryColor: keyof typeof colors;
	earShape: CapyEarShape;
	skin: CapySkin;
	expression: CapyExpression;
};

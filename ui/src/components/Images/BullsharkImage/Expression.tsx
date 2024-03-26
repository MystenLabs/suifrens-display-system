// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { ComponentType } from 'react';
import { AngryExpression } from './Expressions/AngryExpression';
import { AnnoyedExpression } from './Expressions/AnnoyedExpression';
import { BigSmileExpression } from './Expressions/BigSmileExpression';
import { BlushExpression } from './Expressions/BlushExpression';
import { CoolExpression } from './Expressions/CoolExpression';
import { CryingExpression } from './Expressions/CryingExpression';
import { DizzyExpression } from './Expressions/DizzyExpression';
import { GoofyExpression } from './Expressions/GoofyExpression';
import { GrimaceExpression } from './Expressions/GrimaceExpression';
import { HappyExpression } from './Expressions/HappyExpression';
import { HeartEyesExpression } from './Expressions/HeartEyesExpression';
import { KissExpression } from './Expressions/KissExpression';
import { LaughingExpression } from './Expressions/LaughingExpression';
import { MischievousExpression } from './Expressions/MischievousExpression';
import { RelaxedExpression } from './Expressions/RelaxedExpression';
import { SadExpression } from './Expressions/SadExpression';
import { ShockedExpression } from './Expressions/ShockedExpression';
import { SleepyExpression } from './Expressions/SleepyExpression';
import { TongueOutExpression } from './Expressions/TongueOutExpression';
import { WinkExpression } from './Expressions/WinkExpression';
import { type BullsharkExpression } from '../../../types/bullsharkTypes';

type ExpressionProps = {
	expression: BullsharkExpression;
};

const expressionComponents: Record<BullsharkExpression, ComponentType> = {
	angry: AngryExpression,
	annoyed: AnnoyedExpression,
	bigSmile: BigSmileExpression,
	blush: BlushExpression,
	cool: CoolExpression,
	crying: CryingExpression,
	happy: HappyExpression,
	heartEyes: HeartEyesExpression,
	kiss: KissExpression,
	laughing: LaughingExpression,
	mischievous: MischievousExpression,
	relaxed: RelaxedExpression,
	sad: SadExpression,
	shocked: ShockedExpression,
	sleepy: SleepyExpression,
	tongueOut: TongueOutExpression,
	wink: WinkExpression,
	dizzyFace: DizzyExpression,
	grimace: GrimaceExpression,
	goofy: GoofyExpression,
};

export function Expression({ expression }: ExpressionProps) {
	const ExpressionComponent = expressionComponents[expression];
	return <ExpressionComponent />;
}

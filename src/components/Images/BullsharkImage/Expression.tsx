// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { ComponentType } from "react";
import { AngryExpression } from "./Expressions/AngryExpression.js";
import { AnnoyedExpression } from "./Expressions/AnnoyedExpression.js";
import { BigSmileExpression } from "./Expressions/BigSmileExpression.js";
import { BlushExpression } from "./Expressions/BlushExpression.js";
import { CoolExpression } from "./Expressions/CoolExpression.js";
import { CryingExpression } from "./Expressions/CryingExpression.js";
import { DizzyExpression } from "./Expressions/DizzyExpression.js";
import { GoofyExpression } from "./Expressions/GoofyExpression.js";
import { GrimaceExpression } from "./Expressions/GrimaceExpression.js";
import { HappyExpression } from "./Expressions/HappyExpression.js";
import { HeartEyesExpression } from "./Expressions/HeartEyesExpression.js";
import { KissExpression } from "./Expressions/KissExpression.js";
import { LaughingExpression } from "./Expressions/LaughingExpression.js";
import { MischievousExpression } from "./Expressions/MischievousExpression.js";
import { RelaxedExpression } from "./Expressions/RelaxedExpression.js";
import { SadExpression } from "./Expressions/SadExpression.js";
import { ShockedExpression } from "./Expressions/ShockedExpression.js";
import { SleepyExpression } from "./Expressions/SleepyExpression.js";
import { TongueOutExpression } from "./Expressions/TongueOutExpression.js";
import { WinkExpression } from "./Expressions/WinkExpression.js";
import { type BullsharkExpression } from "../../../types/bullsharkTypes.js";

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

import { ComponentType } from "react";
import { AngryExpression } from "./expressions/AngryExpression.js";
import { AnnoyedExpression } from "./expressions/AnnoyedExpression.js";
import { BigSmileExpression } from "./expressions/BigSmileExpression.js";
import { BlushExpression } from "./expressions/BlushExpression.js";
import { CoolExpression } from "./expressions/CoolExpression.js";
import { CryingExpression } from "./expressions/CryingExpression.js";
import { DizzyExpression } from "./expressions/DizzyExpression.js";
import { GoofyExpression } from "./expressions/GoofyExpression.js";
import { GrimaceExpression } from "./expressions/GrimaceExpression.js";
import { HappyExpression } from "./expressions/HappyExpression.js";
import { HeartEyesExpression } from "./expressions/HeartEyesExpression.js";
import { KissExpression } from "./expressions/KissExpression.js";
import { LaughingExpression } from "./expressions/LaughingExpression.js";
import { MischievousExpression } from "./expressions/MischievousExpression.js";
import { RelaxedExpression } from "./expressions/RelaxedExpression.js";
import { SadExpression } from "./expressions/SadExpression.js";
import { ShockedExpression } from "./expressions/ShockedExpression.js";
import { SleepyExpression } from "./expressions/SleepyExpression.js";
import { TongueOutExpression } from "./expressions/TongueOutExpression.js";
import { WinkExpression } from "./expressions/WinkExpression.js";
import { type BullsharkExpression } from "./types.js";

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

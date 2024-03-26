// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { colors } from "../constants/colors.js";

export type BullsharkSkin =
  | "basic"
  | "cheetah"
  | "fox"
  | "panda"
  | "stripes"
  | "snake"
  | "lizard"
  | "dalmation";

export type BullsharkExpression =
  | "angry"
  | "annoyed"
  | "bigSmile"
  | "blush"
  | "cool"
  | "crying"
  | "happy"
  | "heartEyes"
  | "kiss"
  | "laughing"
  | "mischievous"
  | "relaxed"
  | "sad"
  | "shocked"
  | "sleepy"
  | "tongueOut"
  | "wink"
  | "dizzyFace"
  | "goofy"
  | "grimace";

export type BullsharkFinStyle = "classic";

export type BullsharkAttributes = {
  mainColor: keyof typeof colors;
  secondaryColor: keyof typeof colors;
  skin: BullsharkSkin;
  expression: BullsharkExpression;
  finStyle: BullsharkFinStyle;
};

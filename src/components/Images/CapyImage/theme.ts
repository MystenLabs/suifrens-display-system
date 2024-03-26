// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { assertUnreachable } from "../../../utils/assertUnreachable.js";
import { type CapySkin } from "../../../types/capyTypes.js";

export function getThemeFromSkin(
  skin: CapySkin,
  mainColor: string,
  secondaryColor: string,
  incognito: boolean
) {
  switch (skin) {
    case "basic":
    case "cheetah":
    case "fox":
    case "stripes":
    case "dalmation":
    case "lizard":
    case "snake":
      return {
        head: mainColor,
        body: mainColor,
        legs: mainColor,
        arms: mainColor,
        outerEars: mainColor,
        innerEars: secondaryColor,
        patterns: secondaryColor,
        nose: incognito ? "#ffffff" : "#4e4943",
        appendages: incognito ? "#ffffff" : "#4e4943",
      };
    case "panda":
      return {
        head: secondaryColor,
        body: secondaryColor,
        legs: mainColor,
        arms: mainColor,
        outerEars: mainColor,
        innerEars: secondaryColor,
        patterns: mainColor,
        nose: incognito ? "#ffffff" : "#4e4943",
        appendages: incognito ? "#ffffff" : "#4e4943",
      };
    default:
      assertUnreachable(skin);
  }
}

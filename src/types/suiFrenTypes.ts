// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { BullsharkAttributes } from "./bullsharkTypes.js";
import { CapyAttributes } from "./capyTypes.js";

export enum SuiFrenType {
  BULLSHARK = "BULLSHARK",
  CAPY = "CAPY",
}

export type SuiFrenAttributes = CapyAttributes | BullsharkAttributes;

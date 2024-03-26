// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { AccessoryMetadata } from "../types/accessoryTypes.js";
import { accessories } from "../constants/accessories.js";

export function getAccessoryMetadata(accessoryName: string) {
  return accessories.find((info) => info.name === accessoryName)!;
}

export function isAccessoryV2(accessoryName: string) {
  return getAccessoryMetadata(accessoryName).version === "v2";
}

export function getAccessoriesByType(accessories: AccessoryMetadata[]) {
  return accessories.reduce<Record<string, AccessoryMetadata>>(
    (accumulator, accessory) => {
      accumulator[accessory.type] = accessory;
      return accumulator;
    },
    {}
  );
}

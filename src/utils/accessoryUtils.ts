import { AccessoryMetadata } from "../types/accessoryTypes.js";

export function getAccessoriesByType(accessories: AccessoryMetadata[]) {
  return accessories.reduce<Record<string, AccessoryMetadata>>(
    (accumulator, accessory) => {
      accumulator[accessory.type] = accessory;
      return accumulator;
    },
    {}
  );
}

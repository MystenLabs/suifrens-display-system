import { BullsharkAttributes } from "./bullsharkTypes.js";
import { CapyAttributes } from "./capyTypes.js";

export enum SuiFrenType {
  BULLSHARK = "BULLSHARK",
  CAPY = "CAPY",
}

export type SuiFrenAttributes = CapyAttributes | BullsharkAttributes;

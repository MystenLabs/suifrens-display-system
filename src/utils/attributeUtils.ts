import { SuiFrenAttributes, SuiFrenType } from "../types/suiFrenTypes.js";
import { BullsharkAttributes } from "../types/bullsharkTypes.js";
import { CapyAttributes } from "../types/capyTypes.js";
import { earGeneToEarShape } from "../constants/attributes.js";

export function parseSuiFrenAttributes(
  suiFrenType: SuiFrenType,
  [skin, mainColor, secondaryColor, expression, ...otherAttributes]: string[]
): SuiFrenAttributes {
  if (suiFrenType === SuiFrenType.CAPY) {
    return {
      skin,
      mainColor,
      secondaryColor,
      expression,
      earShape: earGeneToEarShape[otherAttributes[0]],
    } as CapyAttributes;
  }
  return {
    skin,
    mainColor,
    secondaryColor,
    expression,
    finStyle: otherAttributes[0],
  } as BullsharkAttributes;
}

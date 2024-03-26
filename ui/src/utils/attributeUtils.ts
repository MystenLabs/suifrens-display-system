import { type MoveStruct } from '@mysten/sui.js/client';

import { SuiFrenAttributes, SuiFrenType } from '../types/suiFrenTypes';
import { BullsharkAttributes } from '../types/bullsharkTypes';
import { CapyAttributes } from '../types/capyTypes';
import { earGeneToEarShape } from '../constants/attributes';

export function parseSuiFrenAttributes(
	suiFrenType: SuiFrenType,
	[skin, mainColor, secondaryColor, expression, ...otherAttributes]: string[],
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

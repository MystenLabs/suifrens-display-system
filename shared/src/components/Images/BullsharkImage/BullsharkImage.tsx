// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { Accessory } from '../Accessories';
import { AccessoryMetadata } from '../../../types/accessoryTypes';
import { Body } from './Body/Body';
import { BodyPattern } from './Body/BodyPattern';
import { Expression } from './Expression';
import { Fin } from './Fin/Fin';
import { LeftArm } from './Arms/Left/LeftArm';
import { RightArm } from './Arms/Right/RightArm';
import { Head } from './Head/Head';
import { HeadPattern } from './Head/HeadPattern';
import { LeftLeg } from './Legs/Left/LeftLeg';
import { RightLeg } from './Legs/Right/RightLeg';
import { Tail } from './Tail/Tail';
import { getThemeFromSkin } from './theme';
import { BullsharkAttributes } from '../../../types/bullsharkTypes';
import { FinPattern } from './Fin/FinPattern';
import { TailPattern } from './Tail/TailPattern';
import { LeftLegPattern } from './Legs/Left/LeftLegPattern';
import { RightLegPattern } from './Legs/Right/RightLegPattern';
import { LeftArmPattern } from './Arms/Left/LeftArmPattern';
import { RightArmPattern } from './Arms/Right/RightArmPattern';

type BullsharkImageProps = {
	attributes: BullsharkAttributes;
	accessoriesByType?: Record<string, AccessoryMetadata>;
	incognito?: boolean;
};

export function BullsharkImage({
	attributes,
	accessoriesByType,
	incognito = false,
}: BullsharkImageProps) {
	const { mainColor, secondaryColor, skin, expression } = attributes;
	const colorTheme = getThemeFromSkin(skin, `#${mainColor}`, `#${secondaryColor}`);
	const headAccessory = accessoriesByType?.head;
	const showFin = !headAccessory || headAccessory.renderOptions.showFin;

	return (
		<>
			{accessoriesByType?.back?.category === 'wings' && (
				<Accessory accessory={accessoriesByType.back.name} lor="left" />
			)}
			<RightArm fill={colorTheme.hands} />
			{!incognito && <RightArmPattern skin={skin} fill={colorTheme.patterns} />}
			{accessoriesByType?.torso && (
				<Accessory accessory={accessoriesByType.torso.name} lor="left" />
			)}
			{accessoriesByType?.body && <Accessory accessory={accessoriesByType.body.name} lor="left" />}
			<Tail fill={colorTheme.tail} />=
			{!incognito && <TailPattern skin={skin} fill={colorTheme.patterns} />}
			<RightLeg fill={colorTheme.legs} />
			{!incognito && <RightLegPattern skin={skin} fill={colorTheme.patterns} />}
			{showFin && (
				<>
					<Fin fill={colorTheme.fin} />
					{!incognito && <FinPattern skin={skin} fill={colorTheme.patterns} />}
				</>
			)}
			{accessoriesByType?.back?.category === 'wings' && (
				<Accessory accessory={accessoriesByType.back.name} lor="right" />
			)}
			<Body fill={colorTheme.body} />
			{!incognito && <BodyPattern skin={skin} fill={colorTheme.patterns} />}
			{accessoriesByType?.legs && <Accessory accessory={accessoriesByType?.legs.name} body />}
			{accessoriesByType?.torso && <Accessory accessory={accessoriesByType.torso.name} body />}
			<LeftLeg fill={colorTheme.legs} />
			{!incognito && <LeftLegPattern skin={skin} fill={colorTheme.patterns} />}
			{accessoriesByType?.back && accessoriesByType?.back?.category !== 'wings' && (
				<Accessory accessory={accessoriesByType?.back.name} />
			)}
			{accessoriesByType?.feet && <Accessory accessory={accessoriesByType.feet.name} />}
			{accessoriesByType?.legs && <Accessory accessory={accessoriesByType.legs.name} />}
			{accessoriesByType?.body && <Accessory accessory={accessoriesByType.body.name} body />}
			{accessoriesByType?.object && <Accessory accessory={accessoriesByType.object.name} />}
			<LeftArm fill={colorTheme.hands} />
			{!incognito && <LeftArmPattern skin={skin} fill={colorTheme.patterns} />}
			{accessoriesByType?.torso && (
				<Accessory accessory={accessoriesByType.torso.name} lor="right" />
			)}
			{accessoriesByType?.body && <Accessory accessory={accessoriesByType.body.name} lor="right" />}
			<Head fill={colorTheme.head} />
			{!incognito && <HeadPattern skin={skin} fill={colorTheme.patterns} />}
			{!incognito && <Expression expression={expression} />}
			{headAccessory && <Accessory accessory={headAccessory.name} />}
			{accessoriesByType?.eyes && <Accessory accessory={accessoriesByType.eyes.name} />}
		</>
	);
}

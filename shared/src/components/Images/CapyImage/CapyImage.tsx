// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { Accessory } from '../Accessories';
import { AccessoryMetadata } from '~/types/accessoryTypes';
import { getThemeFromSkin } from './theme';

import { LeftEar } from './Ears/LeftEar';
import { RightEar } from './Ears/RightEar';
import { Expression } from './Expression';
import { CapyAttributes } from '../../../types/capyTypes';
import { BodyPattern } from './Body/BodyPattern';
import { Body } from './Body/Body';
import { LeftArm } from './Arms/Left/LeftArm';
import { RightArm } from './Arms/Right/RightArm';
import { LeftLeg } from './Legs/Left/LeftLeg';
import { RightLeg } from './Legs/Right/RightLeg';
import { Head } from './Head/Head';
import { HeadPattern } from './Head/HeadPattern';
import { Nostrils } from './Nostrils';
import { LeftLegPattern } from './Legs/Left/LeftLegPattern';
import { RightLegPattern } from './Legs/Right/RightLegPattern';
import { LeftArmPattern } from './Arms/Left/LeftArmPattern';
import { RightArmPattern } from './Arms/Right/RightArmPattern';

type CapyImageProps = {
	attributes: CapyAttributes;
	accessoriesByType?: Record<string, AccessoryMetadata>;
	incognito?: boolean;
};

export function CapyImage({ attributes, accessoriesByType, incognito = false }: CapyImageProps) {
	const { mainColor, secondaryColor, skin, earShape, expression } = attributes;
	const colorTheme = getThemeFromSkin(skin, `#${mainColor}`, `#${secondaryColor}`, incognito);
	const headAccessory = accessoriesByType?.head;
	const showEars = !headAccessory || headAccessory.renderOptions.showEars;

	return (
		<>
			{accessoriesByType?.back?.category === 'wings' && (
				<Accessory accessory={accessoriesByType.back.name} lor="left" />
			)}

			<RightArm fill={colorTheme.arms} handProps={{ fill: colorTheme.appendages }} />
			{!incognito && <RightArmPattern skin={skin} fill={colorTheme.patterns} />}
			{accessoriesByType?.back?.category === 'wings' && (
				<Accessory accessory={accessoriesByType.back.name} lor="right" />
			)}
			{accessoriesByType?.torso && (
				<Accessory accessory={accessoriesByType?.torso.name} lor="left" />
			)}
			{accessoriesByType?.body && <Accessory accessory={accessoriesByType?.body.name} lor="left" />}

			<RightLeg fill={colorTheme.legs} footProps={{ fill: colorTheme.appendages }} />
			{!incognito && <RightLegPattern skin={skin} fill={colorTheme.patterns} />}

			<Body fill={colorTheme.body} />
			{!incognito && skin && <BodyPattern skin={skin} fill={colorTheme.patterns} />}
			{accessoriesByType?.back && accessoriesByType?.back?.category !== 'wings' && (
				<Accessory accessory={accessoriesByType?.back.name} />
			)}
			{accessoriesByType?.legs && <Accessory accessory={accessoriesByType?.legs.name} body />}
			{accessoriesByType?.torso && <Accessory accessory={accessoriesByType?.torso.name} body />}

			<LeftLeg fill={colorTheme.legs} footProps={{ fill: colorTheme.appendages }} />
			{!incognito && <LeftLegPattern skin={skin} fill={colorTheme.patterns} />}

			{accessoriesByType?.feet && <Accessory accessory={accessoriesByType?.feet.name} />}
			{accessoriesByType?.legs && <Accessory accessory={accessoriesByType?.legs.name} />}
			{accessoriesByType?.body && <Accessory accessory={accessoriesByType?.body.name} body />}
			{accessoriesByType?.object && <Accessory accessory={accessoriesByType?.object.name} />}

			<LeftArm fill={colorTheme.arms} handProps={{ fill: colorTheme.appendages }} />
			{!incognito && <LeftArmPattern skin={skin} fill={colorTheme.patterns} />}

			{accessoriesByType?.torso && (
				<Accessory accessory={accessoriesByType?.torso.name} lor="right" />
			)}

			{accessoriesByType?.body && (
				<Accessory accessory={accessoriesByType?.body.name} lor="right" />
			)}

			{showEars && (
				<RightEar
					earShape={earShape}
					outerEarProps={{ fill: colorTheme.outerEars }}
					innerEarProps={{ fill: colorTheme.innerEars }}
					fill={colorTheme.outerEars}
				/>
			)}

			<Head fill={colorTheme.head} />
			<HeadPattern skin={skin} fill={colorTheme.patterns} noseProps={{ fill: colorTheme.nose }} />
			{!incognito && <Nostrils />}

			{showEars && (
				<LeftEar
					earShape={earShape}
					outerEarProps={{ fill: colorTheme.outerEars }}
					innerEarProps={{ fill: colorTheme.innerEars }}
					fill={colorTheme.outerEars}
				/>
			)}

			{!incognito && <Expression expression={expression} />}
			{accessoriesByType?.head && <Accessory accessory={accessoriesByType?.head.name} />}
			{accessoriesByType?.eyes && <Accessory accessory={accessoriesByType?.eyes.name} />}
		</>
	);
}

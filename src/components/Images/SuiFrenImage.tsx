// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { ReactNode } from 'react';
import { BullsharkImage } from './BullsharkImage/BullsharkImage.js';
import { SuiFrenAttributes } from '../../types/suiFrenTypes.js';
import { AccessoryMetadata } from '../../types/accessoryTypes.js';
import { assertUnreachable } from '../../utils/assertUnreachable.js';
import { CapyImage } from './CapyImage/CapyImage.js';
import { getAccessoriesByType } from '../../utils/accessoryUtils.js';

type SuiFrenImageProps = {
	attributes: SuiFrenAttributes;
	accessories?: AccessoryMetadata[];
	incognito?: boolean;
	shadow?: boolean;
	logo?: ReactNode;
};

export function SuiFrenImage({
	attributes,
	accessories,
	incognito = false,
	shadow = false,
	logo,
}: SuiFrenImageProps) {
	const accessoriesByType = accessories ? getAccessoriesByType(accessories) : undefined;

	let suiFrenImageContent: ReactNode | undefined;
	if ('finStyle' in attributes) {
		suiFrenImageContent = (
			<BullsharkImage
				accessoriesByType={accessoriesByType}
				attributes={attributes}
				incognito={incognito}
			/>
		);
	} else if ('earShape' in attributes) {
		suiFrenImageContent = (
			<CapyImage
				accessoriesByType={accessoriesByType}
				attributes={attributes}
				incognito={incognito}
			/>
		);
	} else {
		assertUnreachable(attributes);
	}

	return (
		<svg
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			viewBox="0 0 3000 3000"
		>
			{shadow ? <ellipse opacity={0.3} cx="1400.4" cy="2615.2" rx="472.8" ry="130.6" /> : null}
			{suiFrenImageContent}
			{logo}
		</svg>
	);
}

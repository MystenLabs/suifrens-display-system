// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { type SVGProps, type ComponentType } from 'react';

import { type BullsharkSkin } from '../../../../../types/bullsharkTypes';
import { DalmationRightArmPattern } from './Patterns/DalmationRightArmPattern';
import { SnakeRightArmPattern } from './Patterns/SnakeRightArmPattern';

type RightArmPatternProps = {
	skin: BullsharkSkin;
} & SVGProps<SVGGElement>;

const rightArmPatternComponents: Record<BullsharkSkin, ComponentType | null> = {
	basic: null,
	cheetah: null,
	fox: null,
	panda: null,
	stripes: null,
	lizard: null,
	snake: SnakeRightArmPattern,
	dalmation: DalmationRightArmPattern,
};

export function RightArmPattern({ skin, ...svgProps }: RightArmPatternProps) {
	const RightArmPatternContent = rightArmPatternComponents[skin];
	return (
		<g transform="matrix(-2.9166107177734375, 0, 0, 2.9166107177734375, 1880.95,1719.3)">
			<g transform="matrix( 1, 0, 0, 1, 0,0) ">
				{RightArmPatternContent && (
					<g {...svgProps}>
						<RightArmPatternContent />
					</g>
				)}
				<path d="M34.8,161.1C34.8,161.1,34.8,161,34.8,161.1c6.2,0,12.5-3.1,19.2-9.4c5.7-5.3,9.9-10,12.7-14.4c4.4-6.8,7-13.6,7.8-20.2c0-0.1,0-0.1,0-0.2c1.2-13.6,3.7-27.6,7.5-41.5c3.7-13.5,12.1-28.7,25-45.1c1.7-2.2,1.3-5.3-0.8-7c-2.2-1.7-5.3-1.3-7,0.8C85.5,41.6,76.5,57.9,72.4,72.7c-3.9,14.5-6.5,29-7.8,43.1c-0.6,5-2.7,10.4-6.3,15.9c-2.4,3.7-6.1,7.9-11.1,12.5c-4.7,4.4-9,6.7-12.4,6.7c0,0,0,0,0,0c-3.3,0-7.4-2.5-11.9-7.3c-5.3-5.5-9.5-11.2-12.8-16.8c-3.2-6.6-4.4-12.5-3.7-17.6c0-0.1,0-0.1,0-0.2c0.6-5.3,1.2-10.7,1.9-16.1c2.1-16.3,6.1-32.4,11.9-48c6.4-17.1,17.2-30.9,32.3-41.1c2.3-1.5,2.9-4.7,1.3-6.9c-1.5-2.3-4.7-2.9-6.9-1.3C30.1,7.2,18,22.7,10.9,41.7C4.8,58,0.7,74.8-1.5,91.9c-0.7,5.4-1.3,10.8-1.9,16.1c-1.1,7.1,0.5,15,4.7,23.5c0,0.1,0.1,0.2,0.1,0.3c3.6,6.3,8.4,12.7,14.3,18.8C22.3,157.7,28.5,161,34.8,161.1z M5.7,129.4L5.7,129.4L5.7,129.4z" />
			</g>
		</g>
	);
}
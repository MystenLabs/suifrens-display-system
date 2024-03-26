// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { type SVGProps, type ComponentType } from 'react';

import { type BullsharkSkin } from '../../../../types/bullsharkTypes.js';
import { BasicHeadPattern } from './Patterns/BasicHeadPattern.js';
import { CheetahHeadPattern } from './Patterns/CheetahHeadPattern.js';
import { DalmationHeadPattern } from './Patterns/DalmationHeadPattern.js';
import { FoxHeadPattern } from './Patterns/FoxHeadPattern.js';
import { LizardHeadPattern } from './Patterns/LizardHeadPattern.js';
import { PandaHeadPattern } from './Patterns/PandaHeadPattern.js';
import { SnakeHeadPattern } from './Patterns/SnakeHeadPattern.js';
import { StripesHeadPattern } from './Patterns/StripesHeadPattern.js';

type HeadPatternProps = {
	skin: BullsharkSkin;
} & SVGProps<SVGGElement>;

const headPatternComponents: Record<BullsharkSkin, ComponentType> = {
	basic: BasicHeadPattern,
	cheetah: CheetahHeadPattern,
	fox: FoxHeadPattern,
	panda: PandaHeadPattern,
	stripes: StripesHeadPattern,
	snake: SnakeHeadPattern,
	lizard: LizardHeadPattern,
	dalmation: DalmationHeadPattern,
};

export function HeadPattern({ skin, ...svgProps }: HeadPatternProps) {
	const HeadPatternContent = headPatternComponents[skin];
	return (
		<g transform="matrix(2.9166107177734375, 0, 0, 2.9166107177734375, 848.15,585.65)">
			<g transform="matrix(1, 0, 0, 1, 0, 0)">
				<g {...svgProps}>
					<HeadPatternContent />
				</g>
				<path d="M201.8,388c-19,0-36.9-1.7-53.3-5.2c-36.2-7.6-66.6-23.7-90.4-48c-23.7-24.1-41.5-56.9-52.8-97.3c0-0.1,0-0.2-0.1-0.2     c-2.1-9.4-4.2-19-6.2-28.5c-3.4-16.7-4.7-33.4-3.9-49.8c0.4-9.1,1.5-18.2,3.3-27.2C3,107.7,12.1,85.4,25.4,65.8     c13.2-19.7,29.8-35.6,49.3-47.3c0,0,0,0,0,0c8.8-5.3,18.1-9.6,27.6-12.8c0.1,0,0.2-0.1,0.3-0.1c29.5-8.2,60.1-12.1,90.9-11.7     c23.9,0.3,47.4,4,69.8,10.9c8.1,2.5,16.1,5.4,24,8.7c17.2,7.3,33.6,16.4,48.8,27c8.1,5.6,16,11.8,23.5,18.4     c5.5,4.2,10.1,7.4,13.5,9.4c14.6,8.5,29.2,16.1,43.7,22.5c5.2,2.3,10.3,4.4,14.9,6.2c20,5,38.5,13.5,55.2,25.1     c5,3.5,9.6,7.5,13.8,11.9l0,0c0,0,0.1,0.1,0.1,0.1c3.7,3.9,7.1,7.9,9.9,12c0.1,0.2,0.3,0.4,0.4,0.6c6.7,9.5,11.2,19.6,13.3,30     c0,0.1,0,0.2,0.1,0.3c1,4.8,1.5,9.7,1.5,14.7c0,3-0.1,6-0.4,8.9c-1.7,19.2-9.2,38.7-22.1,57.9c0,0,0,0.1-0.1,0.1     c-10.1,14.5-21.8,27.8-34.7,39.8c-14.8,13.8-31.4,25.5-49.3,34.7c-0.1,0-0.1,0.1-0.2,0.1c-6.6,3.1-13.2,6.2-19.6,9.4c0,0,0,0,0,0     c-30.4,14.6-62.6,25.3-95.7,32l-4.1,1.1c0,0-0.1,0-0.1,0c-29.1,6.8-56.5,10.8-81.4,12.1C212.5,387.9,207.1,388,201.8,388z      M15,235c10.9,38.8,27.8,70,50.3,92.9c11.2,11.4,24.1,21,38.2,28.4c14.2,7.5,30,13.1,47.2,16.7c20.1,4.2,42.6,5.7,66.9,4.5     c24.3-1.2,51.1-5.2,79.6-11.8l4.2-1.1c0.1,0,0.2,0,0.3-0.1c32.4-6.5,63.9-17.1,93.5-31.3c6.5-3.2,13.1-6.3,19.7-9.4     c17-8.8,32.8-19.9,47-33.1c12.4-11.5,23.6-24.3,33.3-38.2c12-17.8,18.8-35.6,20.4-53.1c0.2-2.7,0.4-5.4,0.4-8     c0-4.3-0.4-8.6-1.3-12.8c0-0.1,0-0.2,0-0.2c-1.9-9-5.8-17.8-11.7-26.2c-0.1-0.1-0.1-0.2-0.2-0.3c0-0.1-0.1-0.1-0.1-0.2     c-2.6-3.7-5.6-7.3-9-10.9l0,0c0,0-0.1-0.1-0.1-0.1c-3.7-3.9-7.9-7.5-12.3-10.7c-15.7-11-33.2-19-52.1-23.7     c-0.2-0.1-0.4-0.1-0.6-0.2c-4.9-1.9-10.2-4.1-15.7-6.5c-14.7-6.6-29.8-14.3-44.6-23c-3.8-2.3-8.6-5.6-14.6-10.1     c-0.1-0.1-0.2-0.1-0.3-0.2c-7.3-6.4-14.9-12.4-22.8-17.8c-14.6-10.2-30.4-18.9-46.9-26c-7.6-3.2-15.3-6-23.1-8.4     c-21.5-6.6-44.1-10.1-67-10.5c-29.8-0.4-59.3,3.4-87.9,11.3c-8.8,3-17.4,7-25.6,11.9C61.6,38,46.1,52.9,33.6,71.3     c-12.5,18.5-21,39.5-25.4,62.4c-1.6,8.5-2.7,17.2-3.1,25.8c-0.8,15.5,0.5,31.4,3.7,47.3C10.8,216.2,12.9,225.7,15,235z" />
			</g>
		</g>
	);
}

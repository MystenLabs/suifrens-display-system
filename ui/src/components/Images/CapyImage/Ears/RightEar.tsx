// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { assertUnreachable } from '../../../../utils/assertUnreachable';
import { DefaultRightEar, DefaultRightEarProps } from './Right/DefaultRightEar';
import { MischievousRightEar, MischievousRightEarProps } from './Right/MichievousRightEar';
import { QuietRightEar, QuietRightEarProps } from './Right/QuietRightEar';
import { WildRightEar, WildRightEarProps } from './Right/WildRightEar';

type RightEarProps =
	| DefaultRightEarProps
	| WildRightEarProps
	| MischievousRightEarProps
	| QuietRightEarProps;

export function RightEar({ ...props }: RightEarProps) {
	switch (props.earShape) {
		case 'default':
			return <DefaultRightEar earShape={props.earShape} fill={props.fill} />;
		case 'wild':
			return (
				<WildRightEar
					earShape={props.earShape}
					innerEarProps={props.innerEarProps}
					outerEarProps={props.outerEarProps}
				/>
			);
		case 'mischievous':
			return <MischievousRightEar earShape={props.earShape} fill={props.fill} />;
		case 'quiet':
			return <QuietRightEar earShape={props.earShape} fill={props.fill} />;
		default:
			assertUnreachable(props);
	}
}

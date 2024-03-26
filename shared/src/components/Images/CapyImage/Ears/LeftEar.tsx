// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { assertUnreachable } from '../../../../utils/assertUnreachable';
import { DefaultLeftEar, DefaultLeftEarProps } from './Left/DefaultLeftEar';
import { MischievousLeftEar, MischievousLeftEarProps } from './Left/MichievousLeftEar';
import { QuietLeftEar, QuietLeftEarProps } from './Left/QuietLeftEar';
import { WildLeftEar, WildLeftEarProps } from './Left/WildLeftEar';

type LeftEarProps =
	| DefaultLeftEarProps
	| WildLeftEarProps
	| MischievousLeftEarProps
	| QuietLeftEarProps;

export function LeftEar({ ...props }: LeftEarProps) {
	switch (props.earShape) {
		case 'default':
			return <DefaultLeftEar earShape={props.earShape} fill={props.fill} />;
		case 'wild':
			return (
				<WildLeftEar
					earShape={props.earShape}
					innerEarProps={props.innerEarProps}
					outerEarProps={props.outerEarProps}
				/>
			);
		case 'mischievous':
			return <MischievousLeftEar earShape={props.earShape} fill={props.fill} />;
		case 'quiet':
			return <QuietLeftEar earShape={props.earShape} fill={props.fill} />;
		default:
			assertUnreachable(props);
	}
}

// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { type SVGProps } from 'react';

type FinProps = SVGProps<SVGPathElement>;

export function Fin(props: FinProps) {
	return (
		<g transform="matrix(2.9166107177734375, 0, 0, 2.9166107177734375, 1181.8,460.1)">
			<g transform="matrix(1, 0, 0, 1, 0, 0)">
				<path
					{...props}
					d="M-52.8,174.8c-8.8,2.5-18.1,5.6-28.1,9.5c-24,9.4-47.4,21.1-70,35.1c-23.6,14.6-42.5,29.4-56.6,44.4      c-15.5,16.5-23.2,31.3-23.2,44.5c0,8.5,2.9,14.8,8.7,18.9c4.9,3.5,12.1,5.6,21.8,6.2c6.2,0.4,15.6,0.3,28.2-0.4      c13.5-0.7,22.9-1,28.3-0.8c21.2,1,42.3,5.9,63.3,14.8c7.8,3.4,14.7,6.8,20.7,10.4c-1.6-4.8-3.1-9.7-4.5-14.7      c-2.3-10.3-4.6-20.8-6.7-31.4c-5.7-27.9-6-55.4-0.8-82.4C-67.9,209.6-61.6,191.5-52.8,174.8z"
				/>
				<path d="M-59.7,362.5c-0.9,0-1.7-0.2-2.5-0.7c-5.8-3.4-12.6-6.8-20.2-10.1c-20.3-8.6-41-13.4-61.5-14.4     c-5.2-0.2-14.6,0.1-27.8,0.8c-13,0.7-22.4,0.8-28.9,0.4c-10.7-0.7-18.7-3.1-24.4-7.2c-7.2-5.1-10.8-12.8-10.8-23     c0-14.6,8.1-30.2,24.6-47.9c14.3-15.3,33.7-30.5,57.6-45.3c22.8-14.2,46.6-26.1,70.8-35.6c10.1-3.9,19.7-7.2,28.6-9.7     c2.7-0.7,5.4,0.8,6.2,3.5c0.7,2.7-0.8,5.4-3.5,6.2c-8.6,2.4-17.9,5.6-27.7,9.4c-23.6,9.2-46.9,20.9-69.2,34.7     c-23.1,14.3-41.8,29-55.5,43.6c-14.5,15.5-21.9,29.3-21.9,41c0,6.8,2.2,11.7,6.6,14.8c0,0,0,0,0,0c4.1,2.9,10.5,4.7,19.2,5.3     c5.9,0.4,15.2,0.3,27.6-0.4c13.8-0.7,23.2-1,28.8-0.8c0,0,0,0,0,0c21.7,1,43.6,6.1,65,15.1c0,0,0,0,0,0c8,3.4,15.1,7,21.3,10.7     c2.4,1.4,3.2,4.5,1.8,6.8C-56.3,361.6-57.9,362.5-59.7,362.5z" />
			</g>
		</g>
	);
}

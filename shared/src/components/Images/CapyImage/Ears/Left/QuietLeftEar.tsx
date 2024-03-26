import { SVGProps } from 'react';

export type QuietLeftEarProps = {
	earShape: 'quiet';
} & SVGProps<SVGGElement>;

export function QuietLeftEar({ earShape, ...props }: QuietLeftEarProps) {
	return (
		<g transform="matrix(2.9166107177734375, 0, 0, 2.9166107177734375, 746.1,619.15)">
			<g transform="matrix(1, 0, 0, 1, 0, 0)" {...props}>
				<path
					d="M44.4,89.1c2.2,1.4,4.5,2.8,6.8,4.2c2.2,1.3,4.4,2.2,6.6,2.7L67,84.1C60.5,92.1,52.9,93.8,44.4,89.1
                                         M98.8,43.5c-1.4-2.4-3.2-4.7-5.4-6.8c-0.6-0.6-1.2-1.1-1.8-1.7c4.9,5.2,4.3,11.9-1.8,20.1L98.8,43.5z"
				/>
				<path
					d="M91.6,35c-0.5-0.5-1.1-1-1.6-1.5C78,22.7,64.5,12.8,49.7,4c-4.2-2.5-8.6-3.8-13.2-4
                                        C32-0.1,28.1,0.9,24.7,3.2C13.6,10.8,5.7,21.7,0.9,36c-1.2,3.5-1.2,7.3,0,11.4c1.1,4,3.3,7.6,6.5,11c9.9,10.6,21,20,33.1,28.1
                                        c1.3,0.9,2.6,1.7,4,2.5c8.5,4.7,16,3,22.6-5l22.8-29C95.9,46.8,96.5,40.1,91.6,35z"
				/>
			</g>
			<g>
				<path
					d="M53.4,96.7c-3.7,0-7.5-1-11.3-3.1c-0.1,0-0.1-0.1-0.2-0.1c-0.1,0-0.1-0.1-0.2-0.1c-1.3-0.9-2.7-1.7-4-2.6
                                    c-12.4-8.3-23.8-18-34-28.8C0,58-2.6,53.6-4,48.9c0,0,0,0,0,0c-1.4-5.1-1.4-9.9,0.1-14.3C1.3,19.1,9.9,7.2,21.9-1
                                    c0,0,0.1,0,0.1-0.1c4.3-2.8,9.2-4.1,14.7-4c0,0,0,0,0.1,0c5.4,0.2,10.6,1.8,15.5,4.7c0,0,0,0,0,0c15,9,28.8,19.1,41.1,30.1
                                    c0,0,0,0,0,0c0.5,0.5,1.1,1,1.6,1.5c0.1,0.1,0.1,0.1,0.2,0.2c3.4,3.6,5,8,4.6,12.8c-0.4,4.3-2.3,8.8-6,13.7c0,0,0,0.1-0.1,0.1
                                    c0,0,0,0,0,0.1L71,87.2c0,0,0,0,0,0c0,0-0.1,0.1-0.1,0.1C65.8,93.5,59.8,96.7,53.4,96.7z M47,84.8c6.3,3.4,11.1,2.3,16.2-3.8
                                    l22.6-28.9c6.4-8.7,3.6-12.1,2.3-13.5c-0.5-0.4-0.9-0.9-1.4-1.3c-11.7-10.6-25-20.3-39.5-28.9C43.7,6.3,40.1,5.2,36.4,5
                                    c-3.4-0.1-6.4,0.7-8.9,2.3C17.4,14.2,10.1,24.4,5.6,37.6c-0.8,2.6-0.8,5.4,0,8.5c0.9,3.2,2.6,6.1,5.3,8.8c0,0,0,0,0,0
                                    c9.6,10.3,20.5,19.5,32.3,27.4C44.5,83.2,45.7,84,47,84.8z"
				/>
			</g>
		</g>
	);
}

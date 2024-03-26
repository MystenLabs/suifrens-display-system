import { type SVGProps, type ComponentType } from "react";

import { type CapySkin } from "../../../../types/capyTypes.js";
import { DalmationLeftLegPattern } from "./Patterns/DalmationLeftLegPattern.js";
import { SnakeLeftLegPattern } from "./Patterns/SnakeLeftLegPattern.js";

type LeftLegPatternProps = {
  skin: CapySkin;
} & SVGProps<SVGGElement>;

const leftLegPatternComponents: Record<CapySkin, ComponentType | null> = {
  basic: null,
  cheetah: null,
  fox: null,
  panda: null,
  stripes: null,
  lizard: null,
  snake: SnakeLeftLegPattern,
  dalmation: DalmationLeftLegPattern,
};

export function LeftLegPattern({ skin, ...svgProps }: LeftLegPatternProps) {
  const LeftLegPatternContent = leftLegPatternComponents[skin];
  return (
    <g transform="matrix(2.9166107177734375, 0, 0, 2.9166107177734375, 1042.6,1961.9)">
      <g transform="matrix( 1, 0, 0, 1, 0,0) ">
        {LeftLegPatternContent && (
          <g {...svgProps}>
            <LeftLegPatternContent />
          </g>
        )}
        <path
          d="M80.8,240H37.6C26,240,16,236.4,7.8,229.4c-8.5-7-12.8-15.8-12.8-26.2c0-3.2,0.4-6.3,1.2-9.3c1.8-7.8,3.5-15.6,4.9-23.2
				c0-0.1,0-0.3,0.1-0.4c5.6-27.1,8.4-49.3,8.1-65.9c0-2.8,2.2-5,4.9-5.1c2.8,0,5,2.2,5.1,4.9c0.2,17.3-2.6,40.1-8.3,67.8
				c0,0.1,0,0.2-0.1,0.3c-1.5,7.7-3.2,15.7-5,23.8c0,0.1,0,0.1,0,0.2c-0.6,2.2-0.9,4.5-0.9,6.8c0,7.3,3,13.4,9.2,18.5
				c0,0,0,0,0.1,0.1c6.5,5.5,14.1,8.2,23.3,8.2h43.2c1.6,0,3.1-0.1,4.6-0.4c0,0,0.1,0,0.1,0c4.7-0.6,8.9-2,12.7-4.4
				c0,0,0.1-0.1,0.1-0.1c1.6-0.9,3.1-2,4.6-3.3c0.1-0.1,0.1-0.1,0.2-0.1c6.2-5.1,9.2-11.2,9.2-18.5c0-7.4-3-13.5-9.3-18.8
				c-5.1-4.3-10.9-6.8-17.6-7.7c-1.4-0.2-2.9-0.3-4.4-0.4c-0.2,0-0.3,0-0.5,0c-0.6-0.1-1.1-0.2-1.6-0.5c-0.7-0.3-1.3-0.8-1.7-1.4
				c-0.5-0.6-0.8-1.2-1-2c-0.1-0.5-0.2-1.1-0.1-1.7c0-0.2,0-0.3,0.1-0.5c3.3-17.6,5.3-34.7,6-50.8c0.2-5.4,0.3-8.9,0.3-10.4
				c0.1-2.7,2.3-4.9,5-4.9c0,0,0.1,0,0.1,0c2.8,0.1,5,2.3,4.9,5.1c0,1.6-0.1,5-0.4,10.6c-0.6,14.9-2.4,30.6-5.2,46.8
				c8.4,1.2,16,4.6,22.5,9.9c0,0,0,0,0,0c8.5,7.2,12.8,16.1,12.8,26.4c0,10.3-4.3,19.1-12.8,26.1c-1.9,1.7-4,3.2-6.1,4.4
				c-5,3.1-10.6,5-16.6,5.8C84.9,239.8,82.9,240,80.8,240C80.9,240,80.9,240,80.8,240z"
        />
      </g>
    </g>
  );
}

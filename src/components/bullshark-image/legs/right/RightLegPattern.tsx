import { type SVGProps, type ComponentType } from "react";

import { type BullsharkSkin } from "../../types.js";
import { DalmationRightLegPattern } from "./patterns/DalmationRightLegPattern.js";

type RightLegPatternProps = {
  skin: BullsharkSkin;
} & SVGProps<SVGGElement>;

const rightLegPatternComponents: Record<BullsharkSkin, ComponentType | null> = {
  basic: null,
  cheetah: null,
  fox: null,
  panda: null,
  stripes: null,
  lizard: null,
  snake: null,
  dalmation: DalmationRightLegPattern,
};

export function RightLegPattern({ skin, ...svgProps }: RightLegPatternProps) {
  const RightLegPatternContent = rightLegPatternComponents[skin];
  return (
    <g transform="matrix( 2.9166107177734375, 0, 0, 2.9166107177734375, 1463.45,1961.9)">
      <g transform="matrix( 1, 0, 0, 1, 0,0) ">
        {RightLegPatternContent && (
          <g {...svgProps}>
            <RightLegPatternContent />
          </g>
        )}
        <path d="M34.3,238.1c-7.5,0-14.3-4.8-20.3-14.2C8.2,214.8,3.9,203.7,1.1,191c0-0.2-0.1-0.4-0.1-0.6c-0.5-5.7-0.5-12.3,0-19.4     c0-0.2,0-0.4,0.1-0.7c5.6-27.1,8.4-49.3,8.1-65.9c0-2.8,2.2-5,4.9-5.1c2.8,0,5,2.2,5.1,4.9c0.2,17.3-2.6,40.1-8.3,67.8     c-0.4,6.4-0.5,12.1,0,17.2c2.5,11.4,6.3,21.3,11.4,29.3c4.3,6.8,8.6,10,12.8,9.5c5.1-0.6,10.5-3.7,15.9-9.1     c5.8-5.8,10.8-13,14.9-21.1v-0.1c0.6-1.2,1.2-2.4,1.7-3.6c3.7-8.6,6.5-16.6,8.4-23.8c3.3-17.6,5.3-34.6,5.9-50.7     c0.2-5.4,0.3-8.9,0.3-10.4c0.1-2.7,2.3-4.9,5-4.9h0.1c2.8,0.1,5,2.3,4.9,5.1c0,1.6-0.1,5-0.4,10.6c-0.7,16.6-2.8,34.2-6.1,52.3     c0,0.1-0.1,0.3-0.1,0.4c-2.1,7.7-5.1,16.3-8.9,25.4c-0.6,1.4-1.3,2.9-2,4.2c-4.5,9.1-10.1,17.1-16.7,23.7     c-7,7.1-14.4,11.1-21.8,12C35.7,238,35,238.1,34.3,238.1z" />
      </g>
    </g>
  );
}

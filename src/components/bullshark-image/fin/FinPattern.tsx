import { type SVGProps, type ComponentType } from "react";

import { type BullsharkSkin } from "../types.js";
import { DalmationFinPattern } from "./patterns/DalmationFinPattern.js";

type FinPatternProps = {
  skin: BullsharkSkin;
} & SVGProps<SVGGElement>;

const finPatternComponents: Record<BullsharkSkin, ComponentType | null> = {
  basic: null,
  cheetah: null,
  fox: null,
  panda: null,
  stripes: null,
  lizard: null,
  snake: null,
  dalmation: DalmationFinPattern,
};

export function FinPattern({ skin, ...svgProps }: FinPatternProps) {
  const FinPatternContent = finPatternComponents[skin];
  return (
    <g transform="matrix( 2.9166107177734375, 0, 0, 2.9166107177734375, 1181.8,460.1) ">
      <g transform="matrix( 1, 0, 0, 1, 0,0) ">
        {FinPatternContent && (
          <g {...svgProps}>
            <FinPatternContent />
          </g>
        )}
        <path d="M-59.7,362.5c-0.9,0-1.7-0.2-2.5-0.7c-5.8-3.4-12.6-6.8-20.2-10.1c-20.3-8.6-41-13.4-61.5-14.4 c-5.2-0.2-14.6,0.1-27.8,0.8c-13,0.7-22.4,0.8-28.9,0.4c-10.7-0.7-18.7-3.1-24.4-7.2c-7.2-5.1-10.8-12.8-10.8-23 c0-14.6,8.1-30.2,24.6-47.9c14.3-15.3,33.7-30.5,57.6-45.3c22.8-14.2,46.6-26.1,70.8-35.6c10.1-3.9,19.7-7.2,28.6-9.7 c2.7-0.7,5.4,0.8,6.2,3.5c0.7,2.7-0.8,5.4-3.5,6.2c-8.6,2.4-17.9,5.6-27.7,9.4c-23.6,9.2-46.9,20.9-69.2,34.7 c-23.1,14.3-41.8,29-55.5,43.6c-14.5,15.5-21.9,29.3-21.9,41c0,6.8,2.2,11.7,6.6,14.8l0,0c4.1,2.9,10.5,4.7,19.2,5.3 c5.9,0.4,15.2,0.3,27.6-0.4c13.8-0.7,23.2-1,28.8-0.8l0,0c21.7,1,43.6,6.1,65,15.1l0,0c8,3.4,15.1,7,21.3,10.7 c2.4,1.4,3.2,4.5,1.8,6.8C-56.3,361.6-57.9,362.5-59.7,362.5z" />
      </g>
    </g>
  );
}

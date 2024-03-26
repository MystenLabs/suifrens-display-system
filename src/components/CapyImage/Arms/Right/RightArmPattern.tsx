import { type SVGProps, type ComponentType } from "react";

import { type CapySkin } from "../../../../types/capyTypes.js";
import { DalmationRightArmPattern } from "./Patterns/DalmationRightArmPattern.js";
import { SnakeRightArmPattern } from "./Patterns/SnakeRightArmPattern.js";

type RightArmPatternProps = {
  skin: CapySkin;
} & SVGProps<SVGGElement>;

const rightArmPatternComponents: Record<CapySkin, ComponentType | null> = {
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
        <path
          d="M33.7,172.4c0.4,0,0.8,0,1.3,0c10.6-0.3,19.7-4.4,27-12.3c3.3-3.5,6-7.5,7.9-11.8c3.5-0.9,6.5-2.7,9-5.4c0,0,0,0,0,0
    c3.5-3.9,5.2-8.5,5.1-13.7c0,0,0,0,0,0c-0.2-5.3-2.2-9.7-6-13.3c-1-0.9-2-1.7-3.1-2.4c1.3-12.5,3.7-25.3,7.2-38.1
    c3.7-13.5,12.1-28.7,25-45.1c1.7-2.2,1.3-5.3-0.8-7c-2.2-1.7-5.3-1.3-7,0.8C85.5,41.6,76.5,57.9,72.4,72.7
    c-3.9,14.5-6.5,29-7.8,43.1c0,0.4,0,0.8,0,1.2c0.1,0.7,0.4,1.4,0.8,2c0.4,0.6,0.9,1.1,1.6,1.5c0.3,0.2,0.7,0.4,1.1,0.5
    c1.1,0.4,2.1,1,3,1.9c0,0,0.1,0.1,0.1,0.1c1.9,1.7,2.8,3.7,2.9,6.3c0.1,2.6-0.7,4.8-2.5,6.7c-1.5,1.6-3.4,2.5-5.8,2.8
    c-1.9,0.2-3.5,1.5-4.2,3.3c-1.5,4.1-3.7,7.8-6.8,11c0,0,0,0,0,0c-5.5,5.9-12.1,8.9-20,9.1c-8,0.2-14.8-2.3-20.6-7.8
    c-5.8-5.5-8.7-12-9-19.9c0,0,0-0.1,0-0.1c-0.1-1.6,0-3.2,0.2-4.6c0-0.2,0-0.3,0-0.5c0.4-6.9,0.8-13.7,1.2-20.3
    c0.6-5.3,1.2-10.7,1.9-16c2.1-16.3,6.1-32.4,11.9-48c6.4-17.1,17.2-30.9,32.3-41.1c2.3-1.5,2.9-4.7,1.3-6.9
    c-1.5-2.3-4.7-2.9-6.9-1.3C30.1,7.2,18,22.7,10.9,41.7C4.8,58,0.7,74.8-1.5,91.9c-0.7,5.4-1.3,10.9-1.9,16.2c0,0,0,0.1,0,0.1
    c0,0.1,0,0.1,0,0.2c-0.5,6.6-0.9,13.4-1.2,20.3c-0.3,2-0.4,4.1-0.3,6.3c0.3,10.6,4.4,19.6,12.1,26.9
    C14.6,168.9,23.5,172.4,33.7,172.4z"
        />
      </g>
    </g>
  );
}

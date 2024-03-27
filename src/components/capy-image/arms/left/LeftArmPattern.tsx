import { type SVGProps, type ComponentType } from "react";

import { type CapySkin } from "../../types.js";
import { DalmationLeftArmPattern } from "./patterns/DalmationLeftArmPattern.js";
import { SnakeLeftArmPattern } from "./patterns/SnakeLeftArmPattern.js";

type LeftArmPatternProps = {
  skin: CapySkin;
} & SVGProps<SVGGElement>;

const leftArmPatternComponents: Record<CapySkin, ComponentType | null> = {
  basic: null,
  cheetah: null,
  fox: null,
  panda: null,
  stripes: null,
  lizard: null,
  snake: SnakeLeftArmPattern,
  dalmation: DalmationLeftArmPattern,
};

export function LeftArmPattern({ skin, ...svgProps }: LeftArmPatternProps) {
  const LeftArmPatternContent = leftArmPatternComponents[skin];
  return (
    <g transform="matrix(2.9166107177734375, 0, 0, 2.9166107177734375, 1002.9,1719.3)">
      <g transform="matrix( 1, 0, 0, 1, 0,0) ">
        {LeftArmPatternContent && (
          <g {...svgProps}>
            <LeftArmPatternContent />
          </g>
        )}
        <path
          d="M33.7,172.4c-10.1,0-19-3.5-26.5-10.5c-7.7-7.3-11.8-16.3-12.1-26.9c-0.1-2.2,0-4.3,0.3-6.3c0.4-6.9,0.8-13.7,1.2-20.3
    c0,0,0-0.1,0-0.1c0,0,0,0,0,0v0c0,0,0-0.1,0-0.1c0.6-5.4,1.2-10.8,1.9-16.2c2.2-17.1,6.4-34,12.4-50.2c7.1-19,19.2-34.5,36-45.8
    c2.3-1.5,5.4-0.9,6.9,1.3c1.5,2.3,0.9,5.4-1.3,6.9c-15,10.2-25.9,24-32.3,41.1c-5.8,15.5-9.8,31.7-11.9,48
    c-0.7,5.3-1.3,10.7-1.9,16c-0.5,6.6-0.9,13.4-1.2,20.3c0,0.2,0,0.3,0,0.5c-0.2,1.4-0.3,3-0.2,4.6c0,0,0,0.1,0,0.1
    c0.2,8,3.2,14.5,9,20c5.8,5.5,12.6,8,20.6,7.8c8-0.2,14.5-3.2,20-9.1c0,0,0,0,0,0c3.1-3.2,5.4-6.9,6.8-11
    c0.6-1.8,2.3-3.1,4.2-3.3c2.4-0.3,4.3-1.2,5.8-2.8c1.8-2,2.6-4.1,2.5-6.7c-0.1-2.6-1-4.6-2.9-6.3c0,0-0.1-0.1-0.1-0.1
    c-0.9-0.9-1.9-1.5-3-1.9c-0.4-0.1-0.7-0.3-1.1-0.5c-0.6-0.4-1.2-0.9-1.6-1.5c-0.4-0.6-0.7-1.3-0.8-2.1c-0.1-0.4-0.1-0.8,0-1.2
    c1.3-14.2,3.9-28.7,7.8-43.1c4-14.8,13-31.2,26.8-48.6c1.7-2.2,4.9-2.5,7-0.8c2.2,1.7,2.5,4.9,0.8,7
    c-12.9,16.4-21.3,31.6-25,45.1c-3.5,12.7-5.9,25.5-7.2,38.1c1.1,0.7,2.1,1.5,3.1,2.4c3.8,3.6,5.8,8,6,13.3c0,0,0,0,0,0
    c0.1,5.2-1.6,9.8-5.1,13.7c0,0,0,0,0,0c-2.5,2.7-5.5,4.5-9,5.4c-1.9,4.3-4.6,8.3-7.9,11.8c-7.3,7.8-16.4,12-27,12.3
    C34.5,172.4,34.1,172.4,33.7,172.4z"
        />
      </g>
    </g>
  );
}

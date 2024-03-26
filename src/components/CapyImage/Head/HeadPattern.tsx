import { type SVGProps, type ComponentType } from "react";

import { type CapySkin } from "../../../types/capyTypes.js";
import { BasicHeadPattern } from "./Patterns/BasicHeadPattern.js";
import { CheetahHeadPattern } from "./Patterns/CheetahHeadPattern.js";
import { DalmationHeadPattern } from "./Patterns/DalmationHeadPattern.js";
import { FoxHeadPattern } from "./Patterns/FoxHeadPattern.js";
import { LizardHeadPattern } from "./Patterns/LizardHeadPattern.js";
import { PandaHeadPattern } from "./Patterns/PandaHeadPattern.js";
import { SnakeHeadPattern } from "./Patterns/SnakeHeadPattern.js";
import { StripesHeadPattern } from "./Patterns/StripesHeadPattern.js";

type HeadPatternProps = {
  skin: CapySkin;
  noseProps: SVGProps<SVGPathElement>;
} & SVGProps<SVGGElement>;

const headPatternComponents: Record<CapySkin, ComponentType> = {
  basic: BasicHeadPattern,
  cheetah: CheetahHeadPattern,
  fox: FoxHeadPattern,
  panda: PandaHeadPattern,
  stripes: StripesHeadPattern,
  snake: SnakeHeadPattern,
  lizard: LizardHeadPattern,
  dalmation: DalmationHeadPattern,
};

export function HeadPattern({
  skin,
  noseProps,
  ...headPatternProps
}: HeadPatternProps) {
  const HeadPatternContent = headPatternComponents[skin];
  return (
    <g transform="matrix(2.9166107177734375, 0, 0, 2.9166107177734375, 848.15,585.65)">
      <g transform="matrix(1, 0, 0, 1, 0, 0)">
        <g {...headPatternProps}>
          <HeadPatternContent />
        </g>
        <path
          {...noseProps}
          d="M531.9,152.4c-5.2-26.7-18-47.9-38.4-63.6c-20.4-15.6-42.5-21.2-66.2-16.6c-23.7,4.6-42,18-55.1,40.1
					c-13.1,22.1-17,46.6-11.9,73.3c0.8,4.3,1.9,8.5,3.1,12.5c6.4,21,18.2,38,35.2,51.1c5.4,4.1,10.8,7.5,16.4,10.2
					c15.7,7.6,32.3,9.7,49.8,6.3c16.7-3.2,30.8-10.8,42.2-22.8c2.7-2.7,5.2-5.7,7.5-8.9c1.9-2.6,3.8-5.4,5.5-8.4
					C533.1,203.6,537.1,179.1,531.9,152.4z"
        />
        <path
          d="M201.7,388.2c-3.3,0-6.5-0.1-9.7-0.2c-32.1-1-60.9-7.4-85.4-18.8C82,357.7,61,340.8,44.1,318.8
				C27.4,297,14.4,269.7,5.4,237.7c0-0.1,0-0.2-0.1-0.2c-2.1-9.4-4.2-19-6.2-28.5c-5.3-25.9-5.5-51.8-0.7-77
				c4.6-24.2,13.7-46.4,26.9-66.1c7.8-11.6,16.8-21.9,26.7-30.7c7-6.2,14.6-11.8,22.6-16.6C95,6.4,117.4-0.4,141.1-1.7
				c41-2.3,82.3-3.4,122.6-3.3c1.7,0,3.4,0,5.1,0c49.4,0.2,99.1,2.3,147.7,6.1c17.3,1.3,34.3,5.7,50.5,13.2
				c15.8,7.3,30.5,17.3,43.8,29.6c13.2,12.2,24.6,26.6,33.8,42.6c9.5,16.4,16.5,34.2,20.9,52.9c0,0,0,0,0,0
				c1.9,8.1,3.6,16.2,5.2,24.1c0,0.2,0.1,0.3,0.1,0.5c2.1,21.7,0.1,42-6,60.6c-6.2,18.6-16.6,35.8-31,51.1
				c-14.3,15.2-32.9,29-55.2,40.9c-22.2,11.9-48.8,22.3-79,31c-19.8,6-39.9,11.8-59.7,17.2c-2.5,0.7-5,1.4-7.5,2.1l-32.9,8.7
				c0,0-0.1,0-0.1,0C264,384,231.1,388.2,201.7,388.2z M15,235.1c8.6,30.7,21.1,56.9,37,77.6c15.9,20.6,35.6,36.6,58.8,47.4
				c23.3,10.9,50.7,16.9,81.5,17.9c31,1,66.3-3.1,104.8-12.1l32.8-8.6c2.4-0.6,4.9-1.3,7.4-2c19.8-5.4,39.8-11.2,59.5-17.2
				c0,0,0,0,0.1,0c29.5-8.5,55.5-18.7,77-30.3c21.4-11.5,39.1-24.6,52.7-39c13.4-14.3,23.1-30.2,28.8-47.4
				c5.7-17.1,7.6-36.1,5.6-56.2c-1.5-7.8-3.2-15.7-5.1-23.5c-4.2-17.8-10.8-34.6-19.8-50.2c-8.8-15.2-19.5-28.7-32-40.3
				c-12.5-11.6-26.4-21-41.2-27.8c-15.2-6.9-31-11.1-47.1-12.3C367.4,7.3,318,5.3,268.8,5c-1.7,0-3.4,0-5.1,0
				c-40.2-0.1-81.2,1-122,3.3c-22.1,1.2-42.9,7.5-61.8,18.8c-7.5,4.5-14.6,9.7-21.1,15.5c-9.3,8.3-17.8,18-25.1,28.9
				C21.2,90,12.7,111,8.3,133.8c-4.6,23.8-4.4,48.4,0.6,73.1C10.9,216.3,12.9,225.8,15,235.1z"
        />
      </g>
    </g>
  );
}

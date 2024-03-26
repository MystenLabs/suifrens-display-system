import { type SVGProps, type ComponentType } from "react";

import { type BullsharkSkin } from "../../../../types/bullsharkTypes.js";
import { BasicBodyPattern } from "./Patterns/BasicBodyPattern.js";
import { CheetahBodyPattern } from "./Patterns/CheetahBodyPattern.js";
import { DalmationBodyPattern } from "./Patterns/DalmationBodyPattern.js";
import { FoxBodyPattern } from "./Patterns/FoxBodyPattern.js";
import { LizardBodyPattern } from "./Patterns/LizardBodyPattern.js";
import { PandaBodyPattern } from "./Patterns/PandaBodyPattern.js";
import { SnakeBodyPattern } from "./Patterns/SnakeBodyPattern.js";
import { StripesBodyPattern } from "./Patterns/StripesBodyPattern.js";

type BodyPatternProps = {
  skin: BullsharkSkin;
} & SVGProps<SVGGElement>;

const bodyPatternComponents: Record<BullsharkSkin, ComponentType> = {
  basic: BasicBodyPattern,
  cheetah: CheetahBodyPattern,
  fox: FoxBodyPattern,
  panda: PandaBodyPattern,
  stripes: StripesBodyPattern,
  snake: SnakeBodyPattern,
  lizard: LizardBodyPattern,
  dalmation: DalmationBodyPattern,
};

export function BodyPattern({ skin, ...svgProps }: BodyPatternProps) {
  const BodyPatternContent = bodyPatternComponents[skin];
  return (
    <g transform="matrix(2.9166107177734375, 0, 0, 2.9166107177734375, 956.5,1516.1)">
      <g transform="matrix(1, 0, 0, 1, 0, 0)">
        <g {...svgProps}>
          <BodyPatternContent />
        </g>
        <path d="M151.4,297.8h-9.5c0,0-0.1,0-0.1,0l-5.4-0.1h-1.6c0,0-0.1,0-0.1,0c-2.8-0.1-5.6-0.2-8.3-0.3c-29.2-1.4-53.8-6.4-73.2-15 c-19.8-8.8-34.8-21.5-44.5-37.7C-0.7,228.7-5.4,209-4.9,186c0,0,0-0.1,0-0.1c0.8-22.9,2.9-46.7,6.4-70.7c0-0.1,0-0.2,0.1-0.4 C7,90.7,16.8,69.6,30.9,52C45,34.5,63.6,20.1,86.2,9.2c3.6-1.7,7.3-3.3,11-4.7c12.5-4.8,25.7-7.9,39.4-9.2c0,0,0.1,0,0.1,0l0.3,0 c0.3,0,0.5,0,0.8-0.1c0.1,0,0.2,0,0.3,0l3-0.1c0.4,0,0.9-0.1,1.4-0.1h8.2c0.3,0,0.7,0,1,0.1l2.4,0.1c0.1,0,0.1,0,0.2,0 c0.3,0,0.6,0,1,0c0.5,0,1,0.1,1.5,0.1c0,0,0,0,0,0c0.2,0,0.4,0.1,0.7,0.1c17.5,1.8,34.2,6.4,49.7,13.9c1.4,0.7,2.8,1.4,4.2,2.1 c21.4,10.9,39,25.2,52.4,42.4c13.4,17.2,22.8,37.8,28,61.1c0,0.1,0.1,0.2,0.1,0.4c3.5,24,5.7,47.8,6.4,70.7c0,0,0,0.1,0,0.1 c0.4,23-4.2,42.7-13.8,58.7c-11.4,19.2-30.1,33.3-55.6,42c-6.2,2.1-13,4-20,5.5c-0.9,0.2-1.8,0.4-2.6,0.5c-0.1,0-0.1,0-0.2,0 l-19.2,3c-0.1,0-0.3,0-0.4,0l-20.3,1.6c-0.1,0-0.2,0-0.2,0c-2.4,0.1-4.8,0.1-7.2,0.2c0,0-0.1,0-0.1,0h-1.6L151.4,297.8 C151.5,297.8,151.5,297.8,151.4,297.8z M141.9,287.8h9.5l5.4-0.1c0,0,0.1,0,0.1,0h1.5c2.3-0.1,4.7-0.1,7-0.2l20-1.6l19-3 c0.8-0.2,1.6-0.3,2.4-0.5c6.6-1.4,13-3.2,18.8-5.2c23.2-7.9,40.1-20.6,50.3-37.7c8.6-14.4,12.7-32.3,12.4-53.4 c-0.8-22.4-2.9-45.8-6.3-69.4c-4.9-21.8-13.7-41-26.1-57c-12.5-16-29-29.4-49-39.6c-1.3-0.7-2.6-1.3-4-2 c-14.4-6.9-30-11.3-46.3-12.9c-0.1,0-0.3,0-0.4,0c-0.1,0-0.3,0-0.4-0.1c-0.7,0-1.3-0.1-2-0.1L151.2,5c-0.2,0-0.4,0-0.6,0h-8 c-0.2,0-0.4,0-0.6,0c-0.1,0-0.2,0-0.3,0l-3.1,0.1c-0.2,0-0.5,0-0.8,0.1l-0.3,0c-12.8,1.2-25.1,4.1-36.8,8.6 c-3.5,1.3-6.9,2.8-10.3,4.4c-21.3,10.2-38.7,23.7-51.8,40c-13.1,16.3-22.3,36-27.3,58.6c-3.4,23.6-5.6,46.9-6.3,69.4 c-0.4,21.1,3.8,39,12.3,53.4c8.6,14.4,22.1,25.8,39.9,33.7c18.3,8.1,41.7,12.9,69.6,14.2c2.6,0.1,5.3,0.2,8,0.3h1.5 c0,0,0.1,0,0.1,0L141.9,287.8z" />
      </g>
    </g>
  );
}

// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { type SVGProps, type ComponentType } from "react";

import { type BullsharkSkin } from "../../../../../types/bullsharkTypes.js";
import { DalmationLeftArmPattern } from "./Patterns/DalmationLeftArmPattern.js";
import { SnakeLeftArmPattern } from "./Patterns/SnakeLeftArmPattern.js";

type LeftArmPatternProps = {
  skin: BullsharkSkin;
} & SVGProps<SVGGElement>;

const leftArmPatternComponents: Record<BullsharkSkin, ComponentType | null> = {
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
        <path d="M34.8,161.1c-6.2,0-12.5-3.4-19.1-10.4C9.8,144.5,5,138.2,1.4,131.8c-0.1-0.1-0.1-0.2-0.1-0.3 c-4.2-8.5-5.7-16.4-4.7-23.5c0.6-5.3,1.2-10.8,1.9-16.1c2.2-17.1,6.4-34,12.4-50.2c7.1-19,19.2-34.5,36-45.8 c2.3-1.5,5.4-0.9,6.9,1.3c1.5,2.3,0.9,5.4-1.3,6.9c-15,10.2-25.9,24-32.3,41.1c-5.8,15.5-9.8,31.7-11.9,48 c-0.7,5.3-1.3,10.8-1.9,16.1c0,0.1,0,0.1,0,0.2c-0.8,5.1,0.5,11,3.7,17.6c3.2,5.6,7.5,11.2,12.8,16.8c4.5,4.8,8.6,7.3,11.9,7.3 c0,0,0,0,0,0c3.4,0,7.7-2.3,12.4-6.7c5-4.7,8.8-8.9,11.2-12.6c3.5-5.5,5.7-10.9,6.3-15.9c1.3-14.2,3.9-28.7,7.8-43.1 c4-14.8,13-31.2,26.8-48.6c1.7-2.2,4.9-2.5,7-0.8c2.2,1.7,2.5,4.9,0.8,7c-12.9,16.4-21.3,31.6-25,45.1 c-3.8,13.9-6.3,27.9-7.5,41.5c0,0.1,0,0.1,0,0.2c-0.8,6.6-3.4,13.4-7.8,20.2c-2.9,4.4-7,9.2-12.8,14.5 C47.3,158,41,161,34.8,161.1C34.8,161,34.8,161.1,34.8,161.1z" />
      </g>
    </g>
  );
}

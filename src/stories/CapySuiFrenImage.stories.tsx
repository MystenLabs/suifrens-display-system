// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { type Meta, type StoryObj } from "@storybook/react";
import { SuiFrenImage } from "../components/Images/SuiFrenImage.js";
import { accessories } from "../constants/accessories.js";
import { type ComponentProps } from "react";
import { CapyAttributes, CapyExpression } from "../types/capyTypes.js";
import { SuiLogo } from "../components/Images/Logos/SuiLogo.js";

const allPossibleExpressions: CapyExpression[] = [
  "angry",
  "annoyed",
  "bigSmile",
  "blush",
  "cool",
  "crying",
  "happy",
  "heartEyes",
  "kiss",
  "laughing",
  "mischievous",
  "relaxed",
  "sad",
  "shocked",
  "sleepy",
  "tongueOut",
  "wink",
  "dizzyFace",
  "goofy",
  "grimace",
];

const meta = {
  title: "SuiFrenImage/Capy",
  component: SuiFrenImage,
  tags: ["autodocs"],
} satisfies Meta<typeof SuiFrenImage>;

export default meta;

type Story = StoryObj<typeof SuiFrenImage>;

type StoryPropsWithAllExpressions = Omit<
  ComponentProps<typeof SuiFrenImage>,
  "suiFrenType" | "attributes"
> & {
  attributes: Omit<CapyAttributes, "expression">;
};
type StoryWithAllExpressions = StoryObj<StoryPropsWithAllExpressions>;

export const Basic: StoryWithAllExpressions = {
  render: ({ attributes, ...props }) => (
    <div className="flex gap-2 flex-wrap">
      {allPossibleExpressions.map((expression) => (
        <div className="h-60 w-60 shrink-0" key={expression}>
          <SuiFrenImage
            attributes={{
              ...attributes,
              expression,
            }}
            {...props}
          />
        </div>
      ))}
    </div>
  ),
  args: {
    attributes: {
      mainColor: "6FBBEE",
      secondaryColor: "E6FBFF",
      skin: "basic",
      earShape: "default",
    },
  },
};

export const Cheetah: StoryWithAllExpressions = {
  ...Basic,
  args: {
    attributes: {
      mainColor: "FB825C",
      secondaryColor: "FFF1D6",
      skin: "cheetah",
      earShape: "quiet",
    },
  },
};

export const Fox: StoryWithAllExpressions = {
  ...Basic,
  args: {
    attributes: {
      mainColor: "DA8E2F",
      secondaryColor: "FCCD31",
      skin: "fox",
      earShape: "wild",
    },
  },
};

export const Panda: StoryWithAllExpressions = {
  ...Basic,
  args: {
    attributes: {
      mainColor: "707070",
      secondaryColor: "FCCD31",
      skin: "panda",
      earShape: "mischievous",
    },
  },
};

export const Stripes: StoryWithAllExpressions = {
  ...Basic,
  args: {
    attributes: {
      mainColor: "FFF1D6",
      secondaryColor: "707070",
      skin: "stripes",
      earShape: "default",
    },
  },
};

export const Dalmation: StoryWithAllExpressions = {
  ...Basic,
  args: {
    attributes: {
      mainColor: "FFF1D6",
      secondaryColor: "4E494E",
      skin: "dalmation",
      earShape: "default",
    },
  },
};

export const Lizard: StoryWithAllExpressions = {
  ...Basic,
  args: {
    attributes: {
      mainColor: "43426F",
      secondaryColor: "3F97FF",
      skin: "lizard",
      earShape: "default",
    },
  },
};

export const Snake: StoryWithAllExpressions = {
  ...Basic,
  args: {
    attributes: {
      mainColor: "A17E52",
      secondaryColor: "A87C4C",
      skin: "snake",
      earShape: "default",
    },
  },
};

export const WithShadow: Story = {
  decorators: [
    (Story) => (
      <div className="h-60 w-60">
        <Story />
      </div>
    ),
  ],
  args: {
    attributes: {
      mainColor: "6FBBEE",
      secondaryColor: "E6FBFF",
      skin: "basic",
      earShape: "wild",
      expression: "grimace",
    },
    shadow: true,
  },
};

export const WithLogo: Story = {
  ...WithShadow,
  args: {
    attributes: {
      mainColor: "6FBBEE",
      secondaryColor: "E6FBFF",
      skin: "basic",
      earShape: "wild",
      expression: "bigSmile",
    },
    logo: <SuiLogo />,
  },
};

export const Incognito: Story = {
  ...WithShadow,
  args: {
    attributes: {
      mainColor: "FFFFFF",
      secondaryColor: "FFFFFF",
      skin: "basic",
      earShape: "wild",
      expression: "happy",
    },
    incognito: true,
  },
};

export const WithAccessories: Story = {
  render: (props) => (
    <div className="flex gap-2 flex-wrap">
      {accessories.map((accessory) => (
        <div className="h-60 w-60 shrink-0" key={accessory.name}>
          <SuiFrenImage {...props} accessories={[accessory]} />
        </div>
      ))}
    </div>
  ),
  args: {
    attributes: {
      mainColor: "6FBBEE",
      secondaryColor: "E6FBFF",
      skin: "basic",
      expression: "blush",
      earShape: "wild",
    },
  },
};

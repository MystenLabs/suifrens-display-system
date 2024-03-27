import { type Meta, type StoryObj } from "@storybook/react";
import { SuiFrenImage } from "./SuiFrenImage.js";
import { accessories } from "../constants/accessories.js";
import { type ComponentProps } from "react";
import { SuiLogo } from "./logos/SuiLogo.js";
import {
  BullsharkAttributes,
  BullsharkExpression,
} from "./bullshark-image/types.js";

const allPossibleExpressions: BullsharkExpression[] = [
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
  title: "SuiFrenImage/Bullshark",
  component: SuiFrenImage,
  tags: ["autodocs"],
} satisfies Meta<typeof SuiFrenImage>;

export default meta;

type Story = StoryObj<typeof SuiFrenImage>;

type StoryPropsWithAllExpressions = Omit<
  ComponentProps<typeof SuiFrenImage>,
  "suiFrenType" | "attributes"
> & {
  attributes: Omit<BullsharkAttributes, "expression">;
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
      finStyle: "classic",
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
      finStyle: "classic",
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
      finStyle: "classic",
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
      finStyle: "classic",
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
      finStyle: "classic",
    },
  },
};

export const Dalmation: StoryWithAllExpressions = {
  ...Basic,
  args: {
    attributes: {
      mainColor: "FFF1D6",
      secondaryColor: "EAB244",
      skin: "dalmation",
      finStyle: "classic",
    },
  },
};

export const Lizard: StoryWithAllExpressions = {
  ...Basic,
  args: {
    attributes: {
      mainColor: "E991AB",
      secondaryColor: "FF5C00",
      skin: "lizard",
      finStyle: "classic",
    },
  },
};

export const Snake: StoryWithAllExpressions = {
  ...Basic,
  args: {
    attributes: {
      mainColor: "066011",
      secondaryColor: "469DFD",
      skin: "snake",
      finStyle: "classic",
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
      finStyle: "classic",
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
      finStyle: "classic",
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
      finStyle: "classic",
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
      finStyle: "classic",
    },
  },
};

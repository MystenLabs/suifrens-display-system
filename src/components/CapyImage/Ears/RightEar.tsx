import { assertUnreachable } from "../../../utils/assertUnreachable.js";
import {
  DefaultRightEar,
  DefaultRightEarProps,
} from "./Right/DefaultRightEar.js";
import {
  MischievousRightEar,
  MischievousRightEarProps,
} from "./Right/MichievousRightEar.js";
import { QuietRightEar, QuietRightEarProps } from "./Right/QuietRightEar.js";
import { WildRightEar, WildRightEarProps } from "./Right/WildRightEar.js";

type RightEarProps =
  | DefaultRightEarProps
  | WildRightEarProps
  | MischievousRightEarProps
  | QuietRightEarProps;

export function RightEar({ ...props }: RightEarProps) {
  switch (props.earShape) {
    case "default":
      return <DefaultRightEar earShape={props.earShape} fill={props.fill} />;
    case "wild":
      return (
        <WildRightEar
          earShape={props.earShape}
          innerEarProps={props.innerEarProps}
          outerEarProps={props.outerEarProps}
        />
      );
    case "mischievous":
      return (
        <MischievousRightEar earShape={props.earShape} fill={props.fill} />
      );
    case "quiet":
      return <QuietRightEar earShape={props.earShape} fill={props.fill} />;
    default:
      assertUnreachable(props);
  }
}

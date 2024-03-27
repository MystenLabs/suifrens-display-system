import { AccessoryMetadata } from "../../utils/accessoryUtils.js";
import { Body } from "./body/Body.js";
import { BodyPattern } from "./body/BodyPattern.js";
import { Expression } from "./Expression.js";
import { Fin } from "./fin/Fin.js";
import { LeftArm } from "./arms/left/LeftArm.js";
import { RightArm } from "./arms/right/RightArm.js";
import { Head } from "./head/Head.js";
import { HeadPattern } from "./head/HeadPattern.js";
import { LeftLeg } from "./legs/left/LeftLeg.js";
import { RightLeg } from "./legs/right/RightLeg.js";
import { Tail } from "./tail/Tail.js";
import { getThemeFromSkin } from "./theme.js";
import { BullsharkAttributes } from "./types.js";
import { FinPattern } from "./fin/FinPattern.js";
import { TailPattern } from "./tail/TailPattern.js";
import { LeftLegPattern } from "./legs/left/LeftLegPattern.js";
import { RightLegPattern } from "./legs/right/RightLegPattern.js";
import { LeftArmPattern } from "./arms/left/LeftArmPattern.js";
import { RightArmPattern } from "./arms/right/RightArmPattern.js";
import { Accessory } from "../accessories/index.js";

type BullsharkImageProps = {
  attributes: BullsharkAttributes;
  accessoriesByType?: Record<string, AccessoryMetadata>;
  incognito?: boolean;
};

export function BullsharkImage({
  attributes,
  accessoriesByType,
  incognito = false,
}: BullsharkImageProps) {
  const { mainColor, secondaryColor, skin, expression } = attributes;
  const colorTheme = getThemeFromSkin(
    skin,
    `#${mainColor}`,
    `#${secondaryColor}`
  );
  const headAccessory = accessoriesByType?.head;
  const showFin = !headAccessory || headAccessory.renderOptions.showFin;

  return (
    <>
      {accessoriesByType?.back?.category === "wings" && (
        <Accessory accessory={accessoriesByType.back.name} lor="left" />
      )}
      <RightArm fill={colorTheme.hands} />
      {!incognito && <RightArmPattern skin={skin} fill={colorTheme.patterns} />}
      {accessoriesByType?.torso && (
        <Accessory accessory={accessoriesByType.torso.name} lor="left" />
      )}
      {accessoriesByType?.body && (
        <Accessory accessory={accessoriesByType.body.name} lor="left" />
      )}
      <Tail fill={colorTheme.tail} />=
      {!incognito && <TailPattern skin={skin} fill={colorTheme.patterns} />}
      <RightLeg fill={colorTheme.legs} />
      {!incognito && <RightLegPattern skin={skin} fill={colorTheme.patterns} />}
      {showFin && (
        <>
          <Fin fill={colorTheme.fin} />
          {!incognito && <FinPattern skin={skin} fill={colorTheme.patterns} />}
        </>
      )}
      {accessoriesByType?.back?.category === "wings" && (
        <Accessory accessory={accessoriesByType.back.name} lor="right" />
      )}
      <Body fill={colorTheme.body} />
      {!incognito && <BodyPattern skin={skin} fill={colorTheme.patterns} />}
      {accessoriesByType?.legs && (
        <Accessory accessory={accessoriesByType?.legs.name} body />
      )}
      {accessoriesByType?.torso && (
        <Accessory accessory={accessoriesByType.torso.name} body />
      )}
      <LeftLeg fill={colorTheme.legs} />
      {!incognito && <LeftLegPattern skin={skin} fill={colorTheme.patterns} />}
      {accessoriesByType?.back &&
        accessoriesByType?.back?.category !== "wings" && (
          <Accessory accessory={accessoriesByType?.back.name} />
        )}
      {accessoriesByType?.feet && (
        <Accessory accessory={accessoriesByType.feet.name} />
      )}
      {accessoriesByType?.legs && (
        <Accessory accessory={accessoriesByType.legs.name} />
      )}
      {accessoriesByType?.body && (
        <Accessory accessory={accessoriesByType.body.name} body />
      )}
      {accessoriesByType?.object && (
        <Accessory accessory={accessoriesByType.object.name} />
      )}
      <LeftArm fill={colorTheme.hands} />
      {!incognito && <LeftArmPattern skin={skin} fill={colorTheme.patterns} />}
      {accessoriesByType?.torso && (
        <Accessory accessory={accessoriesByType.torso.name} lor="right" />
      )}
      {accessoriesByType?.body && (
        <Accessory accessory={accessoriesByType.body.name} lor="right" />
      )}
      <Head fill={colorTheme.head} />
      {!incognito && <HeadPattern skin={skin} fill={colorTheme.patterns} />}
      {!incognito && <Expression expression={expression} />}
      {headAccessory && <Accessory accessory={headAccessory.name} />}
      {accessoriesByType?.eyes && (
        <Accessory accessory={accessoriesByType.eyes.name} />
      )}
    </>
  );
}

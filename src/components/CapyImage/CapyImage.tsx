import { AccessoryMetadata } from "../../../types/accessoryTypes.js";
import { getThemeFromSkin } from "./theme.js";

import { LeftEar } from "./Ears/LeftEar.js";
import { RightEar } from "./Ears/RightEar.js";
import { Expression } from "./Expression.js";
import { CapyAttributes } from "../../../types/capyTypes.js";
import { BodyPattern } from "./Body/BodyPattern.js";
import { Body } from "./Body/Body.js";
import { LeftArm } from "./Arms/Left/LeftArm.js";
import { RightArm } from "./Arms/Right/RightArm.js";
import { LeftLeg } from "./Legs/Left/LeftLeg.js";
import { RightLeg } from "./Legs/Right/RightLeg.js";
import { Head } from "./Head/Head.js";
import { HeadPattern } from "./Head/HeadPattern.js";
import { Nostrils } from "./Nostrils.js";
import { LeftLegPattern } from "./Legs/Left/LeftLegPattern.js";
import { RightLegPattern } from "./Legs/Right/RightLegPattern.js";
import { LeftArmPattern } from "./Arms/Left/LeftArmPattern.js";
import { RightArmPattern } from "./Arms/Right/RightArmPattern.js";
import { Accessory } from "../Accessories/index.js";

type CapyImageProps = {
  attributes: CapyAttributes;
  accessoriesByType?: Record<string, AccessoryMetadata>;
  incognito?: boolean;
};

export function CapyImage({
  attributes,
  accessoriesByType,
  incognito = false,
}: CapyImageProps) {
  const { mainColor, secondaryColor, skin, earShape, expression } = attributes;
  const colorTheme = getThemeFromSkin(
    skin,
    `#${mainColor}`,
    `#${secondaryColor}`,
    incognito
  );
  const headAccessory = accessoriesByType?.head;
  const showEars = !headAccessory || headAccessory.renderOptions.showEars;

  return (
    <>
      {accessoriesByType?.back?.category === "wings" && (
        <Accessory accessory={accessoriesByType.back.name} lor="left" />
      )}

      <RightArm
        fill={colorTheme.arms}
        handProps={{ fill: colorTheme.appendages }}
      />
      {!incognito && <RightArmPattern skin={skin} fill={colorTheme.patterns} />}
      {accessoriesByType?.back?.category === "wings" && (
        <Accessory accessory={accessoriesByType.back.name} lor="right" />
      )}
      {accessoriesByType?.torso && (
        <Accessory accessory={accessoriesByType?.torso.name} lor="left" />
      )}
      {accessoriesByType?.body && (
        <Accessory accessory={accessoriesByType?.body.name} lor="left" />
      )}

      <RightLeg
        fill={colorTheme.legs}
        footProps={{ fill: colorTheme.appendages }}
      />
      {!incognito && <RightLegPattern skin={skin} fill={colorTheme.patterns} />}

      <Body fill={colorTheme.body} />
      {!incognito && skin && (
        <BodyPattern skin={skin} fill={colorTheme.patterns} />
      )}
      {accessoriesByType?.back &&
        accessoriesByType?.back?.category !== "wings" && (
          <Accessory accessory={accessoriesByType?.back.name} />
        )}
      {accessoriesByType?.legs && (
        <Accessory accessory={accessoriesByType?.legs.name} body />
      )}
      {accessoriesByType?.torso && (
        <Accessory accessory={accessoriesByType?.torso.name} body />
      )}

      <LeftLeg
        fill={colorTheme.legs}
        footProps={{ fill: colorTheme.appendages }}
      />
      {!incognito && <LeftLegPattern skin={skin} fill={colorTheme.patterns} />}

      {accessoriesByType?.feet && (
        <Accessory accessory={accessoriesByType?.feet.name} />
      )}
      {accessoriesByType?.legs && (
        <Accessory accessory={accessoriesByType?.legs.name} />
      )}
      {accessoriesByType?.body && (
        <Accessory accessory={accessoriesByType?.body.name} body />
      )}
      {accessoriesByType?.object && (
        <Accessory accessory={accessoriesByType?.object.name} />
      )}

      <LeftArm
        fill={colorTheme.arms}
        handProps={{ fill: colorTheme.appendages }}
      />
      {!incognito && <LeftArmPattern skin={skin} fill={colorTheme.patterns} />}

      {accessoriesByType?.torso && (
        <Accessory accessory={accessoriesByType?.torso.name} lor="right" />
      )}

      {accessoriesByType?.body && (
        <Accessory accessory={accessoriesByType?.body.name} lor="right" />
      )}

      {showEars && (
        <RightEar
          earShape={earShape}
          outerEarProps={{ fill: colorTheme.outerEars }}
          innerEarProps={{ fill: colorTheme.innerEars }}
          fill={colorTheme.outerEars}
        />
      )}

      <Head fill={colorTheme.head} />
      <HeadPattern
        skin={skin}
        fill={colorTheme.patterns}
        noseProps={{ fill: colorTheme.nose }}
      />
      {!incognito && <Nostrils />}

      {showEars && (
        <LeftEar
          earShape={earShape}
          outerEarProps={{ fill: colorTheme.outerEars }}
          innerEarProps={{ fill: colorTheme.innerEars }}
          fill={colorTheme.outerEars}
        />
      )}

      {!incognito && <Expression expression={expression} />}
      {accessoriesByType?.head && (
        <Accessory accessory={accessoriesByType?.head.name} />
      )}
      {accessoriesByType?.eyes && (
        <Accessory accessory={accessoriesByType?.eyes.name} />
      )}
    </>
  );
}

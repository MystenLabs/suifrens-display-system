import { getFullnodeUrl, SuiClient } from "@mysten/sui.js/client";

import {
  NETWORK,
  CAPY_TYPE,
  BULLSHARK_TYPE,
  ACCESSORIES_KEY_TYPE,
} from "../lib/config.js";
import { SuiFrenType } from "../../components/types.js";
import { parseSuiFrenAttributes } from "../../utils/attributeUtils.js";
import { extractBaseFrenType } from "../../utils/objectTypeUtils.js";
import { accessories } from "../../constants/accessories.js";
import { AccessoryMetadata } from "../../utils/accessoryUtils.js";

const rpcUrl = getFullnodeUrl(NETWORK);
const suiClient = new SuiClient({ url: rpcUrl });

export async function getSuiFrenAttributesAndAccessories(suiFrenId: string) {
  return suiClient
    .getObject({
      id: suiFrenId,
      options: { showContent: true, showOwner: true, showType: true },
    })
    .then(async (res) => {
      if (res.error) {
        throw new Error(res.error.code);
      }

      const fields =
        res.data?.content?.dataType === "moveObject"
          ? res.data?.content?.fields
          : null;
      const objectType =
        res.data?.content?.dataType === "moveObject"
          ? res.data?.content.type
          : null;
      const suiFrenType = objectType
        ? getSuiFrenTypeFromObjectType(objectType)
        : undefined;
      const attribute =
        fields && "attributes" in fields ? fields.attributes : null;

      if (!suiFrenType || !fields || !attribute) {
        throw new Error(
          `Failed to parse object data returned for SuiFren ${suiFrenId}`
        );
      }

      return {
        equippedAccessories: await getSuiFrenAccessories(suiFrenId),
        attributes: parseSuiFrenAttributes(suiFrenType, attribute as string[]),
      };
    })
    .catch((e) => {
      throw e;
    });
}

export async function getSuiFrenAccessories(suiFrenId: string) {
  const suiFrenAccessories: AccessoryMetadata[] = [];
  const dynamicFields = await suiClient.getDynamicFields({
    parentId: suiFrenId,
  });

  for (const data of dynamicFields.data) {
    const objName = data.name;
    if (objName.type === ACCESSORIES_KEY_TYPE) {
      const objectResponse = await suiClient.getDynamicFieldObject({
        parentId: suiFrenId,
        name: objName,
      });

      const objectFields =
        objectResponse?.data?.content?.dataType === "moveObject"
          ? objectResponse.data.content.fields
          : null;

      const name =
        objectFields && "name" in objectFields ? objectFields.name : null;
      const accessory = objectFields
        ? accessories.find((accessory) => accessory.name === name)
        : null;

      if (accessory) {
        suiFrenAccessories.push(accessory);
      }
    }
  }
  return suiFrenAccessories;
}

/**
 * Helper function to map a SuiFren object type in the format of
 * SuiFren<Type> to a SuiFrenType enum member
 *
 * @example getSuiFrenTypeFromObjectType('SuiFren<Capy>') -> SuiFrenType.CAPY
 */
export function getSuiFrenTypeFromObjectType(suiFrenObjectType: string) {
  const frenObjectType = extractBaseFrenType(suiFrenObjectType);
  if (frenObjectType === CAPY_TYPE) {
    return SuiFrenType.CAPY;
  } else if (frenObjectType === BULLSHARK_TYPE) {
    return SuiFrenType.BULLSHARK;
  }
  return undefined;
}

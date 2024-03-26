export type AccessoryShopCategory =
  | "head-space"
  | "under-the-sui"
  | "artist"
  | "shirts-and-jackets"
  | "bottoms"
  | "tchotchkes"
  | "footwear"
  | "cyber-frens"
  | "suifties"
  | "super-stars"
  | "sui-magicians"
  | "sui-specs";

export type AccessoryDesigner = "mysten-labs";

export type V1AccessoryMetadata = { version: "v1" };

export type V2AccessoryMetadata = {
  version: "v2";
  accessoryCreatorType: (packageId: string) => string;
  acceptedTypes: string[];
};

export type AccessoryMetadata = {
  type: string;
  category: string;
  renderOptions: Record<string, any>;
  name: string;
  price: number;
  quantity: number | null;
  description: string;
  collection: string;
  shopCategories: AccessoryShopCategory[];
  designer: AccessoryDesigner;
  // flag accessories that is not on chain yet.
} & (V1AccessoryMetadata | V2AccessoryMetadata);

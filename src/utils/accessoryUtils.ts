export type AccessoryMetadata = {
  type: string;
  category: string;
  renderOptions: Record<string, any>;
  name: string;
  price: number;
  quantity: number | null;
  description: string;
  collection: string;
};

export function getAccessoriesByType(accessories: AccessoryMetadata[]) {
  return accessories.reduce<Record<string, AccessoryMetadata>>(
    (accumulator, accessory) => {
      accumulator[accessory.type] = accessory;
      return accumulator;
    },
    {}
  );
}

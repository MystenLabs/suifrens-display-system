/**
 * A helper function to extract the inner type from a SuiFren object type
 *
 * @example extractBaseFrenType('SuiFren<Capy>') => 'Capy'
 */
export function extractBaseFrenType(type: string) {
  return type.split("<")[1].split(">")[0];
}

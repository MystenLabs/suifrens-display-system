export function assertUnreachable(value: never): never {
  throw new Error(`ERROR! Encountered an unexpected value: ${value}`);
}

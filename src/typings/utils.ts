/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-empty-interface */
/**
 * Omits properties from a type
 * @template T Object
 * @template K Union of T keys
 */
export type Omit<T, U> = T extends any ? Pick<T, Exclude<keyof T, U>> : never;

/**
 * Merge two types into a new type. Keys of the second type overrides keys of the first type.
 *
 * @template FirstType - The first type
 * @template SecondType - The second type
 */
export type Merge<FirstType, SecondType> = Omit<FirstType, keyof SecondType> &
  SecondType;

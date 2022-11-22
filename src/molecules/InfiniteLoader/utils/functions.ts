export const isItemLoaded = (
  index: number,
  hasNextPage: boolean | undefined,
  options: Array<any>
) => !hasNextPage || index < options.length;

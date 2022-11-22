import { formatRelative } from "date-fns";

export const getRelativeTimeFromTimestamp = (timestamp: number) => {
  if (timestamp) {
    return formatRelative(timestamp, new Date());
  }
  return "";
};

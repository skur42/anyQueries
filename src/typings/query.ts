import { Merge } from "./utils";

export type Query = {
  query: string;
  data: any;
};

export type SavedQuery = Merge<
  {
    id: number;
    name: string;
    createdAt: any;
  },
  Query
>;

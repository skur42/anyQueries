import { useCallback } from "react";
import { useQueryManagement } from "../../../contexts/QueryManagement";
import { SavedQuery } from "../../../typings/query";
import { getRelativeTimeFromTimestamp } from "../../../utils/datetime";
import QueryDetails from "../../QueryDetails";

type SingleQueryProps = {
  query: SavedQuery;
  bgColor: string;
  color: string;
};

export const SingleQuery = ({ query, bgColor, color }: SingleQueryProps) => {
  const {
    state: { expandedQuery },
    actions: { setExpandedQuery },
  } = useQueryManagement();

  const handleSetExpandedQuery = useCallback(() => {
    setExpandedQuery(query);
  }, [query, setExpandedQuery]);

  return (
    <div>
      <div className={`flex w-full rounded-xl text-sm ${bgColor}`}>
        <div className={`w-1/3 px-6 py-4 ${color}`}>{query.name}</div>
        <div className={`w-1/3 px-6 py-4 ${color}`}>
          {getRelativeTimeFromTimestamp(query.createdAt)}
        </div>
        <button
          className={`w-1/3 px-6 py-4 ${color}`}
          onClick={handleSetExpandedQuery}
        >
          {`View dashboard >`}
        </button>
      </div>
      {expandedQuery && expandedQuery?.id === query.id ? (
        <div
          style={{ marginTop: "-0.6rem" }}
          className="bg-blue-50 p-6 rounded-b-lg"
        >
          <QueryDetails />
        </div>
      ) : null}
    </div>
  );
};

import { useEffect } from "react";
import { useQueryManagement } from "../../contexts/QueryManagement";
import { hydrate } from "../../utils/persist";
import { SingleQuery } from "./atoms";

export const Dashboards = () => {
  const {
    state: { savedQueries },
    actions: { setCurrentQuery, setSavedQueries },
  } = useQueryManagement();

  useEffect(() => {
    setCurrentQuery();
  }, [setCurrentQuery]);

  useEffect(() => {
    const localSavedQueries = hydrate<any>("savedQueries");
    setSavedQueries(localSavedQueries?.value ?? []);
  }, [setSavedQueries]);

  return (
    <div>
      {savedQueries.map((query, index) => {
        return (
          <SingleQuery
            key={index}
            query={query}
            bgColor={index % 2 === 0 ? "bg-black" : "bg-white"}
            color={index % 2 === 0 ? "text-white" : "text-black"}
          />
        );
      })}
    </div>
  );
};

export default Dashboards;

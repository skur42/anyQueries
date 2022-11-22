import { useCallback, useState } from "react";
import sampleCSV from "../../constants/sampleCsv";
import { useQueryManagement } from "../../contexts/QueryManagement";
import { Button } from "../../molecules/Button";
import { persist } from "../../utils/persist";

export const Editor = () => {
  const {
    state: { currentQuery, savedQueries },
    actions: { setCurrentQuery, setSavedQueries },
  } = useQueryManagement();

  const [query, setQuery] = useState<string>("");

  const handleQueryChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const val = event?.target?.value;
      setQuery(val);
    },
    []
  );

  const handleExecuteQuery = useCallback(() => {
    if (currentQuery?.query !== query) {
      console.log({
        query,
        data: sampleCSV[Math.floor(Math.random() * sampleCSV.length)],
      });
      setCurrentQuery({
        query,
        data: sampleCSV[Math.floor(Math.random() * sampleCSV.length)],
      });
    }
  }, [query, currentQuery, setCurrentQuery]);

  const handleSaveQuery = useCallback(() => {
    if (currentQuery) {
      const currentSavedQueries = [
        ...savedQueries,
        {
          id: savedQueries.length + 1,
          name: `Query ${savedQueries.length + 1}`,
          createdAt: Date.now(),
          ...currentQuery,
        },
      ];
      setSavedQueries(currentSavedQueries);
      persist("savedQueries", currentSavedQueries);
    }
  }, [currentQuery, savedQueries, setSavedQueries]);

  return (
    <div>
      <textarea
        style={{ resize: "none" }}
        className="w-full h-40 bg-gray-100 border-solid border-2 border-gray-300 rounded-lg px-6 py-4"
        placeholder="Enter a query"
        onChange={handleQueryChange}
        value={query}
      />
      <div className="mt-4 flex items-center w-full justify-end">
        <Button
          title="Save current query"
          onClick={handleSaveQuery}
          disabled={!Boolean(query.length) || !Boolean(currentQuery?.query)}
          variant="secondary"
          style={{ marginRight: "1.4rem" }}
        />
        <Button
          title="Execute"
          onClick={handleExecuteQuery}
          disabled={!Boolean(query.length)}
        />
      </div>
    </div>
  );
};

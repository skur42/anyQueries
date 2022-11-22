import { useQueryManagement } from "../../contexts/QueryManagement";
import CSVTable from "../../organisms/CSVTable/CSVTable";

export const QueryDetails = () => {
  const {
    state: { expandedQuery },
  } = useQueryManagement();

  return (
    <div className="w-full">
      <textarea
        style={{ resize: "none" }}
        className="w-full h-30 bg-gray-100 border-solid border-2 border-gray-300 rounded-lg px-6 py-4"
        placeholder="Enter a query"
        disabled
        value={expandedQuery?.query}
      />
      <div className="mt-2 flex items-center w-full justify-end">
        <CSVTable
          data={expandedQuery?.data}
          csvDelimiter=","
          tableClassName="table table-striped table-hover"
        />
      </div>
    </div>
  );
};

export default QueryDetails;

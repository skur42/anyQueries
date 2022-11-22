import { useQueryManagement } from "../../contexts/QueryManagement";
import CSVTable from "../../organisms/CSVTable/CSVTable";
import { Editor } from "../../organisms/Editor";

export const Home = () => {
  const {
    state: { currentQuery },
  } = useQueryManagement();

  console.log({ currentQuery });

  return (
    <div className="w-full">
      <Editor />
      <div className="mt-12">
        {currentQuery?.data ? (
          <CSVTable
            data={currentQuery?.data}
            csvDelimiter=","
            tableClassName="table table-striped table-hover"
          />
        ) : null}
      </div>
    </div>
  );
};

export default Home;

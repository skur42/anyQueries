import { parseCsvToRowsAndColumn } from "../../utils/helper";

const CSVTable = ({
  data,
  csvDelimiter,
  hasHeader,
  tableClassName,
  tableRowClassName,
  tableColumnClassName,
  rowKey,
  colKey,
  renderCell,
}: any) => {
  const rowsWithColumns = parseCsvToRowsAndColumn(data.trim(), csvDelimiter);
  let headerRow = undefined;

  if (hasHeader) {
    headerRow = rowsWithColumns.splice(0, 1)[0];
  }

  const renderTableHeader = (row: any) => {
    if (row && row.map) {
      return (
        <thead className="w-full bg-gray-200 sticky top-0">
          <tr>
            {row.map((column: any, i: any) => (
              <th
                key={`header-${i}`}
                className="w-max whitespace-nowrap px-4 py-4 text-left"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
      );
    }
  };

  const renderTableBody = (rows: any) => {
    if (rows && rows.map) {
      return (
        <tbody>
          {rows.map((row: any, rowIdx: any) => (
            <tr
              className={`${tableRowClassName} border-b border-gray-200`}
              key={typeof rowKey === "function" ? rowKey(row, rowIdx) : rowIdx}
            >
              {row.map &&
                row.map((column: any, colIdx: any) => (
                  <td
                    className={`${tableColumnClassName} w-max whitespace-nowrap px-4 py-4`}
                    key={
                      typeof rowKey === "function"
                        ? colKey(row, colIdx, rowIdx)
                        : column[colKey]
                    }
                  >
                    {typeof renderCell === "function"
                      ? renderCell(column, colIdx, rowIdx)
                      : column}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      );
    }
  };

  return (
    <div className="w-full h-80 overflow-scroll bg-white text-sm border-2 border-gray-200 rounded-xl">
      <table className={`csv-html-table ${tableClassName} w-full relative`}>
        {renderTableHeader(headerRow)}
        {renderTableBody(rowsWithColumns)}
      </table>
    </div>
  );
};

CSVTable.defaultProps = {
  data: "",
  rowKey: (row: any, rowIdx: any) => `row-${rowIdx}`,
  colKey: (col: any, colIdx: any, rowIdx: any) => `col-${colIdx}`,
  hasHeader: true,
  csvDelimiter: "\t",
  tableClassName: "",
  tableRowClassName: "",
  tableColumnClassName: "",
};

export default CSVTable;

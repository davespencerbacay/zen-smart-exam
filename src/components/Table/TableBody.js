import React from "react";
import TableIndicator from "./TableIndicator";

const TableBody = (props) => {
  const { tableData, isLoading, onDelete } = props;

  if (isLoading) {
    return <TableIndicator colSpan={5} mode="loading" />;
  } else {
    return tableData && tableData.length === 0 ? (
      <TableIndicator colSpan={4} mode="noData" />
    ) : (
      <tbody>
        {tableData.map((data) => {
          return (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.userId}</td>
              <td>{data.title}</td>
              <td>
                <button
                  onClick={() => onDelete(data.id)}
                  className="btn btn-sm btn-outline-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    );
  }
};

export default TableBody;

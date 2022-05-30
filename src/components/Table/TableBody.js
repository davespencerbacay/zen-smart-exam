import React from "react";

const TableIndicator = (props) => {
  return (
    <tbody>
      <tr colSpan={props.colSpan}>
        <td>{props.mode === "loading" ? "Loading ..." : "No data found."}</td>
      </tr>
    </tbody>
  );
};

const TableBody = (props) => {
  const { tableData, isLoading } = props;

  if (isLoading) return <TableIndicator colSpan={5} mode="loading" />;

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
              <button>Delete</button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;

import React from "react";

const TableLoading = (props) => {
  return (
    <tr>
      <td>Loading ...</td>
    </tr>
  );
};

const TableBody = (props) => {
  const { tableData, isLoading } = props;
  console.log(tableData);

  if (isLoading) return <TableLoading colSpan={props.tableData.length} />;
  return (
    <tbody>
      {isLoading && <TableLoading colSpan={props.tableData.length} />}
      {tableData &&
        tableData.map((data) => {
          return (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.userId}</td>
              <td>{data.title}</td>
            </tr>
          );
        })}
    </tbody>
  );
};

export default TableBody;

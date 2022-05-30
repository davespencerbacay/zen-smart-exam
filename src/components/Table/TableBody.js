import React from "react";

const TableBody = (props) => {
  const { tableData, isLoading } = props;
  console.log(tableData);
  return (
    <tbody>
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

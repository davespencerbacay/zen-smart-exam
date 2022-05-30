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

export default TableIndicator;

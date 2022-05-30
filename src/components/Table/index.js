import React, { useState } from "react";
import { Table as ReactTable } from "react-bootstrap";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const tableHeader = [
  { name: "ID" },
  { name: "User ID" },
  { name: "Title" },
  { name: "Description" },
];

const Table = () => {
  return (
    <div className="table-container">
      <ReactTable responsive>
        <TableHeader tableHeader={tableHeader} />
        <TableBody />
      </ReactTable>
    </div>
  );
};

export default Table;

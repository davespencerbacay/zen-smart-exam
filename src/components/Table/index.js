import React, { useState, useEffect } from "react";
import { Table as ReactTable } from "react-bootstrap";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const tableHeader = [{ name: "ID" }, { name: "User ID" }, { name: "Title" }];

const Table = () => {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(process.env.REACT_APP_TODO_LIST_URI);
      const data = await response.json();
      setTableData(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const tableBodyProps = {
    tableData,
    isLoading,
  };

  return (
    <div className="table-container">
      <ReactTable responsive>
        <TableHeader tableHeader={tableHeader} />
        <TableBody {...tableBodyProps} />
      </ReactTable>
    </div>
  );
};

export default Table;

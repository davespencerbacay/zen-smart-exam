import React, { useState, useEffect } from "react";
import { Table as ReactTable } from "react-bootstrap";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import TablePagination from "./TablePagination";

const tableHeader = [{ name: "ID" }, { name: "User ID" }, { name: "Title" }];

const Table = () => {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const taskPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastTask = currentPage * taskPerPage;
  const indexOfFirstTask = indexOfLastTask - taskPerPage;
  const currentTask = tableData?.slice(indexOfFirstTask, indexOfLastTask);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
    tableData: currentTask,
    isLoading,
  };

  const tablePaginationProps = {
    taskPerPage,
    totalTasks: tableData?.length,
    paginate: { handler: paginate, page: currentPage },
  };

  return (
    <div className="table-container">
      <ReactTable responsive>
        <TableHeader tableHeader={tableHeader} />
        <TableBody {...tableBodyProps} />
      </ReactTable>
      <TablePagination {...tablePaginationProps} />
    </div>
  );
};

export default Table;

import React, { useState, useEffect } from "react";
import { Table as ReactTable } from "react-bootstrap";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";
import TablePagination from "./TablePagination";
import TableSearch from "./TableSearch";
import TableModal from "./TableModal";
import { searchString, getRandomInt } from "../../helpers";

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

  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const closeHandler = () => setShowModal(false);
  const showHandler = () => setShowModal(true);

  const [todoName, setTodoName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(process.env.REACT_APP_TODO_LIST_URI);
      const data = await response.json();
      setTableData(data);
      setIsLoading(false);
    };

    if (search) {
      const filteredData = tableData.filter((data) =>
        searchString(data.title, search)
      );
      setTableData(filteredData);
    } else {
      fetchData();
    }
  }, [search]);

  const deleteHandler = (id) => {
    setTableData((data) => data.filter((x) => x.id != id));
  };

  const addHandler = () => {
    const todo = {
      title: todoName,
      id: getRandomInt(),
      userId: getRandomInt(),
    };
    let newTodo = [todo].concat(tableData);
    setTableData(newTodo);
  };

  const tableBodyProps = {
    tableData: currentTask,
    isLoading,
    onDelete: deleteHandler,
  };

  const tablePaginationProps = {
    taskPerPage,
    totalTasks: tableData?.length,
    paginate: { handler: paginate, page: currentPage },
  };

  const tableModalProps = {
    showModal,
    closeHandler,
    todoName,
    setTodoName,
    addHandler,
  };

  return (
    <div className="table-container">
      <button onClick={() => setShowModal(true)}>Add</button>
      <TableModal {...tableModalProps} />
      <TableSearch
        onSearch={(value) => {
          setSearch(value);
          setCurrentPage(1);
        }}
      />
      <ReactTable responsive>
        <TableHeader tableHeader={tableHeader} />
        <TableBody {...tableBodyProps} />
      </ReactTable>
      <TablePagination {...tablePaginationProps} />
    </div>
  );
};

export default Table;

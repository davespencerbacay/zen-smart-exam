import React from "react";
import { Pagination } from "react-bootstrap";

const TablePagination = (props) => {
  const { taskPerPage, totalTasks, paginate } = props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalTasks / taskPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination-container text-xs-center">
      <Pagination>
        <Pagination.Prev
          disabled={paginate.page === 1}
          onClick={() => paginate.handler(paginate.page - 1)}
        />
        {pageNumbers.map((number) => (
          <Pagination.Item
            key={number}
            onClick={() => paginate.handler(number)}
            active={number === paginate.page}
          >
            {number}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => paginate.handler(paginate.page + 1)}
          disabled={paginate.page === parseInt(pageNumbers.slice(-1))}
        />
      </Pagination>
    </div>
  );
};

export default TablePagination;

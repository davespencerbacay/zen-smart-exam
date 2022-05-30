import React from "react";

const TableHead = (props) => {
  const { tableHeader } = props;
  return (
    <thead>
      <tr>
        {tableHeader.map(({ name }, index) => {
          return <th key={index}>{name}</th>;
        })}
      </tr>
    </thead>
  );
};

export default TableHead;

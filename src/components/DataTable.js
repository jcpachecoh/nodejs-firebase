import React from "react";
import { Table } from "react-materialize";

const DataTable = ({employees}) => {
  return (
    <Table responsive={true} bordered={true}>
      <thead>
        <th data-field="name">Name</th>
        <th data-field="age">Age</th>
        <th data-field="salary">Salary</th>
      </thead>
      <tbody>
        {employees &&
          employees.map((emp, idx) => (
            <tr key={idx}>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
              <td>{emp.salary}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default DataTable;

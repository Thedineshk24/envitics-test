import React, { useState } from 'react';
import useGetEmployees from '../hooks/useGetEmployees';

const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(10);
  const [searchText, setSearchText] = useState('');
  const employees = useGetEmployees();

  const handleEdit = (employeeId) => {
    // handle edit button click
  };

  const handleDelete = (employeeId) => {
    // handle delete button click
  };

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.employee_name.toLowerCase().includes(searchText.toLowerCase()) ||
      employee.id.toString().includes(searchText)
  );

  const currentEmployees = filteredEmployees.slice((currentPage - 1) * employeesPerPage, currentPage * employeesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = Array.from({ length: Math.ceil(filteredEmployees.length / employeesPerPage) }, (_, i) => i + 1);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Employee Details</h1>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Search"
          className="form-control"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Profile</th>
            <th scope="col">Employee Name</th>
            <th scope="col">Salary</th>
            <th scope="col">Age</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((employee) => (
            <tr key={employee?.id}>
              <td>{employee?.id}</td>
              <td>
                <img src={employee?.profile_image} alt={`Profile of ${employee?.employee_name}`} />
              </td>
              <td>{employee?.employee_name}</td>
              <td>{employee?.employee_salary}</td>
              <td>{employee?.employee_age}</td>
              <td>
                <button className="btn btn-primary me-2" onClick={() => handleEdit(employee?.id)}>
                  Edit
                </button>
                <button className="btn btn-danger" onClick={() => handleDelete(employee?.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
              <button className="page-link" onClick={() => paginate(number)}>
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Table;

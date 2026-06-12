import  "react";
import { BrowserRouter, Routes, Route, useSearchParams } from "react-router-dom";
import "./Task13.css";

const users = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  email: `user${index + 1}@mail.com`,
  city: [
    "Chennai",
    "Salem",
    "Coimbatore",
    "Madurai",
    "Trichy",
  ][index % 5],
  role: ["Developer", "Designer", "Tester", "HR", "Manager"][
    index % 5
  ],
}));

function UsersTable() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const recordsPerPage = 5;

  const totalPages = Math.ceil(users.length / recordsPerPage);

  const startIndex = (currentPage - 1) * recordsPerPage;

  const currentUsers = users.slice(
    startIndex,
    startIndex + recordsPerPage
  );

  const changePage = (page) => {
    setSearchParams({ page });
  };

  return (
    <div className="container">
      <h1 className="heading">
        Task 13 – Pagination using useSearchParams
      </h1>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          {currentUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.city}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => changePage(currentPage - 1)}
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => changePage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default function Task13() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsersTable />} />
      </Routes>
    </BrowserRouter>
  );
}
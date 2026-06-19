import { useEffect, useState } from "react";
import "./Task15.css";

function Task15() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  const API = "https://jsonplaceholder.typicode.com/users";

  // READ
  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);

  // CREATE + UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
    };

    try {
      if (editId) {
        const response = await fetch(`${API}/${editId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        const updatedUser = await response.json();

        setUsers(
          users.map((user) =>
            user.id === editId ? updatedUser : user
          )
        );

        setEditId(null);
      } else {
        const response = await fetch(API, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });

        const newUser = await response.json();

        setUsers([
          ...users,
          {
            ...newUser,
            id: users.length + 1,
          },
        ]);
      }

      setName("");
      setEmail("");
    } catch (error) {
      console.log(error);
    }
  };

  // EDIT
  const handleEdit = (user) => {
    setName(user.name);
    setEmail(user.email);
    setEditId(user.id);
  };

  // DELETE
  const handleDelete = async (id) => {
    try {
      await fetch(`${API}/${id}`, {
        method: "DELETE",
      });

      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Task 15 – CRUD Operations</h1>

     

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="edit"
                    onClick={() => handleEdit(user)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <br></br>
    



       <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">
          {editId ? "Update User" : "Add User"}
        </button>
      </form>
    </div>
  );
}

export default Task15;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./UserList";
import UserDetails from "./UserDetails";
import "./Task12.css";

function Task12() {

  return (

    <BrowserRouter>

      <div className="app">

        <h1>User Management System</h1>

        <Routes>

          <Route path="/" element={<UserList />} />

          <Route 
            path="/user/:id" 
            element={<UserDetails />} 
          />

        </Routes>

      </div>

    </BrowserRouter>

  );

}

export default Task12;
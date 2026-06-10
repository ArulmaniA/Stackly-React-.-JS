import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import "./Task10.css";

import Home from "./Home";
import About from "./About";
import Services from "./Service";
import Contact from "./Contact";
import Profile from "./Profile";
import WebDevelopment from "./WebDevelopment";
import AppDevelopment from "./AppDevelopment";
import UIUXDesign from "./UIUXDesign";

function Task10() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Services
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Contact
        </NavLink>

        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Profile
        </NavLink>
      </nav>

      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />

          <Route path="/services" element={<Services/>}>
            <Route path="web-development" element={<WebDevelopment/>} />
            <Route path="app-development" element={<AppDevelopment/>} />
            <Route path="uiux-design" element={<UIUXDesign/>} />
          </Route>

          <Route path="/contact" element={<Contact/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Task10;
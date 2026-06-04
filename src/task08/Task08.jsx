import  { createContext, useState } from "react";
import Component1 from "./Component1";
import "./Task08.css";

 const AppContext = createContext();

function Task08() {
  const [theme, setTheme] = useState("light");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid Email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Minimum 6 characters";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    } else if (formData.phone.length < 10) {
      newErrors.phone = "Enter valid phone number";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Form Submitted Successfully");
    }
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        formData,
        setFormData,
        errors,
        handleSubmit,
      }}
    >
      <div className={`container ${theme}`}>
        <h1>Task 08 - useContext Hook</h1>

        <button className="theme-btn" onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </button>

        <Component1 />
      </div>
    </AppContext.Provider>
  );
}

export default Task08;

export { AppContext };
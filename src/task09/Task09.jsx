import  { useReducer } from "react";
import "./Task09.css";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  dob: "",
  address: "",
  city: "",
  country: "",
  errors: {},
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "SET_ERRORS":
      return {
        ...state,
        errors: action.payload,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

function Task09() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const validate = () => {
    let errors = {};

    if (!state.firstName.trim())
      errors.firstName = "First Name is required";

    if (!state.lastName.trim())
      errors.lastName = "Last Name is required";

    if (!state.email.trim()) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(state.email)
    ) {
      errors.email = "Invalid Email";
    }

    if (!state.phone.trim()) {
      errors.phone = "Phone Number is required";
    } else if (!/^\d{10}$/.test(state.phone)) {
      errors.phone = "Enter a valid 10-digit number";
    }

    if (!state.password) {
      errors.password = "Password is required";
    } else if (state.password.length < 6) {
      errors.password = "Minimum 6 characters";
    }

    if (!state.confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (state.password !== state.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (!state.dob) errors.dob = "Date of Birth is required";

    if (!state.address.trim())
      errors.address = "Address is required";

    if (!state.city.trim()) errors.city = "City is required";

    if (!state.country.trim())
      errors.country = "Country is required";

    return errors;
  };

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      dispatch({
        type: "SET_ERRORS",
        payload: validationErrors,
      });
    } else {
      alert("Form Submitted Successfully!");

      dispatch({
        type: "RESET",
      });
    }
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Task 09 - Form Using useReducer</h2>

        <div className="grid">
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={state.firstName}
              onChange={handleChange}
            />
            <span>{state.errors.firstName}</span>
          </div>

          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={state.lastName}
              onChange={handleChange}
            />
            <span>{state.errors.lastName}</span>
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={state.email}
              onChange={handleChange}
            />
            <span>{state.errors.email}</span>
          </div>

          <div>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={state.phone}
              onChange={handleChange}
            />
            <span>{state.errors.phone}</span>
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={state.password}
              onChange={handleChange}
            />
            <span>{state.errors.password}</span>
          </div>

          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={state.confirmPassword}
              onChange={handleChange}
            />
            <span>{state.errors.confirmPassword}</span>
          </div>

          <div>
            <input
              type="date"
              name="dob"
              value={state.dob}
              onChange={handleChange}
            />
            <span>{state.errors.dob}</span>
          </div>

          <div>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={state.city}
              onChange={handleChange}
            />
            <span>{state.errors.city}</span>
          </div>

          <div>
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={state.country}
              onChange={handleChange}
            />
            <span>{state.errors.country}</span>
          </div>

          <div className="full-width">
            <textarea
              name="address"
              placeholder="Address"
              value={state.address}
              onChange={handleChange}
            ></textarea>
            <span>{state.errors.address}</span>
          </div>
        </div>

        <div className="btn-group">
          <button type="submit">Submit</button>
          <button
            type="button"
            onClick={() => dispatch({ type: "RESET" })}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default Task09;
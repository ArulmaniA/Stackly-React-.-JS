import  { useContext } from "react";
import { AppContext } from "./Task08";

function Component3() {
  const {
    formData,
    setFormData,
    errors,
    handleSubmit,
  } = useContext(AppContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="card">
      <h2>Component 3 - Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />
        <span>{errors.name}</span>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        <span>{errors.email}</span>

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
        />
        <span>{errors.password}</span>

        <input
          type="text"
          name="phone"
          placeholder="Enter Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <span>{errors.phone}</span>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Component3;
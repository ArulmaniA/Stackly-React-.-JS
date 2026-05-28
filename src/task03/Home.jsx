function Home({ employees }) {
  return (
    <div>
      <h1 className="title">Employee Details</h1>

      <div className="card-container">
        {employees.map((employee, index) => (
          <div className="card" key={index}>
            <p><strong>Name:</strong> {employee.name} </p>
            <p><strong>Age:</strong> {employee.age}</p>
            <p><strong>Role:</strong> {employee.role}</p>
            <p><strong>Location:</strong> {employee.location}</p>
            <p><strong>Skills:</strong> {employee.skills}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
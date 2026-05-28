import "./task3.css";
import Login from "./Login";
import Home from "./Home";

function App() {
  const isLoggedIn = true;

  const employees = [
    {
      name: "Arulmani A",
      age: 22,
      role: "FullStack Developer",
      location: "Chennai",
      skills: "React, JavaScript, Sprin Boot, MySql",
    },
    {
      name: "Kabilan G",
      age: 26,
      role: "UI Designer",
      location: "Bangalore",
      skills: "Figma, Photoshop",
    },
    {
      name: "Karthik M",
      age: 28,
      role: "Backend Developer",
      location: "Hyderabad",
      skills: "Node.js, MongoDB",
    },
    
     
    {
      name: "Rahul R",
      age: 27,
      role: "Software Tester",
      location: "Salem",
      skills: "Testing, Automation",
    },
  ];

  return (
    <div className="container">
      {isLoggedIn ? (<Home employees={employees} />) : ( <Login /> )}
    </div>
  );
}

export default App;
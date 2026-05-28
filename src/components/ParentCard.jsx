import "react";
import "./ParentCard.css";
import ChildCard from "./ChildCard.jsx";

function App() {
  return (
    <div className="container">
      <h1>Profile Card</h1>

      <div className="card-container">


        <ChildCard
          name="Arulmani A"
          age="22"
          role="FullStack Developer"
          location="Salem"
          skills="HTML, CSS, JavaScript, React, Java, Spring Boot, MySql"
        />

        <ChildCard
          name="Kabilan G"
          age="22"
          role="UI/UX Designer"
          location="Chennai"
          skills="Figma, Photoshop, Canva"
        />

        <ChildCard
          name="Rahul R"
          age="23"
          role="Full Stack Developer"
          location="Bangalore"
          skills="React, Node.js, MongoDB"
        />


        
      </div>
    </div>
  );
}

export default App;
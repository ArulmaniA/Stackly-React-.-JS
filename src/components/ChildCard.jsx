import "react";

function ChildCard(props) {
  return (
    <div className="card">
      <p>
        <strong>Name:</strong><span className="strong"> {props.name}</span>
      </p>

      <p>
        <strong>Age:</strong> {props.age}
      </p>

      <p>
        <strong>Role:</strong> {props.role}
      </p>

      <p>
        <strong>Location:</strong> {props.location}
      </p>

      <p>
        <strong>Skills:</strong> {props.skills}
      </p>
    </div>
  );
}

export default ChildCard;
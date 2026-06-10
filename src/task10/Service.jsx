import { Link, Outlet } from "react-router-dom";

function Services() {
  return (
    <div>
      <h1>Our Services</h1>

      <p>
        We offer a wide range of digital solutions designed to help businesses
        establish a strong online presence and deliver exceptional user
        experiences. Our team focuses on creating modern, scalable, and
        user-friendly applications tailored to client requirements.
      </p>

      <br />

      

      <h2>Service Categories</h2>
      <p>
        Click any of the services below to learn more about our specialized
        offerings:
      </p>

      <div className="service-links">
        <Link to="web-development">Web Development</Link>
        <Link to="app-development">App Development</Link>
        <Link to="uiux-design">UI/UX Design</Link>
      </div>

      <br />

      

      <p>
        Select a service category above to view detailed information about each
        service through nested routing.
      </p>

      <hr style={{ margin: "20px 0" }} />

      <Outlet />
    </div>
  );
}

export default Services;
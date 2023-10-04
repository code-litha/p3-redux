import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand>MovieApp</Navbar.Brand>
        <Nav className="me-auto">
          <NavLink
            className={"nav-link"}
            to="/"
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "inherit",
                fontWeight: isActive ? "500" : "inherit",
              };
            }}
          >
            Home
          </NavLink>
          <NavLink
            className={"nav-link"}
            to="/movies"
            style={({ isActive }) => {
              return {
                color: isActive ? "red" : "inherit",
                fontWeight: isActive ? "500" : "inherit",
              };
            }}
          >
            Movies
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;

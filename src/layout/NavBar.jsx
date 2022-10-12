import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Outlet } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";

function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className=" mx-1 ">
        <Container className=" px-5">
          <Navbar.Brand
            as={Link}
            to="/"
            className=" text-uppercase h1 position-fixed start-50 translate-middle-x "
          >
            Boutique
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/shop">
                Shop
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/cart">
                <FaShoppingCart className=" pe-1 pt-1 h5" />
                Cart
              </Nav.Link>
              <Nav.Link as={Link} to="/login">
                <FaUser className="pe-1 h5 pt-1" />
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet />
      </section>
    </>
  );
}

export default NavBar;

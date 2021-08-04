import React, { useState } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="mb-3">
      <Navbar className="navbar navbar-dark bg-dark" expand="md">
        <div className="container">
          <NavbarBrand>
            <Link to="/" className="navbar-brand">
              Aplikasi Produk
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/produks" className="nav-link">
                    Produk
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link
                    to="/login"
                    className="nav-link btn btn-outline-secondary"
                  >
                    <FaSignOutAlt title="Logout" />
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import herbal from "../../assets/herbal.svg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Button } from "semantic-ui-react";
import SearchBar from "../searchBar/SearchBar";

const NavbarWeb = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const myuser = JSON.parse(localStorage.getItem("myuser"));
  const loginUser = useSelector((state) => state.loginReducer.loginUser);
  const navigate = useNavigate();

  const doLogout = () => {
    if (myuser !== null) {
      localStorage.removeItem("myuser");
      toast.warn("Logged out!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="md"
      style={{ backgroundColor: "gainsboro" }}
    >
      <Navbar.Brand>
        <img
          src={herbal}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="logo"
        />
        Ayurvedic Medicine
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mr-auto">
          <Button inverted color="olive" as={Link} to={"/home"}>
            Home
          </Button>
          <Button inverted color="purple" as={Link} to={"/medicine/all"}>
            Products
          </Button>

          <NavDropdown title="Category" id="category-dropdown">
            <NavDropdown.Item
              as={Link}
              to={"/medicine/getByMedicineCategory/Vati"}
            >
              Vati
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to={"/medicine/getByMedicineCategory/Bhasma"}
            >
              Bhasma
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to={"/medicine/getByMedicineCategory/Arishta"}
            >
              Arishta
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="d-flex align-items-center">
          <SearchBar />
          {myuser !== null ? (
            <>
              <Button
                inverted
                color="orange"
                as={Link}
                to={`/customer/${myuser.userId}`}
              >
                My profile
              </Button>

              <div className="d-flex align-items-center">
                <Button inverted color="violet" onClick={doLogout}>
                  Logout
                </Button>

                <ToastContainer
                  position="top-center"
                  autoClose={1000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="colored"
                />
              </div>
            </>
          ) : (
            <>
              <Button
                className="Register-button-nav"
                inverted
                color="blue"
                as={Link}
                to={"/register"}
              >
                Sign up
              </Button>
              <Button
                className="Login-button-nav"
                inverted
                color="teal"
                as={Link}
                to={"/login"}
              >
                Login
              </Button>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarWeb;

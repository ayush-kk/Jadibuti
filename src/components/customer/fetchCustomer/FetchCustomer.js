import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCustomer } from "../../../store/actions/CustomerActions";
import { Link } from "react-router-dom";
import "./FetchCustomer.css";
import Sidebar from "../sidebar/Sidebar";
import NavbarWeb from "../../navbar/NavbarWeb";
import FooterWeb from "../../footer/FooterWeb";
import { Row, Col } from "reactstrap";
import { Content, Footer, Header } from "rsuite";

function FetchCustomer() {
  const customer = useSelector((state) => state.CustomerReducer.customer);
  const dispatch = useDispatch();
  const { userId } = useParams();

  useEffect(() => {
    dispatch(fetchCustomer(userId));
  }, [userId]);

  return (
    <>
      <Header>
        <NavbarWeb />
      </Header>
      <Content>
        <Row>
          <Col md={4}>
            {
              customer!==null &&
              <Sidebar
              firstName={customer.firstName}
              lastName={customer.lastName}
              gender={customer.gender}
            />
            }
            
          </Col>
          <Col md={8}>
            {
              customer!==null &&
              <form className="customer-form">
              <div className="customer-form__left">
                <h3 class="profile-heading">Profile Info</h3>
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={customer.firstName}
                  readOnly
                />

                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={customer.lastName}
                  readOnly
                />

                <label htmlFor="age">Age:</label>
                <input
                  type="text"
                  id="age"
                  name="age"
                  value={customer.age}
                  readOnly
                />

                <label htmlFor="gender">Gender:</label>
                <input
                  type="text"
                  id="gender"
                  name="gender"
                  value={customer.gender}
                  readOnly
                />

                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={customer.email}
                  readOnly
                />

                <Link to={`/customer/update/${customer.userId}`}>
                  Update Profile
                </Link>
              </div>
              <div className="customer-form__right">
                <h3 class="profile-heading">Address Info</h3>
                <label htmlFor="hno">House Number:</label>
                <input
                  type="text"
                  id="hno"
                  name="hno"
                  value={customer.address.houseNumber}
                  readOnly
                />

                <label htmlFor="landmark">Landmark:</label>
                <input
                  type="text"
                  id="landmark"
                  name="landmark"
                  value={customer.address.landmark}
                  readOnly
                />

                <label htmlFor="street">Street:</label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  value={customer.address.street}
                  readOnly
                />

                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={customer.address.city}
                  readOnly
                />

                <label htmlFor="state">State:</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={customer.address.state}
                  readOnly
                />

                <label htmlFor="pincode">Pincode:</label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={customer.address.pinCode}
                  readOnly
                />

                <Link to={`/customer/update/address/${customer.userId}`}>
                  Update Address
                </Link>
              </div>
            </form>
            }
            
          </Col>
        </Row>
      </Content>
      <Footer>
        <FooterWeb />
      </Footer>
    </>
  );
}

export default FetchCustomer;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../updateCustomer/UpdateCustomer.css";
import axios from "axios";
import { updateAddress } from "../../../store/actions/CustomerActions";
import Sidebar from "../sidebar/Sidebar";
import Header from "rsuite/Header";
import Content from "rsuite/Content";
import Footer from "rsuite/Footer";
import NavbarWeb from "../../navbar/NavbarWeb";
import FooterWeb from "../../footer/FooterWeb";
import { updateCustomer } from "../../../store/actions/CustomerActions";


import { Row,Col } from "reactstrap";

function UpdateAddress() {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const [uid, setUid] = useState('');
  const [cage, setCAge] = useState('');
  const [cgender, setCGender] = useState('');
  const [cemail, setCEmail] = useState('');
  const [cphoneNumber, setCPhoneNumber] = useState('');
  const [cfirstName, setCFirstName] = useState('');
  const [clastName, setCLastName] = useState('');
  const [cusername, setCUsername] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [chno, setCHno] = useState('');
  const [cstreet, setCStreet] = useState('');
  const [clandmark, setCLandmark] = useState('');
  const [ccity, setCCity] = useState('');
  const [cstate, setCState] = useState('');
  const [cpincode, setCPincode] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    axios.get("http://localhost:8080/customer/" + userId)
      .then(
        resp => {
          setUid(resp.data.userId);
          setCAge(resp.data.age);
          setCGender(resp.data.gender);
          setCEmail(resp.data.email);
          setCPhoneNumber(resp.data.phoneNumber);
          setCFirstName(resp.data.firstName);
          setCLastName(resp.data.lastName);
          setCUsername(resp.data.username);
          setCPassword(resp.data.password);
          setCHno(resp.data.address.houseNumber);
          setCStreet(resp.data.address.street);
          setCLandmark(resp.data.address.landmark);
          setCCity(resp.data.address.city);
          setCState(resp.data.address.state);
          setCPincode(resp.data.address.pinCode);
          setRole(resp.data.role);
        });
  }, [userId])


  const update = () => {
    const payload = {
      userId: uid,
      age: cage,
      gender: cgender,
      email: cemail,
      phoneNumber: cphoneNumber,
      firstName: cfirstName,
      lastName: clastName,
      username: cusername,
      password: cpassword,
      role: role,
      address: {
        houseNumber: chno,
        street: cstreet,
        landmark: clandmark,
        city: ccity,
        state: cstate,
        pinCode: cpincode,
      },
    };
    dispatch(updateCustomer(payload));
  };
  return (
    <>
      <Header>
        <NavbarWeb />
      </Header>
      <Content>
        <Row>
          <Col md={4}>
            <Sidebar
              firstName={cfirstName}
              lastName={clastName}
              gender={cgender}
            />
          </Col>
          <Col md={8}>
            <div className="container">
              <form className="form-box">
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label htmlFor="userId">UserId</label>
                    <input
                      type="text"
                      name="userId"
                      id="userId"
                      value={userId}
                      disabled
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="chno">House Number</label>
                    <input
                      type="text"
                      name="chno"
                      id="chno"
                      value={chno}
                      onChange={(event) => setCHno(event.target.value)}
                    />
                  </div>

                  <div className="form-group col-md-6">
                    <label htmlFor="cstreet">Street</label>
                    <input
                      type="text"
                      name="cstreet"
                      id="cstreet"
                      value={cstreet}
                      onChange={(event) => setCStreet(event.target.value)}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="clandmark">Landmark</label>
                    <input
                      type="text"
                      name="clandmark"
                      id="clandmark"
                      value={clandmark}
                      onChange={(event) => setCLandmark(event.target.value)}
                    />
                  </div>

                  <div className="form-group col-md-6">
                    <label htmlFor="ccity">City</label>
                    <input
                      type="text"
                      name="ccity"
                      id="ccity"
                      value={ccity}
                      onChange={(event) => setCCity(event.target.value)}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="cstate">State</label>
                    <input
                      type="text"
                      name="cstate"
                      id="cstate"
                      value={cstate}
                      onChange={(event) => setCState(event.target.value)}
                    />
                  </div>

                  <div className="form-group col-md-6">
                    <label htmlFor="cpincode">PinCode</label>
                    <input
                      type="text"
                      name="cpincode"
                      id="cpincode"
                      value={cpincode}
                      onChange={(event) => setCPincode(event.target.value)}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <button className="btn btn-primary" onClick={update}>
                    Update
                  </button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Content>

      <Footer>
        <FooterWeb />
      </Footer>
    </>
  );
}
export default UpdateAddress;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { updateCustomer } from "../../../store/actions/CustomerActions";
import Sidebar from "../sidebar/Sidebar";
import Header from "rsuite/Header";
import Content from "rsuite/Content";
import Footer from "rsuite/Footer";
import NavbarWeb from "../../navbar/NavbarWeb";
import FooterWeb from "../../footer/FooterWeb";

import "../updateCustomer/UpdateCustomer.css";
import { Row, Col } from "reactstrap";
import axios from "axios";

function UpdateCustomer() {
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
            <div className="form-container-update">
              <form className="form-box">
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label htmlFor="cuid">UserId</label>
                    <input
                      type="number"
                      name="userId"
                      id="userId"
                      value={uid}
                      disabled
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="cfirstName">First Name</label>
                    <input
                      type="text"
                      name="cfirstName"
                      id="cfirstName"
                      value={cfirstName}
                      onChange={(event) => setCFirstName(event.target.value)}
                    />
                  </div>

                  <div className="form-group col-md-6">
                    <label htmlFor="clastName">Last Name</label>
                    <input
                      type="text"
                      name="clastName"
                      id="clastName"
                      value={clastName}
                      onChange={(event) => setCLastName(event.target.value)}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="cage">Age</label>
                    <input
                      type="number"
                      name="cage"
                      id="cage"
                      value={cage}
                      onChange={(event) => setCAge(event.target.value)}
                    />
                  </div>

                  <div className="form-group col-md-6">
                    <label htmlFor="cgender">Gender</label>
                    <select name='gen' value={cgender} onChange={event => setCGender(event.target.value)} id='gen'>
                      <option>---SELECT GENDER---</option>
                      <option value='male' >
                        MALE</option>
                      <option value='female'>
                        FEMALE</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="cemail">Email</label>
                    <input
                      type="email"
                      name="cemail"
                      id="cemail"
                      value={cemail}
                      onChange={(event) => setCEmail(event.target.value)}
                    />
                  </div>

                  <div className="form-group col-md-6">
                    <label htmlFor="cphoneNumber">Phone Number</label>
                    <input
                      type="tel"
                      name="cphoneNumber"
                      id="cphoneNumber"
                      value={cphoneNumber}
                      onChange={(event) => setCPhoneNumber(event.target.value)}
                      pattern='[0-9]{10}'
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
export default UpdateCustomer;

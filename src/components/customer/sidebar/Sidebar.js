import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col } from "reactstrap";


// import maleIcon from '../../../assets/maleIcon.jpg';
// import femaleIcon from '../../../assets/femaleIcon.jpg'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCustomer } from "../../../store/actions/CustomerActions";
import { useParams } from 'react-router-dom';

import "./Sidebar.module.css";
import maleIcon from "../../../assets/maleIcon.jpg";
import femaleIcon from "../../../assets/femaleIcon.jpg";
import { toast, ToastContainer } from "react-toastify";

function Sidebar({ firstName, lastName, gender }) {
  const myuser = JSON.parse(localStorage.getItem("myuser"));
  const iconSrc = gender === "male" ? maleIcon : femaleIcon;
  const customer = useSelector(state => state.CustomerReducer.customer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const doLogout = () => {
    if (myuser !== null) {
      localStorage.removeItem("myuser");
      toast.warn('Logged out!', {
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
      }, 1000)

    }
  };

  return (
    <div className="sidebar-container">
      <div className="greeting-container">
        <Row md={1} style={{ marginTop: 85 + "px" }}>
          <Col>

            <Row>
              <img src={iconSrc} alt="icon" className="img-icon" />

            </Row>
            <Row><div className="helo-text">Hello,</div>
              <div className="flname-text">
                {firstName+" "+lastName}
              </div>
            </Row>
            <Row>
              <div className="my-box">
                <div className="links-container">
                  <ul>
                    <li>
                      <Link to={`/customer/update/${myuser.userId}`}>Update Profile</Link>
                    </li>
                    <li>
                      <Link to={`/customer/update/address/${myuser.userId}`}>
                        Update Address
                      </Link>
                    </li>
                    <li>
                      <Link to={`/order/orderbyuserid/${myuser.userId}`}>
                        View Orders
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link
                        className="nav-link dropdown-toggle"
                        to=""
                        id="navbardrop"
                        data-toggle="dropdown"
                      >
                        Prescription
                      </Link>
                      <div className="dropdown-menu">
                        <Link
                          to={`/prescriptions/${myuser.userId}`}
                          className="dropdown-item"
                        >
                          View Prescriptions
                        </Link>
                        <Link to="/prescription/add" className="dropdown-item">
                          Add Prescription
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="logout-container">
                  <button className="logout-button" onClick={doLogout}>
                    Log Out
                  </button>
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
              </div>
            </Row>
          </Col>

        </Row>
      </div>



    </div>
  );
}

export default Sidebar;

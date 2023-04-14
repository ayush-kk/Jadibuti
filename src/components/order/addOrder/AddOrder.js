import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchCustomer } from "../../../store/actions/CustomerActions";
import { fetchMedicineById } from "../../../store/actions/MedicineAction";
// import asswagandha from "../../../assets/Ashvagandha.jpeg";
import { fetchPrescriptionsByUserId } from "../../../store/actions/PrescriptionAction";
import { addOrder } from "../../../store/actions/OrderAction";
import "./addorder.css";
import { Footer, Header } from "rsuite";
import NavbarWeb from "../../navbar/NavbarWeb";
import FooterWeb from "../../footer/FooterWeb";

function AddOrder() {
  const [noOfItems, setNoOfItems] = useState(0);
  const [status, setStatus] = useState("Ordered");
  const [totalCost, setTotalCost] = useState(0);
  const [orderDate, setOrderDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [delieveryDate, setDelieveryDate] = useState(
    new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 10)
  );
  const prescriptions = useSelector(
    (state) => state.prescriptionReducer.prescriptions
  );
  const medicine = useSelector(
    (state) => state.medicineReducer.selectedMedicine
  );
  const customer = useSelector((state) => state.CustomerReducer.customer);
  const myuser = JSON.parse(localStorage.getItem("myuser"));
  const [formErrors, setFormErrors] = useState({});

  const [prescriptionId, setPrescriptionId] = useState(0);
  const { medicineId } = useParams();

  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(() => {
    dispatch(fetchCustomer(myuser.userId));
    dispatch(fetchMedicineById(medicineId));
    dispatch(fetchPrescriptionsByUserId(myuser.userId));
  }, [myuser.userId, medicineId, dispatch]);

  const onPlaceOrder = () => {
    let errors = {};
    if (noOfItems < 1) {
      errors["noOfItemsError"] = "atleast one item should be there";
    }
    if (!prescriptionId) {
      errors["prescriptionIdError"] = "Please select prescription";
    }
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      const payload = {
        noOfItems: noOfItems,
        status: status,
        orderDate: orderDate,
        delieveryDate: delieveryDate,
        totalCost: totalCost,
        customer: {
          userId: myuser.userId,
        },
        medicine: {
          medicineId: medicineId,
        },
        prescription: {
          prescriptionId: prescriptionId,
        },
      };
      dispatch(addOrder(payload));
      nav("/medicine/all");
    }
  };

  return (
    <>
      <Header>
        <NavbarWeb />
      </Header>
      <div className="container order-add">
        <div className="row main-row">
          <div className="col ">
            <div className="row border align-items-start row-add-order">
              {customer !== null && (
                <div className="shipping-div">
                  <h5>Shipping to : </h5>
                  <p>
                    <b>Name :{customer.firstName + customer.lastName}</b>
                  </p>
                  <p>
                    {" "}
                    <span>Mobile:{customer.phoneNumber}</span>
                  </p>
                </div>
              )}
            </div>
            <div className="row border align-items-start">
              {customer !== null && (
                <div className="shipping-div">
                  <p>
                    <b>Address :</b>
                  </p>
                  <p>
                    <b>H.No:</b> {customer.address.houseNumber}
                  </p>
                  <p>
                    <b>Street:</b> {customer.address.street}
                  </p>
                  <p>
                    <b>Landmark:</b> {customer.address.landmark}
                  </p>
                  <p>
                    <b>State:</b> {customer.address.state}
                  </p>
                  <p>
                    <b>city:</b> {customer.address.city}
                  </p>
                  <p>
                    <b>Pin:</b> {customer.address.pinCode}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div class="col">
            <div className="row border align-items-start">
              <button className="btn btn-warning" onClick={onPlaceOrder}>
                <b>Place order</b>
              </button>
            </div>
            <div className="row border align-items-start">
              <div className="shipping-div">
                <div>
                  {medicine !== null && (
                    <div className="shipping-div">
                      <p>Product Name: {medicine.medicineName}</p>
                      <p>Price:₹{medicine.medicineCost}</p>
                      <p>Total amount : ₹{totalCost}</p>
                    </div>
                  )}
                </div>
                <div>
                  <div className="row">
                    <label htmlFor="noOfItems">No Of Items</label>
                    <div className="col-sm-10">
                      <input
                        className="form-control border"
                        type="number"
                        name="noOfItems"
                        value={noOfItems}
                        placeholder="Enter No of Items"
                        onChange={(event) => {
                          setNoOfItems(event.target.value);
                          setTotalCost(
                            event.target.value * medicine.medicineCost
                          );
                        }}
                      />
                      {formErrors.noOfItemsError && (
                        <div style={{ color: "red" }}>
                          {formErrors.noOfItemsError}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <label for="prescriptionId">Prescription</label>
                <select
                  className="border"
                  name="prescriptionId"
                  value={prescriptionId}
                  onChange={(event) => {
                    setPrescriptionId(event.target.value);
                  }}
                >
                  <option value="">---select---</option>
                  {prescriptions.length > 0 &&
                    prescriptions.map((prescription) => (
                      <option value={prescription.prescriptionId}>
                        Valid Upto {prescription.validationDate}
                      </option>
                    ))}
                </select>
                {formErrors.prescriptionIdError && (
                  <div style={{ color: "red" }}>
                    {formErrors.prescriptionIdError}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer style={{margin:"5%"}}>
        <FooterWeb />
      </Footer>
    </>
  );
}

export default AddOrder;

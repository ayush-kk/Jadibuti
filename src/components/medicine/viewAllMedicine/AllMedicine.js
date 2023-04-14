import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMedicine } from "../../../store/actions/MedicineAction";
import "./MedicineAll.css";
import { Link } from "react-router-dom";
import Header from "rsuite/Header";
import Content from "rsuite/Content";
import Footer from "rsuite/Footer";
import NavbarWeb from "../../navbar/NavbarWeb";
import FooterWeb from "../../footer/FooterWeb";
import { Button } from "react-bootstrap";

function AllMedicine() {
  const medicines = useSelector((state) => state.medicineReducer.medicines);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllMedicine());
  }, []);

  return (
    <>
      <Header style={{ marginBottom: "5%" }}>
        <NavbarWeb />
      </Header>
      <Content style={{ marginBottom: "5%" }}>
        <div>
          <div className="card-container">
            {medicines?.map((m) => (
              // The `key` prop is set to the `medicineId`
              // The medicine image is rendered using a Base64-encoded string
              <div
                key={m.medicineId}
                className="card"
                as={Link}
                to={`/medicine/${m.medicineId}`}
              >
                <img src={`data:image/jpeg;base64,${m.image}`} />
                <h2>{m.medicineName}</h2>
                <p>Cost: {m.medicineCost}</p>
                <p>Company: {m.companyName}</p>
                <p>Rating: {m.rating}</p>
                <Button as={Link} to={`/medicine/${m.medicineId}`}>
                  View Product
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Content>

      <Footer>
        <FooterWeb />
      </Footer>
    </>
  );
}

export default AllMedicine;

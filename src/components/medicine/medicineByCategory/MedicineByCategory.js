import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../../AppConstants";
import { Container, Row, Col } from "react-bootstrap";
import "./MedicineByCategory.css";
import Header from "rsuite/Header";
import Content from "rsuite/Content";
import Footer from "rsuite/Footer";
import NavbarWeb from "../../navbar/NavbarWeb";
import FooterWeb from "../../footer/FooterWeb";

function MedicineByCategory() {
  const [medicines, setMedicines] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/medicine/getByMedicineCategory/${categoryId}`)
      .then((response) => setMedicines(response.data))
      .catch((error) => console.log(error));
  }, [categoryId]);

  return (
    <>
      <Header style={{ marginBottom: "2%" }}>
        <NavbarWeb />
      </Header>
      <Content>
        <Container>
          <h2 className="category-heading">
            Medicines in Category {categoryId}
          </h2>
          <Row>
            {medicines.map((medicine) => (
              <Col sm={6} md={4} lg={3} key={medicine.medicineId}>
                <Link
                  to={`/medicine/${medicine.medicineId}`}
                  className="card-link"
                >
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{medicine.medicineName}</h5>
                      <p className="card-text">{medicine.description}</p>
                    </div>
                  </div>
                </Link>
              </Col>
            ))}
          </Row>
        </Container>
      </Content>

      <Footer style={{ marginTop: "20%" }}>
        <FooterWeb />
      </Footer>
    </>
  );
}

export default MedicineByCategory;

import Header from "rsuite/Header";
import Content from "rsuite/Content";
import Footer from "rsuite/Footer";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../../AppConstants";
import { Button } from "semantic-ui-react";
import NavbarWeb from "../../navbar/NavbarWeb";
import FooterWeb from "../../footer/FooterWeb";
import "./MedicineById.css";
import neem from "../../../assets/neem.jpg";
import ReactImageMagnify from "react-image-magnify";

function MedicineById() {
  const [medicine, setMedicine] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/medicine/getmedicinebyid/${id}`)
      .then((res) => setMedicine(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <Header style={{ marginBottom: "2%" }}>
        <NavbarWeb />
      </Header>
      <Content>
        <div className="medicine-container">
          {medicine !== undefined && (
            <div className="medicine-details">
              <div className="medicine-image" id="imageMagnifier">
                {/* used react image magnify */}
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "med image",
                      isFluidWidth: true,
                      src: `data:image/jpeg;base64,${medicine.image}`,
                    },
                    largeImage: {
                      src: `data:image/jpeg;base64,${medicine.image}`,
                      width: 1000,
                      height: 1000,
                    },
                  }}
                />
                <Button
                  className="btn-add"
                  color="green"
                  as={Link}
                  to={`/order/addorder/${id}`}
                >
                  Add to Cart
                </Button>
              </div>

              <div className="medicine-info">
                <h2>{medicine.medicineName}</h2>
                <p>
                  <span className="medicine-info-label">Cost:</span>{" "}
                  {`₹${medicine.medicineCost}`}
                </p>
                <p>
                  <span className="medicine-info-label">Company:</span>{" "}
                  {medicine.companyName}
                </p>
                <p>
                  <span className="medicine-info-label">Rating:</span>{" "}
                  {medicine.rating}
                </p>
                <p>
                  <span className="medicine-info-label">Manufacture Date:</span>{" "}
                  {medicine.manufactureDate}
                </p>
                <p>
                  <span className="medicine-info-label">Description:</span>
                </p>
                <ul className="medicine-description">
                  <li>
                    <span className="medicine-info-label">Ingredients:</span>{" "}
                    {medicine.description.ingredients}
                  </li>
                  <li>
                    <span className="medicine-info-label">Medicine Type:</span>{" "}
                    {medicine.description.medicineType}
                  </li>
                  <li>
                    <span className="medicine-info-label">Quantity:</span>{" "}
                    {medicine.description.quantity}
                  </li>
                  <li>
                    <span className="medicine-info-label">Category Name:</span>{" "}
                    {medicine.category.categoryName}
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div></div>
      </Content>

      <Footer style={{ marginTop: "2%" }}>
        <FooterWeb />
      </Footer>
    </>
  );
}

export default MedicineById;

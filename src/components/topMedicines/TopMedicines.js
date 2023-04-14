import React from "react";
import { Link } from "react-router-dom";
import { Card, Image, Button, Container, Header } from "semantic-ui-react";
import triphala from "../../assets/triphala.jpg";
import ashwagandha from "../../assets/Ashwagandha.webp";
import neem from "../../assets/neem.jpg";
import "./TopMedicines.css";

const TopMedicines = () => {
  const products = [
    { name: "Triphala", image: triphala, category: "Digestive" },
    { name: "Ashwagandha", image: ashwagandha, category: "Adaptogenic" },
    { name: "Neem", image: neem, category: "Antibacterial" },
  ];

  return (
    <div className="top-products-container">
      <Container>
        <Header as="h2" className="top-products-header">
          Our Top Products
        </Header>
        <p className="top-products-text">
          "Our Ayurvedic herbal supplements are formulated using traditional
          recipes and high-quality ingredients to promote natural healing and
          enhance overall wellness."
        </p>
        <Card.Group itemsPerRow={3} stackable>
          {products.map((product) => (
            <Card key={product.name} className="top-product-card">
              <Image
                src={product.image}
                alt={product.name}
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>{product.name}</Card.Header>
                <Card.Meta>{product.category}</Card.Meta>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Container>
      <div style={{ marginTop: "3%" }}>
        <Button
          primary
          className="top-product-button"
          as={Link}
          to={"/medicine/all"}
        >
          View All
        </Button>
      </div>
    </div>
  );
};

export default TopMedicines;

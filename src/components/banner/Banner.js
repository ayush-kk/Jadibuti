import React, { useEffect } from "react";
import $ from "jquery";
import "./Banner.css";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

function Banner() {
  useEffect(() => {
    $(".pa-banner-text").addClass("show");
  }, []);

  return (
    <section>
      <div className="pa-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-6">
              <div className="pa-banner-text">
                <h4 className="pa-banner-category">जड़ीबूटी</h4>
                <h2>
                  Ayurveda is about treating the individual, not the disease.
                </h2>
                <p>
                  Ayurvedic medicine is unique in that it takes into account a
                  person's individual constitution or dosha, which is determined
                  by their unique combination of physical, emotional, and mental
                  characteristics. The three doshas are Vata (air and space),
                  Pitta (fire and water), and Kapha (earth and water). Each
                  dosha has its own unique set of qualities and characteristics,
                  and maintaining a balance among them is key to good health.
                </p>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;

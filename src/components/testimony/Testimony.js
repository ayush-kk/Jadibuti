import { useState, useEffect } from "react";
import peeyush from "../../assets/peeyush.jpg";
import namita from "../../assets/namita.jpg";
import ashneer from "../../assets/ashneer.jpg";
import "./Testimony.css";

function Testimony() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Peeyush Bansal",
      image: peeyush,
      text: "Since incorporating Ayurvedic medicine into my daily routine, I have seen a significant improvement in my overall well-being and feel more energized.",
    },
    {
      id: 2,
      name: "Ashneer Grover",
      image: ashneer,
      text: "After years of struggling with insomnia, I finally found relief through Ayurvedic remedies and now enjoy restful, rejuvenating sleep.",
    },
    {
      id: 3,
      name: "Namita Thapar",
      image: namita,
      text: "Ayurvedic medicine has helped me manage my chronic health condition naturally and with no side effects and feel more balanced and energized.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="client_section layout_padding-bottom"
      style={{ marginTop: "%" }}
    >
      <div
        className="container"
        style={{ backgroundColor: "white", fontFamily: "serif" }}
      >
        <div className="heading_container heading_center">
          <h2 style={{ fontSize: "50px", textAlign: "center" }}>Testimonial</h2>
        </div>
        <div
          id="carouselExample2Controls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`carousel-item ${
                  index === activeIndex ? "active" : ""
                }`}
              >
                <div className="row">
                  <div className="col-md-11 col-lg-10 mx-auto">
                    <div className="box">
                      <div className="img-box">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>
                      <div className="detail-box">
                        <div className="name">
                          <h6>{testimonial.name}</h6>
                        </div>
                        <p>{testimonial.text}</p>
                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimony;

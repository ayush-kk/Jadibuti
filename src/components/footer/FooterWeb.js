import { Link } from "react-router-dom";
import { Button, Container, Grid, Icon, Input } from "semantic-ui-react";
import "./Footer.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Check if email is not empty before displaying success message
    if (email) {
      // TODO: Implement your subscription logic here
      // Display success message using toast
      toast.success("😊 Subscribed successfully!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div className="footer_section">
      <Container>
        <Grid columns={4} stackable>
          <Grid.Column>
            <div className="footer_contact">
              <h4>Reach at..</h4>
              <div className="contact_link_box">
                <a href="https://goo.gl/maps/3oz3CczwW6UpYJFs8">
                  <Icon name="map marker" />
                  <span>Location</span>
                </a>
                <a href="">
                  <Icon name="phone" />
                  <span>Call 100100100</span>
                </a>
                <a href="mailto:jadibuti.med@gmail.com?subject=Contact">
                  <Icon name="mail" />
                  <span>jadibuti.med@gmail.com</span>
                </a>
              </div>
            </div>
            <div className="footer_social">
              <a href="https://www.facebook.com/Ayurvedainformation/">
                <Icon name="facebook" />
              </a>
              <a href="https://twitter.com/ayurveda">
                <Icon name="twitter" />
              </a>
              <a href="https://www.linkedin.com/company/ayurveda">
                <Icon name="linkedin" />
              </a>
              <a href="https://www.instagram.com/explore/tags/ayurveda/">
                <Icon name="instagram" />
              </a>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="footer_detail">
              <h4>About</h4>
              <p>
                जड़ीबूटी, the online ayurvedic store sells all kinds of
                ayurvedic medicine and ayurvedic products online from India's
                top most ayurvedic brands like Kottakkal Arya Vaidya Sala.
              </p>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className="footer_link_box">
              <h4>Links</h4>
              <div className="footer_links">
                <Button
                  className="ui inverted green basic button"
                  as={Link}
                  to={"/home"}
                  style={{ marginBottom: "10px" }}
                >
                  Home
                </Button>
                <br />
                <Button
                  className="ui inverted green basic button"
                  as={Link}
                  to={"/about-us"}
                  style={{ marginBottom: "10px" }}
                >
                  About
                </Button>
                <br />
                <Button
                  className="ui inverted green basic button"
                  as={Link}
                  to={"/login"}
                  style={{ marginBottom: "10px" }}
                >
                  Login
                </Button>
                <br />
                <Button
                  className="ui inverted green basic button"
                  as={Link}
                  to={"/register"}
                  style={{ marginBottom: "10px" }}
                >
                  Register
                </Button>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <h4>Newsletter</h4>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
              <button type="submit">Subscribe</button>
            </form>
          </Grid.Column>
        </Grid>
        <div className="footer-info">
          <p>
            &copy; <span id="displayYear"></span> All Rights Reserved By
            जड़ीबूटी
            <br />
            &copy; <span id="displayYear"></span> Distributed By Ayurveda Group
            5
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Footer;

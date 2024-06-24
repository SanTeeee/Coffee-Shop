import logo2 from "../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faYoutube,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

function Footer() {
  const [name, setName] = useState("");
  const [heading, setHeading] = useState("Subscribe");

  function handleHeading(event) {
    setName(event.target.value);
  }
  function handleClick(event) {
    if (!name.includes("@")) {
      setHeading("Please input a valid email");
    } else {
      setHeading("Thank you for subscribing");

      event.preventDefault();
    }
  }

  return (
    <div className="footerContainer" id="contact">
      <div className="footer1">
        <span>
          <img src={logo2} alt="" />
          <h1>Ngopi</h1>
        </span>
        <p>
          Discover tranquility at Ngopi a sanctuary for unwinding, where your
          evenings are perfected with relaxation and rich flavors.
        </p>
        <p>
          hello@ngopi.com<br></br> Phone : +01 23456789
        </p>
      </div>
      <div className="footer2">
        <div className="footer2Div">
          <div className="quickLinks">
            <h1>quick links</h1>
            <a href="#">services</a>
            <a href="#">portfolio</a>
            <a href="#">about us</a>
            <a href="#">testimonial</a>
          </div>
          <div className="resources">
            <h1>resources</h1>
            <a href="#">support</a>
            <a href="#">privacy policy</a>
            <a href="#">terms & conditions</a>
          </div>
          <div className="socialMedia">
            <h1>social media</h1>
            <div className="mediaFlex">
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} className="brands" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faXTwitter} className="brands" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} className="brands" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedinIn} className="brands" />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faYoutube} className="brands" />
              </a>
            </div>
          </div>
        </div>
        <form action="post">
          <label htmlFor="#myEMail">{heading}</label>
          <div className="icon">
            <input
              type="email"
              id="myEmail"
              placeholder="name@domain.com"
              value={name}
              onChange={handleHeading}
            />
            <div className="i">
              <FontAwesomeIcon icon={faEnvelope} className="brands" />
            </div>
            <a href="#" className="sendBtn">
              <button onClick={handleClick}>Subscribe</button>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Footer;

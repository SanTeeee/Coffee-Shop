import { useState } from "react";
import Logo from "../assets/NGOW-PEE COFFEE.png";
import Aos from "aos";
Aos.init();
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeHamburger = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header
      data-aos-easing="ease-in-sine"
      data-aos="fade-down"
      data-aos-offset="50"
      data-aos-delay="50"
      data-aos-duration="1000">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className={`navLinks` + `${isOpen ? "-True" : "-False"}`}>
        <a href="#products" onClick={closeHamburger}>
          Products
        </a>
        <a href="#aboutUs" onClick={closeHamburger}>
          About Us
        </a>
        <a href="#testimonial" onClick={closeHamburger}>
          Testimonial
        </a>
        <a href="#contact" onClick={closeHamburger}>
          Contact
        </a>
      </div>
      <nav className={isOpen ? "barTranslate" : ""} onClick={closeHamburger}>
        <span className="ham"></span>
        <span className="ham"></span>
        <span className="ham"></span>
      </nav>
    </header>
  );
}

export default Header;

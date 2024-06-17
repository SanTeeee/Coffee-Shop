import Logo from "../assets/Logo.png";
import Aos from "aos";
Aos.init();
function Header() {
  return (
    <header
      data-aos="fade-down"
      data-aos-offset="50"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out">
      <div className="logo">
        <img src={Logo} alt="" />
        <h1>Ngopi</h1>
      </div>
      <div className="navLinks">
        <a href="#products">Products</a>
        <a href="#aboutUs">About Us</a>
        <a href="#testimonial">Testimonial</a>
        <a href="#contact">Contact</a>
      </div>
      <nav className="hamburger ">
        <span className="ham"></span>
        <span className="ham"></span>
        <span className="ham"></span>
      </nav>
    </header>
  );
}

export default Header;

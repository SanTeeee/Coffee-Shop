import Logo from "../assets/Logo.png";

function Header() {
  return (
    <header>
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
      <nav class="hamburger">
        <span class="ham"></span>
        <span class="ham"></span>
        <span class="ham"></span>
      </nav>
    </header>
  );
}

export default Header;

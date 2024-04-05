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
        <a href="#">Contact</a>
      </div>
    </header>
  );
}

export default Header;

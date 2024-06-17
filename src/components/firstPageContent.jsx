import cof1 from "../assets/pexels-brigitte-tohm-377903.jpeg";
import cof2 from "../assets/pexels-chevanon-photography-302899.jpeg";
import cof3 from "../assets/pexels-chevanon-photography-324028.jpeg";
import cof4 from "../assets/pexels-dominika-roseclay-977878.jpeg";
import cof5 from "../assets/pexels-tyler-nix-2396220.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
Aos.init({
  duration: 1000,
});
function FirstPage() {
  return (
    <div className="firstPageContent">
      <p className="ngopi" data-aos="fade-down">
        Enjoy your favourite coffee with Ngopi
      </p>
      <p className="wish" data-aos="fade-up">
        Everthing you'd ever wished for in one cup
      </p>
      <p className="para" data-aos="fade-up">
        Discover tranquility at Ngopi a sanctuary for unwinding, where your
        evenings are perfected with relaxation and rich flavours
      </p>

      <a href="#" data-aos="fade-up">
        <button id="images">
          explore our products{" "}
          <FontAwesomeIcon className="arrow" icon={faArrowDown} />
        </button>
      </a>
      <div className="coffeeImages" id="products">
        <div className="zoomImage" data-aos="fade-up" data-aos-duration="400">
          <img src={cof1} alt="" loading="lazy" />
        </div>
        <div className="zoomImage" data-aos="fade-up" data-aos-duration="1000">
          <img src={cof2} alt="" loading="lazy" />
        </div>
        <div className="zoomImage" data-aos="fade-up" data-aos-duration="1600">
          <img src={cof3} alt="" loading="lazy" />
        </div>
        <div className="zoomImage" data-aos="fade-up" data-aos-duration="2200">
          <img src={cof4} alt="" loading="lazy" />
        </div>
        <div className="zoomImage" data-aos="fade-up" data-aos-duration="2800">
          <img src={cof5} alt="" loading="lazy" />
        </div>
      </div>
      <div className="numbers">
        <span>
          <p>30+</p>
          <p>Coffee Variant</p>
        </span>
        <span>
          <p>20+</p>
          <p>Meeting room</p>
        </span>
        <span>
          <p>25+</p>
          <p>Event space</p>
        </span>
        <span>
          <p>40+</p>
          <p>Global Achievement</p>
        </span>
      </div>
    </div>
  );
}

export default FirstPage;

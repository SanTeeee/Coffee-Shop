import cof1 from "../assets/pexels-brigitte-tohm-377903.jpeg";
import cof2 from "../assets/pexels-chevanon-photography-302899.jpeg";
import cof3 from "../assets/pexels-chevanon-photography-324028.jpeg";
import cof4 from "../assets/pexels-dominika-roseclay-977878.jpeg";
import cof5 from "../assets/pexels-tyler-nix-2396220.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function FirstPage() {
  return (
    <div className="firstPageContent">
      <p className="ngopi">Enjoy your favourite coffee with Ngopi</p>
      <p className="wish">Everthing you'd ever wished for in one cup</p>
      <p className="para">
        Discover tranquility at Ngopi a sanctuary for unwinding, where your
        evenings are perfected with relaxation and rich flavours
      </p>

      <a href="#">
        <button id="images">
          explore our products{" "}
          <FontAwesomeIcon className="arrow" icon={faArrowDown} />
        </button>
      </a>
      <div className="coffeeImages" id="products">
        <div className="zoomImage">
          <img src={cof1} alt="" loading="lazy" />
        </div>
        <div className="zoomImage">
          <img src={cof2} alt="" loading="lazy" />
        </div>
        <div className="zoomImage" loading="lazy">
          <img src={cof3} alt="" />
        </div>
        <div className="zoomImage" loading="lazy">
          <img src={cof4} alt="" />
        </div>
        <div className="zoomImage" loading="lazy">
          <img src={cof5} alt="" />
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

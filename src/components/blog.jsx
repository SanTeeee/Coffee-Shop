import image1 from "../assets/rest1.jpeg";
import image2 from "../assets/rest2.jpeg";
import image3 from "../assets/rest3.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Blog() {
  return (
    <div className="blog">
      <div className="secondPageContent">
        <p>blog</p>
        <h3>read our articles</h3>
      </div>
      <div className="blogCards">
        <div className="card one" data-aos="fade-right" data-aos-duration="500">
          <img src={image1} alt="" />
          <div className="calender">
            <div className="nameIcon">
              <FontAwesomeIcon className="user" icon={faUser} />
              <p>John Doe</p>
            </div>
            <div className="date">
              <FontAwesomeIcon icon={faCalendarDays} className="cal" />
              <p>Feb 23, 2024</p>
            </div>
          </div>
          <div className="lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            obcaecati mollitia vitae.
          </div>
          <a href="#">
            View Details
            <FontAwesomeIcon icon={faChevronRight} />
          </a>
        </div>
        <div className="card two" data-aos="fade-right" data-aos-duration="500">
          {" "}
          <img src={image2} alt="" />
          <div className="calender">
            <div className="nameIcon">
              <FontAwesomeIcon className="user" icon={faUser} />
              <p>John Doe</p>
            </div>
            <div className="date">
              <FontAwesomeIcon icon={faCalendarDays} className="cal" />
              <p>Feb 23, 2024</p>
            </div>
          </div>
          <div className="lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            obcaecati mollitia vitae.
          </div>
          <a href="#">
            View Details
            <FontAwesomeIcon icon={faChevronRight} />
          </a>
        </div>
        <div
          className="card three"
          data-aos="fade-right"
          data-aos-duration="500">
          {" "}
          <img src={image3} alt="" />
          <div className="calender">
            <div className="nameIcon">
              <FontAwesomeIcon className="user" icon={faUser} />
              <p>John Doe</p>
            </div>
            <div className="date">
              <FontAwesomeIcon icon={faCalendarDays} className="cal" />
              <p>Feb 23, 2024</p>
            </div>
          </div>
          <div className="lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            obcaecati mollitia vitae.
          </div>
          <a href="#">
            View Details
            <FontAwesomeIcon icon={faChevronRight} />
          </a>
        </div>
      </div>
      <a href="#">
        <button>
          read more
          <FontAwesomeIcon className="arrow" icon={faArrowDown} />
        </button>
      </a>
    </div>
  );
}

export default Blog;

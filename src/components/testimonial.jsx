import face1 from "../assets/face1.jpeg";
import face2 from "../assets/face2.jpeg";
import face3 from "../assets/face3.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Testimonial() {
  return (
    <div id="testimonial">
      <div className="secondPageContent">
        <p>Testimonial</p>
        <h3>what our buyers say</h3>
      </div>
      <div className="testimonialCards">
        <div className="firstCard">
          <div className="avatar">
            <img src={face1} alt="" className="aboutImg" />
            <div className="nameAndStar">
              <p>Michael Echeta</p>
              <FontAwesomeIcon className="star1" icon={faStar} />
              <FontAwesomeIcon className="star1" icon={faStar} />
              <FontAwesomeIcon className="star1" icon={faStar} />
              <FontAwesomeIcon className="star1" icon={faStar} />
              <FontAwesomeIcon className="star1" icon={faStar} />
            </div>
          </div>
          <div className="cardText">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis sunt
            porro, laudantium at omnis dicta eveniet cupiditate error reiciendis
            id consequatur dolore accusamus asperiores odio blanditiis
            laboriosam earum beatae minima officiis veniam maiores nihil
            eligendi architecto.
          </div>
        </div>

        <div className="secondCard">
          <div className="avatar">
            <img src={face2} alt="" className="aboutImg" />
            <div className="nameAndStar">
              <p>Vaughn Bobrisky</p>
              <FontAwesomeIcon className="star1" icon={faStar} />
              <FontAwesomeIcon className="star1" icon={faStar} />
              <FontAwesomeIcon className="star1" icon={faStar} />
              <FontAwesomeIcon className="star1" icon={faStar} />
              <FontAwesomeIcon className="star1" icon={faStar} />
            </div>
          </div>
          <div className="cardText">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis sunt
            porro, laudantium at omnis dicta eveniet cupiditate error reiciendis
            id consequatur dolore accusamus asperiores odio blanditiis
            laboriosam earum beatae minima officiis veniam maiores nihil
            eligendi architecto.
          </div>
        </div>
        <div className="thirdCard">
          <div className="avatar">
            <img src={face3} alt="" className="aboutImg" />
            <div className="nameAndStar">
              <p>Kim BobNotRisky</p>
              <FontAwesomeIcon className="star1" icon={faStar} />
              <FontAwesomeIcon className="star1" icon={faStar} />
              <FontAwesomeIcon className="star1" icon={faStar} />
              <FontAwesomeIcon className="star1" icon={faStar} />
              <FontAwesomeIcon className="star1" icon={faStar} />
            </div>
          </div>
          <div className="cardText">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis sunt
            porro, laudantium at omnis dicta eveniet cupiditate error reiciendis
            id consequatur dolore accusamus asperiores odio blanditiis
            laboriosam earum beatae minima officiis veniam maiores nihil
            eligendi architecto.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;

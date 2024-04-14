import coffee1 from "../assets/coffee2.jpeg";
import coffee2 from "../assets/coffeeforaboutus1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function ThirdPageContents() {
  return (
    <div id="aboutUs">
      <div className="secondPageContent">
        <p>About us</p>
        <h3>why we are the best</h3>
      </div>
      <div className="writeUp">
        <div className="texter">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            corporis quod voluptate, eaque neque doloremque fugit nobis totam,
            eum similique, temporibus esse necessitatibus obcaecati. Culpa ut
            aut exercitationem corporis, corrupti ea cupiditate.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Dignissimos totam tempore doloribus ad qui labore quis ipsam
            repellat accusantium non!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut illo
            autem ab neque, explicabo odit odio iure quia aliquam, in eaque
            expedita quae eos labore tempore inventore. Maxime, expedita! Et
            quis officia animi quaerat nulla.
          </p>
          <a href="#">
            <button>
              read more
              <FontAwesomeIcon className="arrow" icon={faArrowDown} />
            </button>
          </a>
        </div>
        <div className="images2">
          <img src={coffee1} alt="" loading="lazy" />
          <img src={coffee2} alt="" loading="lazy" />
        </div>
      </div>
    </div>
  );
}

export default ThirdPageContents;

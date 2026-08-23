import pizzaIcon from '../assets/pizza.png';
import sodaIcon from '../assets/soda.png';
import friseIcon from '../assets/frise.png';
import Pepperoni from '../assets/p-3.png';
import Veggie from '../assets/p-1.png';
import ChickenRanch from '../assets/p-6.png';
import starIcon from '../assets/star.svg';
import arrowRight from '../assets/arrow-right.svg';
import '../css/style.css'


function Popular(){
    return(
        <section className="popular">
      <h2>Popular Food</h2>
      <div className="popular-categorize-divs">
        <button className="popular-category-div all-pop">All</button>
        <button className="popular-category-div">
          Pizza
        </button>
        <button className="popular-category-div">
          Frise
        </button>
        <button className="popular-category-div">
          Soda
        </button>
        <button className="popular-category-div">Others</button>
      </div>

      <div className="popular-foods-divs">
        <div className="popular-foods-div">
          <img src={Pepperoni} alt="Pepperoni Pizza" className="pop-food-img" />
          <h4>Pepperoni</h4>
          <div className="popular-food-info">
            <div className="popular-food-rate">
              <img src={starIcon} alt="Star" />
              <p>4.7</p>
            </div>
            <div className="popular-food-info-price">
              <h5>$21.00</h5>
            </div>
          </div>
        </div>
        <div className="popular-foods-div mid-popular-foods-div">
          <img src={Veggie} alt="Veggie Pizza" className="pop-food-img" />
          <h4 className="mid-pop-foods-name">Veggie</h4>
          <div className="popular-food-info">
            <div className="popular-food-rate">
              <img src={starIcon} alt="Star" />
              <p>4.9</p>
            </div>
            <div className="popular-food-info-price">
              <h5>$21.00</h5>
            </div>
          </div>
        </div>
        <div className="popular-foods-div">
          <img src={ChickenRanch} alt="Chicken Ranch Pizza" className="pop-food-img" />
          <h4>Chicken Ranch</h4>
          <div className="popular-food-info">
            <div className="popular-food-rate">
              <img src={starIcon} alt="Star" />
              <p>4.5</p>
            </div>
            <div className="popular-food-info-price">
              <h5>$21.00</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="popular-button-div">
        <button>
          Explore All Foods
          <img src={arrowRight} alt="Arrow Right" />
        </button>
      </div>
    </section>
    )
}

export default Popular;
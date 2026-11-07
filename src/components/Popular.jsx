import starIcon from '../assets/star.svg';
import arrowRight from '../assets/arrow-right.svg';
import '../css/style.css';
import { POPULAR_CATEGORIES, POPULAR_FOODS } from '../constants';

function Popular() {
    return (
        <section className="popular" id='popular'>
            <h2>Popular Food</h2>
            <div className="popular-categorize-divs">
                {POPULAR_CATEGORIES.map((category) => (
                    <button
                        key={category.id}
                        className="popular-category-div"
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            <div className="popular-foods-divs">
                {POPULAR_FOODS.map((food) => (
                    <div
                        key={food.id}
                        className="popular-foods-div"
                    >
                        <img src={food.img} alt={food.name + " Pizza"} className="pop-food-img" />
                        <h4 className={food.isFeatured ? 'mid-pop-foods-name' : ''}>{food.name}</h4>
                        <div className="popular-food-info">
                            <div className="popular-food-rate">
                                <img src={starIcon} alt="Star" />
                                <p>{food.rating}</p>
                            </div>
                            <div className="popular-food-info-price">
                                <h5>{food.price}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="popular-button-div">
                <button>
                    Explore All Foods
                    <img src={arrowRight} alt="Arrow Right" />
                </button>
            </div>
        </section>
    );
}

export default Popular;
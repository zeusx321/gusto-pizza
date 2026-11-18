import starIcon from '../../assets/star.svg';
import arrowRight from '../../assets/arrow-right.svg';
import '../../css/style.css';
import { POPULAR_CATEGORIES, POPULAR_FRISE, POPULAR_PIZZA, POPULAR_SODA } from '../../constants';
import { useLocation } from 'react-router-dom'
import { useState } from 'react';

function Popular() {
    const location = useLocation();
    const [ category, setCategory ] = useState('');

    return (
        <section className="popular" id='popular'>
            <h2>Popular Food</h2>
            <div className="popular-categorize-divs">
                {POPULAR_CATEGORIES.map((category) => (
                    <a
                        key={category.id}
                        className="popular-category-div"
                        style={{
                            backgroundColor: category.url == location.hash? 'white' : 'rgba(227, 223, 215, 0.075)',
                            border: category.url == location.hash? '0px rgba(227, 223, 215, 0.233) solid' : '1px rgba(227, 223, 215, 0.233) solid',
                            color: category.url == location.hash? 'var(--secondary-color)' : ''
                        }}
                        href={category.url}
                        onClick={() => setCategory(category.name)}
                    >
                        {category.name}
                    </a>
                ))}
            </div>

            <div className="popular-foods-divs">
                {(category == 'Pizza'? POPULAR_PIZZA : category == 'Frise'? POPULAR_FRISE : POPULAR_SODA).map((food) => (
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
                                <h5>${food.price}</h5>
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
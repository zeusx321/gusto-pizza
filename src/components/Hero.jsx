import heroPizza from '../assets/hero-pizza-img.png';
import playButton from '../assets/play-circle.svg';
import customerImg from '../assets/user.png';
import '../css/style.css'

function Hero(){
    return (
        <section className="hero">
            <div className="hero__image">
                <img src={heroPizza} alt="Pizza" />
                <h2>G<br />U<br />S<br />T<br />O</h2>
                <div className="hero-image__overlay"></div>
            </div>
            <div className="hero-content">
                <div className="hero-content-info">
                    <h2>Feel the taste of Italian pizza</h2>
                    <p>Feel the taste of the most popular Italian food from anywhere, anytime.
                    Crafted with passion and delivered fresh to your door.</p>

                    <div className="hero-content__buttons">
                        <button className="hero-content__order-button">Order Now</button>
                        <button className="hero-content__play-button">
                            <img src={playButton} alt="play" />
                            How to Order
                        </button>
                    </div>
                </div>

                <div div className="hero-content__testimonial"x>
                    <div className="hero-content__customer flex-center">
                        <h4>24<span>k+</span></h4>
                        <p>Happy Customers</p>
                    </div>

                <div className="hero-content__review">
                    <img src={customerImg} alt="user" />
                    <p>"This is the best Italian food delivery service that ever existed."</p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Hero;
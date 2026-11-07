import aboutPizza from '../assets/about-pizza.png';
import arrowUp from '../assets/arrow-up-right.svg';
import '../css/style.css'

function About(){
    return(
        <section className="about" id='about-us'>
        <div className="about-imgae-div">
            <img src={aboutPizza}alt="Pizza" />
            <h4>Buono</h4>
            <button className="about-button">Learn More
                <img src={arrowUp} alt="Arrow Up" />
            </button>

            <div className="about__div-overlay"></div>
        </div>
        <div className="about-info">
            <div className="about-info-div">
                <p>About us</p>
                <h4>Our mission is to bring true Italian pizza to you.</h4>
                <p>We will continue to provide the experience of pizza, the Italian mindset of hospitality, with our shopping and dining for our customers.</p>
            </div>
        </div>
    </section>
    )
}

export default About;
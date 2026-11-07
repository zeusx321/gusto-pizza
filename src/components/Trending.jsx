import React from "react";
import ChickenRanch from "../assets/p-6.png";
import Pepperoni from "../assets/p-3.png";
import CheckCircle from "../assets/check-circle.svg";
import { TRENDING_CHECKS } from "../constants";

const Trending = () => {
  return (
    <section className="trending" id="trending">
        <div className="trending-circle">
            <p>DISCOVER</p>
        </div>
      <div className="trending-div">
        <div className="trending-text-main">
          <div className="trending-text-div">
            <div className="trending-text">
              <p>What's Trending?</p>
              <h2>Chicken Ranch</h2>
              <p>Feel the taste of the most delicious pizza here.</p>
            </div>
            <div className="trending-check">
              {TRENDING_CHECKS.map((item, index) => (
                <div key={index} className="trending-check-div">
                  <img src={CheckCircle} alt="Check Circle" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="trending-img-div">
          <img src={ChickenRanch} alt="Chicken Ranch" />
        </div>
      </div>
      <div className="trending-div">
        <div className="trending-img-div">
          <img src={Pepperoni} alt="Pepperoni" />
        </div>
        <div className="trending-text-main">
          <div className="trending-text-div">
            <div className="trending-text">
              <p>What's Trending?</p>
              <h2>Pepperoni</h2>
              <p>Feel the taste of the most delicious pizza here.</p>
            </div>
            <div className="trending-check">
              {TRENDING_CHECKS.map((item, index) => (
                <div key={index} className="trending-check-div">
                  <img src={CheckCircle} alt="Check Circle" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
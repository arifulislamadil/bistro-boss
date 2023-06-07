import React from "react";

import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import recommendFood1 from "../../../assets/home/slide1.jpg";
import recommendFood2 from "../../../assets/home/slide2.jpg";
import recommendFood3 from "../../../assets/home/slide3.jpg";

const ShouldTry = () => {
  return (
    <div className="my-16">
      <SectionTitle
        subHeading="Should Try"
        heading="CHEF RECOMMENDS"
      ></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 text-center">
        <div className="card w-96 glass">
          <figure>
            <img className="w-full h-80" src={recommendFood1} alt="car!" />
          </figure>
          <div className="py-4">
            <h2 className="font-bold text-xl">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken</p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline uppercase mt-4">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 glass">
          <figure>
            <img className="w-full h-80" src={recommendFood2} alt="car!" />
          </figure>
          <div className="">
            <h2 className="font-bold text-xl mt-4">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline uppercase mt-4">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 glass">
          <figure>
            <img className="w-full h-80" src={recommendFood3} alt="car!" />
          </figure>
          <div className="">
            <h2 className="font-bold text-xl mt-4">Life hack</h2>
            <p>How to park your car at your garage?</p>
            <div className="card-actions justify-center mt-4">
              <button className="btn btn-outline uppercase">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default ShouldTry;

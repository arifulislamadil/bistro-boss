import React, { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaQuoteLeft } from "react-icons/fa";
// rating import
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

// slider imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-20">
      <SectionTitle
        subHeading="What Our Client Say"
        heading="TESTIMONIALS"
      ></SectionTitle>
      <div className="text-center">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide className="px-40 " key={review._id}>
              <div className="space-y-3">
                <div className="text-center inline-block text-6xl">
                  <FaQuoteLeft />
                </div>

                <Rating
                  className="mx-auto"
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <p>{review.details}</p>
                <h3 className="text-2xl text-orange-400">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;

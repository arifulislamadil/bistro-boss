import { Helmet } from "react-helmet-async";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import ShouldTry from "../ShouldTry/ShouldTry";
import Testimonials from "../Testimonials/Testimonials";
import Banner from "../banner/Banner";
import BistroBoss from "../bistroBoss/BistroBoss";
import PopularMenu from "../popularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss| Home</title>
      </Helmet>
      <Banner />
      <Category />
      <BistroBoss />
      <CallUs />
      <ShouldTry />
      <PopularMenu />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;

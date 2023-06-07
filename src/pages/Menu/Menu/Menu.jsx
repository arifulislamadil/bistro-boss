import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import MenuImg from "../../../assets/menu/banner3.jpg"
import DessertImg from "../../../assets/menu/dessert-bg.jpeg"
import PizzaImg from "../../../assets/menu/pizza-bg.jpg"
import SaladImg from "../../../assets/menu/salad-bg.jpg"
import SoupImg from "../../../assets/menu/soup-bg.jpg"
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu]=useMenu();
    const desserts =menu.filter(item=>item.category==="dessert");
    const soup =menu.filter(item=>item.category==="soup");
    const salad =menu.filter(item=>item.category==="salad");
    const pizza =menu.filter(item=>item.category==="pizza");
    const offered =menu.filter(item=>item.category==="offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss| Menu</title>
      </Helmet>
     <Cover img={MenuImg} title="Our Menu"></Cover>
     <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
     <MenuCategory items={offered}></MenuCategory>
     <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
     <MenuCategory items={desserts} title="dessert" img={DessertImg}></MenuCategory>
     <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
     <MenuCategory items={pizza} title="pizza" img={PizzaImg}></MenuCategory>
     <MenuCategory items={salad} title="salad" img={SaladImg}></MenuCategory>
     <MenuCategory items={soup} title="soup" img={SoupImg}></MenuCategory>
    </div> 
  );
};

export default Menu;

import React from "react";
import { FaCalendar, FaHamburger, FaHome, FaShoppingCart, FaThermometerFull, FaWallet } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
  <Outlet/>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      <li><Link to="/"><FaHome></FaHome> Home</Link></li>
      <li><Link to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart</Link></li>
      <li><Link to="/"><FaWallet></FaWallet> Wallet Historys</Link></li>
      <li><Link to="/"><FaCalendar></FaCalendar> Reservation </Link></li>
      <div className="divider"></div>
      <li><Link to="/"><FaHome></FaHome> Home</Link></li>
      <li><Link to="/menu"><GiHamburgerMenu></GiHamburgerMenu> Menu </Link></li>
      <li><Link to="/order/salad"><FaWallet></FaWallet> Wallet Historys</Link></li>
      <li><Link to="/"><FaCalendar></FaCalendar> Reservation </Link></li>

    </ul>
  
  </div>
</div>
    </div>
  );
};

export default Dashboard;

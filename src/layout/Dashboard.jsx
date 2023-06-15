import React, { useContext } from "react";
import {
  FaBook,
  FaCalendar,
  FaHamburger,
  FaHome,
  FaShoppingCart,
  FaThermometerFull,
  FaUser,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import userCart from "../hooks/useCart";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const [cart] = userCart();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  // TODO: load data from database
  const isAdmin = true;
  return (
    <div>
      <div className="drawer lg:drawer-open test">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <Outlet />
        </div>
        <div iv className="drawer-side bg-[#D1A054]">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/home">
                    <FaHome></FaHome> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addItem">
                   
                    <FaUtensils></FaUtensils> Add Item
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/history">
                    <FaBook></FaBook> Manage Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allusers">
                    <FaUsers></FaUsers> All Users
                    <div className="badge badge-secondary">
                      + {users?.length || 0}
                    </div>
                  </NavLink>
                </li>
                <div className="divider"></div>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/home">
                    <FaHome></FaHome> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/reservation">
                    <FaCalendar></FaCalendar> Reservation{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/history">
                    <FaWallet></FaWallet> Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/mycart">
                    <FaShoppingCart></FaShoppingCart> My Cart
                    <div className="badge badge-secondary">
                   
                      + {cart?.length || 0}
                    </div>
                  </NavLink>
                </li>
                <div className="divider"></div>
              </>
            )}
            <li>
              <NavLink to="/">
                <FaHome></FaHome> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu">
                <GiHamburgerMenu></GiHamburgerMenu> Menu{" "}
              </NavLink>
            </li>
            <li>
              <NavLink to="/order/salad">
                <FaWallet></FaWallet> Wallet Historys
              </NavLink>
            </li>
            <li>
              <NavLink to="/">
                <FaCalendar></FaCalendar> Reservation{" "}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

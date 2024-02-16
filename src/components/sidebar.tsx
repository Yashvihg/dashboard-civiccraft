import React from "react";
import Logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";

// import ListElement from "./listElement";

const Sidebar: React.FC = () => {
  const linkClass = "flex items-center justify-start p-3 text-primary-black";
  const { pathname } = useLocation();

  const values = [
    {
      elementName: "Dashboard",
      iconName: "fi-rr-apps-add",
      link: "/dashboard",
    },
    {
      elementName: "Bookings",
      iconName: "fi-rr-shopping-bag",
      link: "/bookings",
    },
    { elementName: "Cancelled", iconName: "fi-rr-users", link: "/cancelled" },
    { elementName: "Refund", iconName: "fi-rr-folder-minus", link: "/refund" },
    {
      elementName: "Chat and Support",
      iconName: "fi-rr-comment",
      link: "/support",
    },
    {
      elementName: "Add New Entity",
      iconName: "fi-rr-settings",
      link: "/add-entity",
    },
  ];

  return (
    <div className="w-60 flex flex-col justify-between">
      <div className="flex flex-col items-center justify-center">
        <img src={Logo} alt="main-logo" className="w-34 h-20 m-6 mb-10" />
        <ul className="pb-20">
          {/* <ListElement elementName="Dashboard" iconName="fi-rr-apps-add" /> */}
          {values.map((value, index) => (
            <Link
              to={value.link}
              className={classNames(
                pathname === value.link
                  ? " text-white rounded-2xl bg-primary-blue"
                  : "",
                linkClass
              )}
            >
              <li key={index} className={linkClass}>
                <i className={`fi ${value.iconName} pr-2 text-xl`}></i>
                <p className="pb-1">{value.elementName}</p>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex flex-col items-start ms-5 justify-center">
        <span className="flex items-center justify-center bg-primary-grey p-3 px-6 rounded-xl">
          <i className="fi fi-rr-headset pr-2 text-xl"></i>
          <p className="pb-1">Contact Support</p>
        </span>
        <span className="flex items-center justify-center text-primary-red p-3 px-6 rounded-xl mb-5">
          <i className="fi fi-rr-sign-out-alt pr-2 text-xl"></i>
          <p className="pb-1">Logout</p>
        </span>
      </div>
    </div>
  );
};
export default Sidebar;

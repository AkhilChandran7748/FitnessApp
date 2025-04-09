import React from "react";
import { Button } from "primereact/button";
import { FaHome, FaCalendarAlt, FaCog } from "react-icons/fa"; // Using react-icons for icons
import { Link } from "react-router-dom";
import MenuFooter from "../common/MenuFooter";

const MobileFooter = () => {
  const adminMenu = [
    { path: "/home", label: "Home", icon: <FaHome /> },
    { path: "/calendar", label: "Calendar", icon: <FaCalendarAlt /> },
    { path: "/settings", label: "Settings", icon: <FaCog /> },
  ];

  return <MenuFooter menuItems={adminMenu} />;
};

export default MobileFooter;

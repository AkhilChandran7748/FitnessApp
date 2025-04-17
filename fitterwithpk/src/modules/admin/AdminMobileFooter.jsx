import React from "react";
import { Button } from "primereact/button";
import { FaHome, FaCalendarAlt, FaCog } from "react-icons/fa"; // Using react-icons for icons
import { Link } from "react-router-dom";
import MenuFooter from "../common/MenuFooter";
import { RENDER_URL } from "../../Utils/Urls";

const MobileFooter = () => {
  const adminMenu = [
    { path: RENDER_URL.ADMIN_DASHBOARD, label: "Home", icon: <FaHome /> },
    { path: RENDER_URL.ADMIN_DASHBOARD, label: "Calendar", icon: <FaCalendarAlt /> },
    { path: RENDER_URL.ADMIN_DASHBOARD, label: "Settings", icon: <FaCog /> },
  ];

  return <MenuFooter menuItems={adminMenu} />;
};

export default MobileFooter;

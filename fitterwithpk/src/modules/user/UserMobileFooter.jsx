import React from "react";
import { Button } from "primereact/button";
import { FaHome, FaCalendarAlt, FaCog } from "react-icons/fa"; // Using react-icons for icons
import { Link } from "react-router-dom";
import MenuFooter from "../common/MenuFooter";

const UserMobileFooter = () => {
    const userMenu = [
        { path: "/home", label: "Home", icon: <FaHome /> },
        { path: "/calendar", label: "Target", icon: <FaCalendarAlt /> },
        { path: "/settings", label: "Profile", icon: <FaCog /> },
    ];

    return <MenuFooter menuItems={userMenu} />;

};

export default UserMobileFooter;

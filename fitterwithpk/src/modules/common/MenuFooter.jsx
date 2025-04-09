import React from "react";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

const MenuFooter = ({ menuItems }) => {
    return (
        <div className="mobile-footer fixed-bottom bg-dark text-white d-md-none">
            <div className="d-flex justify-content-around py-2">
                {menuItems.map((item, index) => (
                    <Link key={index} to={item.path} className="text-white text-center">
                        <Button
                            icon={item.icon}
                            className="p-button-rounded p-button-text text-white"
                        />
                        <div>{item.label}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MenuFooter;
import React, { useState, useEffect } from "react";
import { Button } from 'primereact/button';
import { Sidebar } from "primereact/sidebar";
import { Menu } from 'primereact/menu';
import { useNavigate } from "react-router-dom";
import { RENDER_URL } from "../../Utils/Urls";
import { ManageLocalStorage } from "../../Services/Localstorage";

const AdminSideBar = ({ currentPath }) => {
    const [visible, setVisible] = useState(false);
    const [activeItem, setActiveItem] = useState(null);
    const navigate = useNavigate();
    const onLogOut = () => {
        navigate({
            pathname: RENDER_URL.GUEST_DASHBOARD,
        });
        window.location.reload();
        ManageLocalStorage.clear();

    }
    const items = [
        { label: 'Home', icon: 'pi pi-home', url: RENDER_URL.ADMIN_DASHBOARD },
        { label: 'Logout', icon: 'pi pi-user-minus', action: onLogOut },
    ];

    useEffect(() => {
        const active = items.find(item => item.url === currentPath);
        if (active) {
            setActiveItem(active.label);
        }
    }, [currentPath]);

    return (
        <>
            <div className="nav nav-bar nav_bar_height">
                <div className="sidebar_menu_btn">
                    <Button icon="pi pi-bars" severity="secondary" aria-label="Filter" onClick={() => setVisible(true)} />
                </div>
            </div>

            <Sidebar visible={visible} onHide={() => setVisible(false)}>
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 sidebar_menu_wrapper">
                        <Menu
                            className="sidebar_menu"
                            model={items.map(item => ({
                                ...item,
                                className: activeItem === item.label ? "sidebar_active_menu_item" : "",
                                command: () => {
                                    item?.action && item.action()
                                    setActiveItem(item.label);
                                    item?.url && navigate(item.url);
                                    setVisible(false);
                                }
                            }))}
                        />
                    </div>
                </div>
            </Sidebar>
        </>
    );
};

export default AdminSideBar;

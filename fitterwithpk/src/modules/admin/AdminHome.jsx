import React from "react";
import AdminSideBar from "./AdminSideBar";
import ClientList from "./ClientList";
import AdminTiles from "./AdminTiles";
import MobileFooter from "./AdminMobileFooter";
const AdminHome = () => {

    return (<>
        <AdminSideBar />
        <div className="container fit_app_section">
            <AdminTiles />
            <div className="row mt-3">
                <ClientList />
            </div>
        </div>

        <MobileFooter />

    </>)
}
export default AdminHome
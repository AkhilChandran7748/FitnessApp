import React from "react";
import AdminSideBar from "./AdminSideBar";
import ClientList from "./ClientList";
import AdminTiles from "./AdminTiles";
const AdminHome = () => {




    return (<>
        <AdminSideBar />
        <div className="container-fluid fit_app_section">
            <AdminTiles />
            <div className="row">
                <ClientList />
            </div>
        </div>

    </>)
}
export default AdminHome
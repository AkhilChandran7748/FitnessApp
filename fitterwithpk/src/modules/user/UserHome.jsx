import React, { useEffect } from "react";
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import { RENDER_URL } from "../../Utils/Urls";
import UserSideBar from "./UserSideBar";
import { getDailyUpdate } from "./UserServices";
import UserPersonalInfo from "./UserPersonalInfo";
import UserMobileFooter from "./UserMobileFooter";
import TopTileMenu from "./TopTileMenu";
const UserHome = () => {
    const navigate = useNavigate();

    return (<>
        <UserSideBar />
        <div className="container fit_app_section">
            <div className="text-center p-0">
                <TopTileMenu />
            </div>
            <UserPersonalInfo />
        </div>
        <UserMobileFooter />
    </>)
}
export default UserHome
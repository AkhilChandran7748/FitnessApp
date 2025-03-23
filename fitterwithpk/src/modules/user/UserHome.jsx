import React, { useEffect } from "react";
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import { RENDER_URL } from "../../Utils/Urls";
import UserSideBar from "./UserSideBar";
import { getDailyUpdate } from "./UserServices";
const UserHome = () => {
    const navigate = useNavigate();
    
    return (<>
        <UserSideBar />
        <Button label="Daily Updates" onClick={() => navigate(RENDER_URL.DAILY_UPDATES)} size="large" />
        <Button label="Weekly Updates" size="large" /></>)
}
export default UserHome
import React from "react";
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import { RENDER_URL } from "../../Utils/Urls";
const UserHome = () => {
    const navigate = useNavigate();
    return (<><Button label="Daily Updates" onClick={() => navigate(RENDER_URL.DAILY_UPDATES)} size="large" />
        <Button label="Weekly Updates" size="large" /></>)
}
export default UserHome
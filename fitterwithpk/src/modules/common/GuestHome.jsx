import React, { useState } from "react";
import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import Login from "./Login";
import Register from "./Registration";
import { Sidebar } from "primereact/sidebar";
import { Menu } from 'primereact/menu';
import { RENDER_URL } from "../../Utils/Urls";
import GuestSideBar from "./GuestSideBar";
const GuestHome = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [visible, setVisible] = useState(false);

    /**
     * TODO
     * either convert to wrapper or manage gloabl menu selection
     */

    return (<>
        <main>
            <GuestSideBar />
        </main>
    </>)
}
export default GuestHome
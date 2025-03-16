import React, { useState } from "react";
import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import Login from "./Login";
import Register from "./Registration";
const GuestHome = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (<>
        <div className="card">
            <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                <TabPanel header="Login">
                    <p className="m-0 card">
                        <Login />
                    </p>
                </TabPanel>
                <TabPanel header="Registration">
                    <p className="m-0">
                       <Register tabChange={()=>setActiveIndex(0)}/>
                    </p>
                </TabPanel>
            </TabView>
        </div>
    </>)
}
export default GuestHome
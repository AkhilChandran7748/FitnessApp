import React from "react";
import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import Login from "./Login";
import Register from "./Registration";
const GuestHome = () => {
    return (<>
        <div className="card">
            <TabView>
                <TabPanel header="Login">
                    <p className="m-0 card">
                        <Login />
                    </p>
                </TabPanel>
                <TabPanel header="Registration">
                    <p className="m-0">
                       <Register/>
                    </p>
                </TabPanel>
            </TabView>
        </div>
    </>)
}
export default GuestHome